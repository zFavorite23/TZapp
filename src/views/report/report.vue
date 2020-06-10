<template>
  <div class="report">
    <van-nav-bar
      title="六郎庄村北"
      left-text="返回"
      left-arrow
      right-text="操作"
      @click-left="$router.push('/home')"
      @click-right="show = !show"
    >
      <template #right>
        <van-icon name="arrow-down" size="25" />
      </template>
    </van-nav-bar>

    <!-- 地图-->
    <baidu-map
      id="map"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      style="height:100vh"
      :scroll-wheel-zoom="true"
    >
      <div v-for="(item, index) in list3" :key="index">
        <!-- 正常 未点击 -->
        <bm-marker
          style="color:red"
          :icon="{
            url: require('../../assets/02.png'),
            size: { width: 30, height: 30 }
          }"
          :position="{ lng: item.lng, lat: item.lat }"
          @click="getClickInfo(item)"
        ></bm-marker>
      </div>
    </baidu-map>

    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '80%', height: '100%' }"
    >
      <!-- 监测点 -->
      <Select
        v-model="townId"
        :label-in-value="true"
        @change="getTownId($event)"
      >
        <option>请选择监测点</option>
        <Option
          v-for="item in options"
          :key="item.townId"
          :label="item.name"
          :value="item.townId"
          >{{ item.name }}</Option
        >
      </Select>

      <!-- 虫害 -->
      <Select v-model="specialId" @change="getSpecialId($event)">
        <option>请选择虫害</option>
        <Option
          v-for="item in options2"
          :key="item.specialId"
          :label="item.name"
          :value="item.specialId"
        ></Option>
      </Select>

      <!-- 表头 -->
      <van-cell>
        <span class="color">监测害虫</span>
        <span class="color">监测点名称</span>
        <span class="color">乡镇</span>
      </van-cell>

      <!-- 表单 -->
      <van-list>
        <van-cell v-if="list.length == 0">
          <div style="margin-left:35%">暂无最新数据！</div>
        </van-cell>
        <van-cell
          v-else
          v-for="(item, index) in list"
          :key="index"
          @click="addColor(index)"
          :class="{ active: index == current }"
        >
          <span class="text">{{ item.specialName }}</span>
          <span class="text">{{ item.location }}</span>
          <span class="text">{{ item.townName }}</span>
        </van-cell>
      </van-list>
    </van-popup>

    <!-- 按钮 -->
    <van-button class="but" type="info" @click="goSite()">确定</van-button>
  </div>
</template>
<script>
export default {
  data() {
    // const self = this;
    return {
      center: { lng: "", lat: "" },
      zoom: 15,
      current: "",
      show: false,
      // 监测点
      townId: "",
      options: [],
      // 虫害
      specialId: "",
      options2: [],
      // 固定点位
      list: [],
      list2: [],
      list3: [],
      likeKeyWords: "",
      query: "",
      type: true
    };
  },
  methods: {
    // 修改样式
    addColor(index) {
      // 点击添加样式
      this.current = index;
      this.show = !this.show;
    },

    // 获取所有乡镇
    getTownAll() {
      this.$axios({
        method: "get",
        url: "/pest/town/all"
      }).then(res => {
        // console.log(res);
        this.options = res.data.data;
      });
    },
    // 获取选择的城市id
    getTownId(e) {
      this.townId = e.target.value;

      if (this.townId === "请选择监测点") {
        this.likeKeyWords = "";
        this.getDotAll();
      }
      // 获取所选名称
      this.$axios({
        method: "get",
        url: "/pest/town/all"
      }).then(res => {
        this.options = res.data.data;
        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].townId == this.townId) {
            this.likeKeyWords = this.options[i].name;
          }
        }
        // 获取所有固定点位
        this.getDotAll();
      });
    },

    // 获取所有虫害
    getWormAll() {
      this.$axios({
        method: "get",
        url: "/pest/pest/all"
      }).then(res => {
        // console.log(res);
        this.options2 = res.data.data;
      });
    },
    // 获取选择虫害id
    getSpecialId(e) {
      this.specialId = e.target.value;

      if (this.specialId === "请选择虫害") {
        this.specialId = "";
        this.getDotAll();
      }

      // 获取所有固定点位
      this.getDotAll();
    },

    // 获取所有固定点位
    getDotAll() {
      this.$axios({
        method: "get",
        url: "/pest/pest/dot/all",
        params: {
          likeKeyWords: this.likeKeyWords,
          specialId: this.specialId
        }
      }).then(res => {
        this.list = res.data.data;
        // console.log(this.list);
        for (let i = 0; i < this.list.length; i++) {
          this.list2.push({
            longitude: this.list[i].longitude,
            latitude: this.list[i].latitude,
            // 虫子id
            specialId: this.list[i].specialId,
            // 树种
            varieties: this.list[i].varieties,
            // 监测点
            location: this.list[i].location,
            // 监测点id
            dotId: this.list[i].dotId
          });
        }
        // console.log(this.list2);
        // 进行坐标转换
        for (var i = 0; i < this.list2.length; i++) {
          this.list2[i].longitude = Number(this.list2[i].longitude);
          this.list2[i].latitude = Number(this.list2[i].latitude);
          this.list3.push(
            this.wgs84togcj02tobd09(
              this.list2[i].longitude,
              this.list2[i].latitude,
              this.list2[i].specialId,
              this.list2[i].varieties,
              this.list2[i].location,
              this.list2[i].dotId
            )
          );
        }
        // console.log(this.list3);
      });
    },

    // 坐标点转换
    wgs84togcj02tobd09(lng, lat, specialId, varieties, location, dotId) {
      const xPI = (3.14159265358979324 * 3000.0) / 180.0;
      const PI = 3.1415926535897932384626;
      const a = 6378245.0;
      const ee = 0.00669342162296594323;
      // WGS84转GCj02
      let dlat = this.transformlat(lng - 105.0, lat - 35.0);
      let dlng = this.transformlng(lng - 105.0, lat - 35.0);
      let radlat = (lat / 180.0) * PI;
      let magic = Math.sin(radlat);
      magic = 1 - ee * magic * magic;
      let sqrtmagic = Math.sqrt(magic);
      dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * PI);
      dlng = (dlng * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * PI);
      let mglat = lat + dlat;
      let mglng = lng + dlng;
      // 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
      let z =
        Math.sqrt(mglng * mglng + mglat * mglat) +
        0.00002 * Math.sin(mglat * xPI);
      let theta = Math.atan2(mglat, mglng) + 0.000003 * Math.cos(mglng * xPI);
      let bdlng = z * Math.cos(theta) + 0.0065;
      let bdlat = z * Math.sin(theta) + 0.006;
      // return [bdlng, bdlat]
      return { lng: bdlng, lat: bdlat, specialId, varieties, location, dotId };
    },
    transformlat(lng, lat) {
      const PI = 3.1415926535897932384626;
      let ret =
        -100.0 +
        2.0 * lng +
        3.0 * lat +
        0.2 * lat * lat +
        0.1 * lng * lat +
        0.2 * Math.sqrt(Math.abs(lng));
      ret +=
        ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) *
          2.0) /
        3.0;
      ret +=
        ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) *
          2.0) /
        3.0;
      ret +=
        ((160.0 * Math.sin((lat / 12.0) * PI) +
          320 * Math.sin((lat * PI) / 30.0)) *
          2.0) /
        3.0;
      return ret;
    },
    transformlng(lng, lat) {
      const PI = 3.1415926535897932384626;
      let ret =
        300.0 +
        lng +
        2.0 * lat +
        0.1 * lng * lng +
        0.1 * lng * lat +
        0.1 * Math.sqrt(Math.abs(lng));
      ret +=
        ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) *
          2.0) /
        3.0;
      ret +=
        ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) *
          2.0) /
        3.0;
      ret +=
        ((150.0 * Math.sin((lng / 12.0) * PI) +
          300.0 * Math.sin((lng / 30.0) * PI)) *
          2.0) /
        3.0;
      return ret;
    },

    // 初始化地图
    handler({ BMap, map }) {
      this.wgs84togcj02tobd09(116.7542361, 39.85584722);
      var point = new BMap.Point(116.76671012599658, 39.86342669086597);
      map.centerAndZoom(point, 13);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
    },

    // 监测点
    getClickInfo(query) {
      this.query = query;
      console.log(this.query);
      this.type = !this.type;
    },

    // 跳转
    goSite() {
      if (this.query != "") {
        this.$router.push({
          path: "/site",
          query: {
            // 虫子id
            specialId: this.query.specialId,
            // 树种
            varieties: this.query.varieties,
            // 监测点
            location: this.query.location,
            // 监测点id
            dotId: this.query.dotId
          }
        });
      } else {
        this.$toast.fail("请选择监测点！");
      }
    }
  },
  created() {
    // 获取所有乡镇
    this.getTownAll();
    // 获取所有虫害
    this.getWormAll();
    // 获取所有固定点位
    this.getDotAll();
  }
};
</script>

<style lang="less" scoped>
.amap-demo {
  height: 100vh;
}
.active {
  background-color: #3196fa;
  .van-cell__value {
    color: #fff !important;
  }
}
.bm-view {
  width: 100%;
  height: 100vh;
}
.but {
  width: 100%;
}
.van-cell__value {
  display: flex;
}
.text {
  width: 95px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.color {
  color: #3196fa;
  width: 95px;
  text-align: center;
}
[class*="van-hairline"]::after {
  border-top: 0;
}

select {
  font-size: 16px;
  margin: 3% 0 0 3%;
  border-radius: 5%;
  border: 1px solid #3196fa;

  width: 140px;
  height: 30px;
  line-height: 20px;
  // border: none;
  outline: none;

  text-align: center;
  text-align-last: center;
  /* 去掉select自带的样式 */
  appearance: none;
  /* IE */
  -webkit-appearance: none;
  /* google */
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent !important;
}
</style>

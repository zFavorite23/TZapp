<template>
  <div class="upload">
    <!-- 导航栏 -->
    <van-nav-bar
      title="上报数据管理"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
      @click-right="isShow = !isShow"
    >
      <template #right>
        <van-icon name="arrow-down" size="25" />
      </template>
    </van-nav-bar>

    <!-- 弹窗层 -->
    <van-popup
      v-model="isShow"
      position="top"
      :style="{ height: '25%' }"
      class="popup"
    >
      <!-- 虫害 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="wormName"
        label="虫害"
        placeholder="请选择虫害"
        @click="showPicker4 = true"
      />
      <van-popup v-model="showPicker4" position="bottom">
        <van-picker
          show-toolbar
          :columns="wormList"
          @confirm="onConfirm4"
          @cancel="showPicker4 = false"
        />
      </van-popup>

      <!-- 监测点 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="townName"
        label="监测点"
        placeholder="请选择监测点"
        @click="showPicker5 = true"
      />
      <van-popup v-model="showPicker5" position="bottom">
        <van-picker
          show-toolbar
          :columns="townList"
          @confirm="onConfirm5"
          @cancel="showPicker5 = false"
        />
      </van-popup>

      <!-- 查询 -->
      <van-button type="info" class="but" @click="inquire()">查询</van-button>
    </van-popup>

    <!-- 表头 -->
    <van-cell style="padding-left:0;padding-right:0">
      <span class="color" style="width:25%">监测点名称</span>
      <span class="color" style="width:20%">监测害虫</span>
      <span class="color" style="width:20%">监测数量</span>
      <span class="color" style="width:35%">操作</span>
    </van-cell>

    <!-- 表单 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是有底线的"
      @load="getDataPage"
    >
      <van-cell
        v-for="(item, index) in dataList"
        :key="index"
        style="padding-left: 0 !important;padding-right: 0 !important;"
        @click="addColor(index)"
        :class="{ active: index == current1 }"
      >
        <span class="sty" style="width:20%;">{{ item.location }}</span>
        <span class="sty" style="width:25%">{{ item.specialName }}</span>
        <span class="sty" style="width:20%">{{ item.adultTotal }}</span>
        <span class="sty" style="width: 35%;color: #3196fa;">
          <span @click="getEdit(item.id, item.specialId)">修改</span>
          <span @click="getDeleteId(item.id)" style=" margin: 0 10%">删除</span>
          <span @click="getInfo(item.id, item.specialId)">查看</span>
        </span>
      </van-cell>
    </van-list>

    <!-- 删除 -->
    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="deleteData"
      description="请问是否删除？"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current1: "",
      // 删除框
      show: false,
      // 筛选框
      isShow: false,
      // 所有虫害
      wormList: [{ specialId: "", text: "全部" }], // 列表
      wormName: "", // 虫害名称
      specialId: "", // 虫害ID
      showPicker4: false,
      // 监测点
      townList: [{ dotId: "", text: "全部" }], // 列表
      townName: "", // 监测点名称
      dotId: "", // 监测点ID
      showPicker5: false,
      // 数据
      dataList: [], // 列表
      loading: false, // 是否处于加载阶段
      finished: false, // 是否加载已完成
      current: 1, // 默认页数
      actions: [{ name: "确定" }, { name: "取消" }],
      // 删除id
      id: ""
    };
  },
  methods: {
    // 点击添加样式
    addColor(index) {
      this.current1 = index;
    },

    // 获取删除id
    getDeleteId(id) {
      this.id = id;
      this.show = true;
    },

    // 删除数据
    deleteData(action) {
      this.dataList = [];
      if (action.name == "确定") {
        this.$axios({
          method: "delete",
          url: `/pest/pest/data/${this.id}`
        }).then(() => {
          this.current = 1;
          // 获取分页列表
          this.getDataPage();
          this.show = false;
          this.$toast.success("删除成功！");
        });
      } else {
        this.show = false;
      }
    },

    // 查看数据详情
    getInfo(id, specialId) {
      this.$router.push({
        path: "/uploadInfo",
        query: {
          id,
          specialId
        }
      });
    },

    // 跳转修改页
    getEdit(id, specialId) {
      this.$router.push({
        path: "./uploadEdit",
        query: {
          id,
          specialId
        }
      });
    },

    // 筛选功能---获取所有虫害
    getWormAll() {
      this.$axios({
        method: "get",
        url: "/pest/pest/all"
      }).then(res => {
        // console.log(res);
        res.data.data.forEach(item => {
          this.wormList.push({
            specialId: item.specialId,
            text: item.name
          });
        });
      });
    },

    // 筛选功能---虫害显示列表
    onConfirm4(value) {
      this.wormName = value.text;
      this.specialId = value.specialId;
      this.showPicker4 = false;
    },

    // 筛选功能---获取所有监测点
    getTownAll() {
      this.$axios({
        method: "get",
        url: "/pest/pest/dot/all"
      }).then(res => {
        // console.log(res);
        res.data.data.forEach(item => {
          this.townList.push({
            dotId: item.dotId,
            text: item.location
          });
        });
      });
    },

    // 筛选功能---监测点
    onConfirm5(value) {
      this.townName = value.text;
      this.dotId = value.dotId;
      this.showPicker5 = false;
    },

    // 筛选功能---查询数据
    inquire() {
      this.current = 1;
      // 清空原数据列表
      this.dataList = [];
      this.isShow = !this.isShow;
      // 筛选条件
      this.wormName = "";
      this.townName = "";
      // 获取分页列表
      this.getDataPage();
    },

    // 获取分页列表
    getDataPage() {
      this.$axios({
        method: "get",
        url: "/pest/pest/data/page",
        params: {
          current: this.current, //  页码
          size: 20, // 每页显示条数
          specialId: this.specialId, // 虫害ID
          dotId: this.dotId // 监测点ID
        }
      }).then(res => {
        // console.log(res);
        // 将数据添加到列表中
        var arr = res.data.data.records;
        this.dataList.push(...arr);
        // 将本次的loading 设置为false
        this.loading = false;
        // 判断是否还有数据 如果没有了则将finished 设置为true
        if (arr.length) {
          // 页码加一
          this.current++;
        } else {
          this.finished = true;
        }
      });
    }
  },
  created() {
    // 获取分页列表
    this.getDataPage();

    // 获取所有虫害
    this.getWormAll();

    // 获取所有乡镇
    this.getTownAll();
  }
};
</script>

<style lang="less" scoped>
.popup {
  padding-top: 3%;
}
.popup .van-cell {
  padding: 3%;
}
.but {
  margin-left: 10%;
  margin-top: 4%;
  width: 80%;
}
.sty {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.color {
  color: #3196fa;
  display: inline-block;
  text-align: center;
}
[class*="van-hairline"]::after {
  border-top: 0;
}
.active {
  background-color: #3196fa;
  .van-cell__value {
    color: #fff !important;
  }
  .sty {
    color: #fff !important
    ;
  }
}
</style>

<template>
  <div class="history">
    <!-- 导航栏 -->
    <van-nav-bar
      title="历史数据查询"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/home')"
      @click-right="show = !show"
    >
      <template #right>
        <van-icon name="arrow-down" size="25" />
      </template>
    </van-nav-bar>

    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      position="top"
      :style="{ height: '45%' }"
      class="popup"
    >
      <!-- 开始时间选择 -->
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value"
        label="开始时间"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <!-- 结束时间选择 -->
      <van-field
        readonly
        clickable
        name="datetimePicker2"
        :value="value2"
        label="结束时间"
        placeholder="点击选择时间"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" position="bottom">
        <van-datetime-picker
          v-model="currentDate2"
          type="date"
          @confirm="onConfirm2"
          @cancel="showPicker2 = false"
        />
      </van-popup>

      <!-- 状态 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="statusName"
        label="状态"
        placeholder="请选择（是否审核）"
        @click="showPicker3 = true"
      />
      <van-popup v-model="showPicker3" position="bottom">
        <van-picker
          show-toolbar
          :columns="statusList"
          @confirm="onConfirm3"
          @cancel="showPicker3 = false"
        />
      </van-popup>

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
    <van-cell>
      <span class="color" style="width:20%">监测点名称</span>
      <span class="color" style="width:17%">虫害</span>
      <span class="color" style="width:12%">数量</span>
      <span class="color" style="width:20%">时间</span>
      <span class="color" style="width:19%">是否审核</span>
      <span class="color" style="width:12%">操作</span>
    </van-cell>

    <!-- 表单 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我也是有底线的"
      @load="getHistoryList"
    >
      <van-cell
        v-for="(item, index) in historyList"
        :key="index"
        style="padding-left: 0 !important;padding-right: 0 !important;"
      >
        <!-- 监测点 -->
        <span class="sty" style="width:20%;">{{ item.location }}</span>
        <!-- 虫害 -->
        <span class="sty" style="width:17%">{{ item.specialName }}</span>
        <!-- 数量 -->
        <span class="sty" style="width:12%">{{ item.adultTotal }}</span>
        <!-- 时间 -->
        <span class="sty" style="width:20%">{{
          item.surveTime | datetime("YYYY-MM-DD")
        }}</span>
        <!-- 状态 -->
        <span class="sty" style="width:19%">
          {{ item.status == 0 ? "未审核" : "审合通过" }}
        </span>
        <span
          class="sty"
          style="width:12%;color:#3196fa"
          @click="goInfo(item.id, item.specialId)"
          >查看</span
        >
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询弹出层
      show: false,
      // 开始时间
      value: "",
      showPicker: false,
      currentDate: new Date(),
      // 结束时间
      value2: "",
      showPicker2: false,
      currentDate2: new Date(),
      // 审核状态
      statusList: [
        { status: "0", text: "未审核" },
        { status: "1", text: "审核通过" },
        { status: "2", text: "审核退回" }
      ],
      statusName: "", // 审核名称
      status: "", // 审核码
      showPicker3: false,
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
      // 历史数据
      historyList: [], // 列表
      loading: false, // 是否处于加载阶段
      finished: false, // 是否加载已完成
      current: 1 // 默认页数
    };
  },
  methods: {
    // 开始时间
    onConfirm() {
      this.showPicker = false;
      var date = this.currentDate;
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.value = `${date.getFullYear()}-${month}-${strDate}`;
    },

    // 结束时间
    onConfirm2() {
      this.showPicker2 = false;
      var date = this.currentDate2;
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.value2 = `${date.getFullYear()}-${month}-${strDate}`;
    },

    // 审核状态
    onConfirm3(value) {
      this.statusName = value.text;
      this.status = value.status;
      this.showPicker3 = false;
    },

    // 虫害
    onConfirm4(value) {
      this.wormName = value.text;
      this.specialId = value.specialId;
      this.showPicker4 = false;
    },

    // 监测点
    onConfirm5(value) {
      this.townName = value.text;
      this.dotId = value.dotId;
      this.showPicker5 = false;
    },

    // 获取所有虫害
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

    // 获取所有监测点
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

    // 获取所有历史数据
    getHistoryList() {
      this.$axios({
        method: "get",
        url: "/pest/pest/data/page",
        params: {
          current: this.current, //  页码
          size: 20, // 每页显示条数
          specialId: this.specialId, // 虫害ID
          dotId: this.dotId, // 监测点ID
          year: this.value.replace("-", "").replace("-", "")
        }
      }).then(res => {
        // console.log(res);
        // 将数据添加到列表中
        var arr = res.data.data.records;
        this.historyList.push(...arr);
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
    },

    // 查询
    inquire() {
      this.current = 1;
      // 清空原数据列表
      this.historyList = [];
      this.show = !this.show;
      // 调用接口
      this.getHistoryList();
      // 清空查询条件
      this.value = "";
      this.value2 = "";
      this.statusName = "";
      this.wormName = "";
      this.townName = "";
    },

    // 跳转详情页
    goInfo(id, specialId) {
      this.$router.push({
        path: "/uploadInfo",
        query: {
          id,
          specialId
        }
      });
    }
  },
  created() {
    // loading展示
    this.$toast.loading({
      forbidClick: true,
      mask: true,
      message: "加载中..."
    });
    // 获取历史数据
    this.getHistoryList();
    // 获取所有虫害
    this.getWormAll();
    // 获取所有乡镇
    this.getTownAll();
  }
};
</script>

<style scoped>
.but {
  margin-left: 10%;
  margin-top: 4%;
  width: 80%;
}
.popup {
  padding-top: 3%;
}
.popup .van-cell {
  padding: 3%;
}

.van-cell {
  padding-left: 0;
  padding-right: 0;
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
</style>

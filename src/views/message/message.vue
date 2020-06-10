<template>
  <div class="message">
    <!-- 导航栏 -->
    <van-nav-bar
      title="全区信息测报"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
      @click-right="show = !show"
      right-text="按钮"
    >
      <template #right>
        <van-icon name="arrow-down" size="25" />
      </template>
    </van-nav-bar>

    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      position="top"
      :style="{ height: '33%' }"
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

      <!-- 害虫类型 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value3"
        label="病害虫类型"
        placeholder="请选择（病害虫类型）"
        @click="showPicker3 = true"
      />
      <van-popup v-model="showPicker3" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm3"
          @cancel="showPicker3 = false"
        />
      </van-popup>

      <van-button type="info" class="but" @click="show = !show"
        >查询</van-button
      >
    </van-popup>

    <!-- 列表信息 -->
    <van-panel
      title="草履蚧测报"
      status="2020-5-12"
      @click="$router.push('/messageInfo')"
    >
      <div class="text">
        据区林保站监测,2月26日已监测到草履蚧若虫在杨树片林出现密集上树活动。由于各小区巡查受限,处理工作可能出现滞后。请各单位强が调沟通,尤其对各居民小区加强巡查防治,及时更换围环并清除害虫,避免发生扰民情況。
      </div>
    </van-panel>
    <van-panel
      title="双条杉天牛虫情测报"
      status="2020-5-12"
      @click="$router.push('/messageInfo')"
    >
      <div class="text">
        据区林保站监测我区双条杉天牛成虫即将进入羽化高峰期,3月15日在西集和张湾2虫。请各单位抓住最佳防治期即成虫期进行防治,防止虫害大面积发生。防治建议2.积极使用诱液、饵木监测透杀成虫;3.羽化盛期可使用2%噻虫等封干封冠防治。
      </div>
    </van-panel>
    <van-panel
      title="草履蚧测报"
      status="2020-5-12"
      @click="$router.push('/messageInfo')"
    >
      <div class="text">
        据区林保站监测,2月26日已监测到草履蚧若虫在杨树片林出现密集上树活动。由于各小区巡查受限,处理工作可能出现滞后。请各单位强が调沟通,尤其对各居民小区加强巡查防治,及时更换围环并清除害虫,避免发生扰民情況。
      </div>
    </van-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      // 开始时间
      value: "",
      showPicker: false,
      currentDate: new Date(),
      // 结束时间
      value2: "",
      showPicker2: false,
      currentDate2: new Date(),
      // 害虫类型
      value3: "",
      showPicker3: false,
      columns: ["美国白蛾", "桔小实蝇", "小地老虎", "国槐尺蠖"]
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
      this.currentDate = `${date.getFullYear()}-${month}-${strDate}`;
      this.value = this.currentDate;
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
      this.currentDate2 = `${date.getFullYear()}-${month}-${strDate}`;
      this.value2 = this.currentDate2;
    },

    // 害虫类型
    onConfirm3(value) {
      this.value3 = value;
      this.showPicker3 = false;
    }
  }
};
</script>

<style scoped>
.but {
  margin-left: 10%;
  margin-top: 7%;
  width: 80%;
}
.text {
  padding: 2% 3%;
  font-size: 26px;
  color: #969696;
}
.van-cell__title {
  color: #0099ff;
}
.popup {
  padding-top: 3%;
}
</style>

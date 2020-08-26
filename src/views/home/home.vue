<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar title="通州智慧园林" @click-right="onClickRight">
      <template #right>
        <van-icon name="setting-o" size="25" />
      </template>
    </van-nav-bar>

    <!-- 选项 -->
    <div class="botSide">
      <div class="nav">
        <div @click="$router.push('/report')">
          <span>
            <i class="el-icon-edit"></i>
            现场测报
          </span>
        </div>
        <div @click="$router.push('/message')">
          <span>
            <i class="el-icon-document-copy"></i>
            全区测报信息
          </span>
        </div>
        <div @click="$router.push('/upload')">
          <span>
            <i class="el-icon-upload2"></i>
            上报数据管理
          </span>
        </div>
        <div @click="$router.push('/history')">
          <span>
            <i class="el-icon-zoom-out"></i>
            历史数据查询
          </span>
        </div>
      </div>
    </div>

    <!-- 退出 -->
    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
      description="请问是否退出？"
    />

    <!-- 测报提醒弹出层 -->
    <van-dialog
      v-model="isShow"
      show-cancel-button
      title="测报提醒"
      messageAlign="left"
      :beforeClose="beforeClose"
      confirmButtonText="立即测报"
      cancelButtonText="忽略"
    >
      <div class="text">1.距离春尺蠖（2.15-4.15）测报还有3天!</div>
    </van-dialog>

    <!-- 测报信息弹出层 -->
    <van-dialog
      v-model="isShow2"
      show-cancel-button
      title="测报信息"
      :beforeClose="beforeClose2"
      confirmButtonText="查看更多"
      cancelButtonText="忽略"
    >
      <div class="text">
        <div>2020年2月28日发布</div>
        <div style="padding:15px 0">
          据区林保站监测,2月26日已监测到草履蚧若虫在杨树片林出现密集上树活动。由于各小区巡查受限,处理工作可能出现滞后。请各单位强が调沟通,尤其对各居民小区加强巡查防治,及时更换围环并清除害虫,避免发生扰民情況。
        </div>
        <div style="text-align:right">—通州区林保站</div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  退出
      show: false,
      //  告警
      isShow: false,
      isShow2: false,
      actions: [{ name: "确定" }, { name: "取消" }]
    };
  },
  methods: {
    // 退出操作
    onClickRight() {
      this.show = !this.show;
    },

    // 选择退出
    onSelect(action) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      if (action.name == "确定") {
        window.sessionStorage.removeItem("token");
        this.$router.push("/login");
      } else {
        this.show = false;
      }
    },

    // 测报提醒弹窗
    beforeClose(action, done) {
      if (action === "confirm") {
        this.$router.push("/report");
      } else if (action === "cancel") {
        done(); //关闭
        this.isShow2 = true;
      }
    },

    // 测报信息弹窗
    beforeClose2(action, done) {
      if (action === "confirm") {
        this.$router.push("/message");
      } else if (action === "cancel") {
        done(); //关闭
      }
    }
  },
  // 离开路由
  beforeRouteLeave(to, from, next) {
    // ...每次进入历史数据 数据不缓存
    to.meta.keepAlive = false;
    next();
  }
};
</script>

<style scoped>
.botSide {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
}

.nav {
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
}
.nav div {
  flex: 50%;
  margin-top: 15%;
  display: flex;
  justify-content: center;
}
.nav div span {
  color: #fff;
  background-color: #369ff2;
  width: 200px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  border-radius: 10%;
}

.quit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.isQuit {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.text {
  padding: 20px;
  margin-bottom: 15px;
  color: #1989fa;
}
</style>

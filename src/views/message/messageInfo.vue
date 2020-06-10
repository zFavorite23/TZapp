<template>
  <div class="messageInfo">
    <!-- 导航栏 -->
    <van-nav-bar
      title="测报详情"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="info">
      <div class="title">草履蚧测报</div>
      <div class="time">
        <div>
          <span>发布时间：</span>
          <span>2020-5-12</span>
        </div>
        <div>
          <span>发布单位：</span>
          <span>通州区林保站</span>
        </div>
      </div>
      <div class="text">
        据区林保站监测,2月26日已监测到草履蚧若虫在杨树片林出现密集上树活动。由于各小区巡查受限,处理工作可能出现滞后。请各单位强が调沟通,尤其对各居民小区加强巡查防治,及时更换围环并清除害虫,避免发生扰民情況。
      </div>
      <div class="name">
        <span>——</span>
        <span>通州区林保站</span>
      </div>
      <div class="img">
        <van-image
          width="100%"
          height="200"
          lazy-load
          fit="cover"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1623790685,211603866&fm=26&gp=0.jpg"
          @click="lookImg()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  data() {
    return {};
  },
  methods: {
    // 查看图片
    lookImg() {
      ImagePreview({
        images: [
          "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1623790685,211603866&fm=26&gp=0.jpg"
        ],
        onClose() {
          // do something
        }
      });
    }
  }
};
</script>

<style scoped>
.messageInfo {
  font-size: 28px;
}

.info {
  padding: 16% 5% 0;
}

.title {
  text-align: center;
  border-bottom: 1px solid #969696;
  color: #0099ff;
  margin: 0 3%;
  padding-bottom: 5%;
}

.time {
  display: flex;
  justify-content: space-between;
  margin-top: 7%;
  margin-bottom: 10%;
}
.time div {
  color: #969696;
}

.text {
  color: #969696;
  margin-bottom: 5%;
}

.name {
  text-align: right;
  color: #969696;
}

.img {
  margin-top: 10%;
}
</style>

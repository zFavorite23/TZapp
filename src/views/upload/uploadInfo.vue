<template>
  <div class="uploadInfo">
    <!-- 导航栏 -->
    <van-nav-bar
      title="上报数据详情"
      left-text="返回"
      left-arrow
      @click-left="goBack()"
    />

    <!-- 美国白蛾详情页 -->
    <van-cell-group v-if="specialId == 'PE001'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 白蜡窄吉丁详情页 -->
    <van-cell-group v-if="specialId == 'PE002'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 观察员成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="观察员成虫数"
        :value="infoList.adultNum"
        readonly
      />
      <!-- 羽化孔数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="观察员羽化孔"
        :value="infoList.eclosionHole"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫总数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 国槐尺蠖详情页 -->
    <van-tabs
      v-model="active"
      v-if="specialId == 'PE003'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="国槐尺蠖-成虫">
        <van-cell-group>
          <!-- 监测点 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测点"
            :value="infoList.location"
            readonly
          />
          <!-- 虫害 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测虫害"
            :value="infoList.specialName"
            readonly
          />
          <!-- 检测人 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测人"
            :value="infoList.surveUser"
            readonly
          />
          <!-- 时间 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测时间"
            :value="infoList.surveTime | datetime('YYYY-MM-DD')"
            readonly
          />
          <!-- 诱捕方式 -->
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式"
            :value="infoList.entrapmentMethod"
            readonly
          />
          <!-- 状态 -->
          <van-field
            label-align="center"
            input-align="center"
            label="状态"
            :value="infoList.status == 0 ? '未审核' : '审核通过'"
            readonly
          />
          <!-- 天气 -->
          <van-field
            label-align="center"
            input-align="center"
            label="天气"
            :value="infoList.weather"
            readonly
          />
          <!-- 温度 -->
          <van-field
            label-align="center"
            input-align="center"
            label="温度"
            :value="`${infoList.temperature} ℃`"
            readonly
          />
          <!-- 树种 -->
          <van-field
            label-align="center"
            input-align="center"
            label="树种"
            :value="infoList.varieties"
            readonly
          />
          <!-- 物候 -->
          <van-field
            label-align="center"
            input-align="center"
            label="物候"
            :value="infoList.phenology"
            readonly
          />
          <!-- 雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫"
            :value="infoList.male"
            readonly
          />
          <!-- 雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫"
            :value="infoList.female"
            readonly
          />
          <!-- 成虫数量 -->
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量"
            :value="infoList.adultTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="国槐尺蠖-幼虫">
        <!-- 监测点 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测点"
          :value="infoList.location"
          readonly
        />
        <!-- 虫害 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测虫害"
          :value="infoList.specialName"
          readonly
        />
        <!-- 检测人 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测人"
          :value="infoList.surveUser"
          readonly
        />
        <!-- 时间 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测时间"
          :value="infoList.surveTime | datetime('YYYY-MM-DD')"
          readonly
        />
        <!-- 诱捕方式 -->
        <van-field
          label-align="center"
          input-align="center"
          label="诱捕方式"
          :value="infoList.entrapmentMethod"
          readonly
        />
        <!-- 状态 -->
        <van-field
          label-align="center"
          input-align="center"
          label="状态"
          :value="infoList.status == 0 ? '未审核' : '审核通过'"
          readonly
        />
        <!-- 天气 -->
        <van-field
          label-align="center"
          input-align="center"
          label="天气"
          :value="infoList.weather"
          readonly
        />
        <!-- 温度 -->
        <van-field
          label-align="center"
          input-align="center"
          label="温度"
          :value="`${infoList.temperature} ℃`"
          readonly
        />
        <!-- 树种 -->
        <van-field
          label-align="center"
          input-align="center"
          label="树种"
          :value="infoList.varieties"
          readonly
        />
        <!-- 物候 -->
        <van-field
          label-align="center"
          input-align="center"
          label="物候"
          :value="infoList.phenology"
          readonly
        />
        <!-- 1号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="1号树"
          :value="infoList.tree1Num"
          readonly
        />
        <!-- 2号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="2号树"
          :value="infoList.tree2Num"
          readonly
        />
        <!-- 3号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="3号树"
          :value="infoList.tree3Num"
          readonly
        />
        <!-- 4号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="4号树"
          :value="infoList.tree4Num"
          readonly
        />
        <!-- 5号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="5号树"
          :value="infoList.tree5Num"
          readonly
        />
        <!-- 6号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="6号树"
          :value="infoList.tree6Num"
          readonly
        />
        <!-- 7号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="7号树"
          :value="infoList.tree7Num"
          readonly
        />
        <!-- 8号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="8号树"
          :value="infoList.tree8Num"
          readonly
        />
        <!-- 9号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="9号树"
          :value="infoList.tree9Num"
          readonly
        />
        <!-- 10号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="10号树"
          :value="infoList.tree10Num"
          readonly
        />
        <!-- 幼虫平均 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫平均"
          :value="infoList.larvaAvg"
          readonly
        />
        <!-- 幼虫总数 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫总数"
          :value="infoList.larvaTotal"
          readonly
        />
      </van-tab>
    </van-tabs>

    <!-- 国槐叶柄小蛾 -->
    <van-cell-group v-if="specialId == 'PE004'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        readonly
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫总数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 春尺蠖 -->
    <van-tabs
      v-model="active"
      v-if="specialId == 'PE005'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="春尺蠖-成虫">
        <van-cell-group>
          <!-- 监测点 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测点"
            :value="infoList.location"
            readonly
          />
          <!-- 虫害 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测虫害"
            :value="infoList.specialName"
            readonly
          />
          <!-- 检测人 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测人"
            :value="infoList.surveUser"
            readonly
          />
          <!-- 时间 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测时间"
            :value="infoList.surveTime | datetime('YYYY-MM-DD')"
            readonly
          />
          <!-- 诱捕方式 -->
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式"
            :value="infoList.entrapmentMethod"
            readonly
          />
          <!-- 状态 -->
          <van-field
            label-align="center"
            input-align="center"
            label="状态"
            :value="infoList.status == 0 ? '未审核' : '审核通过'"
            readonly
          />
          <!-- 天气 -->
          <van-field
            label-align="center"
            input-align="center"
            label="天气"
            :value="infoList.weather"
            readonly
          />
          <!-- 温度 -->
          <van-field
            label-align="center"
            input-align="center"
            label="温度"
            :value="`${infoList.temperature} ℃`"
            readonly
          />
          <!-- 树种 -->
          <van-field
            label-align="center"
            input-align="center"
            label="树种"
            :value="infoList.varieties"
            readonly
          />
          <!-- 物候 -->
          <van-field
            label-align="center"
            input-align="center"
            label="物候"
            :value="infoList.phenology"
            readonly
          />
          <!-- 1号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="1号树-雄虫"
            :value="infoList.tree1Male"
            readonly
          />
          <!-- 1号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="1号树-雌虫"
            :value="infoList.tree1Female"
            readonly
          />
          <!-- 2号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-雄虫"
            :value="infoList.tree2Male"
            readonly
          />
          <!-- 2号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-雌虫"
            :value="infoList.tree2Female"
            readonly
          />
          <!-- 3号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-雄虫"
            :value="infoList.tree3Male"
            readonly
          />
          <!-- 3号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-雌虫"
            :value="infoList.tree3Female"
            readonly
          />
          <!-- 4号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-雄虫"
            :value="infoList.tree4Male"
            readonly
          />
          <!-- 4号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-雌虫"
            :value="infoList.tree4Female"
            readonly
          />
          <!-- 5号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-雄虫"
            :value="infoList.tree5Male"
            readonly
          />
          <!-- 5号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-雌虫"
            :value="infoList.tree5Female"
            readonly
          />
          <!-- 6号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-雄虫"
            :value="infoList.tree6Male"
            readonly
          />
          <!-- 6号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-雌虫"
            :value="infoList.tree6Female"
            readonly
          />
          <!-- 7号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-雄虫"
            :value="infoList.tree7Male"
            readonly
          />
          <!-- 7号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-雌虫"
            :value="infoList.tree7Female"
            readonly
          />
          <!-- 8号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-雄虫"
            :value="infoList.tree8Male"
            readonly
          />
          <!-- 8号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-雌虫"
            :value="infoList.tree8Female"
            readonly
          />
          <!-- 9号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-雄虫"
            :value="infoList.tree9Male"
            readonly
          />
          <!-- 9号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-雌虫"
            :value="infoList.tree9Female"
            readonly
          />
          <!-- 10号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-雄虫"
            :value="infoList.tree10Male"
            readonly
          />
          <!-- 10号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-雌虫"
            :value="infoList.tree10Female"
            readonly
          />
          <!-- 成虫平均 -->
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均数"
            :value="infoList.adultAvg"
            readonly
          />
          <!-- 成虫数量 -->
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量"
            :value="infoList.adultTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="春尺蠖-卵虫">
        <van-cell-group>
          <!-- 监测点 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测点"
            :value="infoList.location"
            readonly
          />
          <!-- 虫害 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测虫害"
            :value="infoList.specialName"
            readonly
          />
          <!-- 检测人 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测人"
            :value="infoList.surveUser"
            readonly
          />
          <!-- 时间 -->
          <van-field
            label-align="center"
            input-align="center"
            label="监测时间"
            :value="infoList.surveTime | datetime('YYYY-MM-DD')"
            readonly
          />
          <!-- 诱捕方式 -->
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式"
            :value="infoList.entrapmentMethod"
            readonly
          />
          <!-- 状态 -->
          <van-field
            label-align="center"
            input-align="center"
            label="状态"
            :value="infoList.status == 0 ? '未审核' : '审核通过'"
            readonly
          />
          <!-- 天气 -->
          <van-field
            label-align="center"
            input-align="center"
            label="天气"
            :value="infoList.weather"
            readonly
          />
          <!-- 温度 -->
          <van-field
            label-align="center"
            input-align="center"
            label="温度"
            :value="`${infoList.temperature} ℃`"
            readonly
          />
          <!-- 树种 -->
          <van-field
            label-align="center"
            input-align="center"
            label="树种"
            :value="infoList.varieties"
            readonly
          />
          <!-- 物候 -->
          <van-field
            label-align="center"
            input-align="center"
            label="物候"
            :value="infoList.phenology"
            readonly
          />
          <!-- 1号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="1号树-总卵"
            :value="infoList.tree1EggTotal"
            readonly
          />
          <!-- 1号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="1号树-孵卵"
            :value="infoList.tree1Hatch"
            readonly
          />
          <!-- 2号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-总卵"
            :value="infoList.tree2EggTotal"
            readonly
          />
          <!-- 2号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-孵卵"
            :value="infoList.tree2Hatch"
            readonly
          />
          <!-- 3号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-总卵"
            :value="infoList.tree3EggTotal"
            readonly
          />
          <!-- 3号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-孵卵"
            :value="infoList.tree3Hatch"
            readonly
          />
          <!-- 4号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-总卵"
            :value="infoList.tree4EggTotal"
            readonly
          />
          <!-- 4号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-孵卵"
            :value="infoList.tree4Hatch"
            readonly
          />
          <!-- 5号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-总卵"
            :value="infoList.tree5EggTotal"
            readonly
          />
          <!-- 5号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-孵卵"
            :value="infoList.tree5Hatch"
            readonly
          />
          <!-- 6号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-总卵"
            :value="infoList.tree6EggTotal"
            readonly
          />
          <!-- 6号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-孵卵"
            :value="infoList.tree6Hatch"
            readonly
          />
          <!-- 7号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-总卵"
            :value="infoList.tree7EggTotal"
            readonly
          />
          <!-- 7号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-孵卵"
            :value="infoList.tree7Hatch"
            readonly
          />
          <!-- 8号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-总卵"
            :value="infoList.tree8EggTotal"
            readonly
          />
          <!-- 8号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-孵卵"
            :value="infoList.tree8Hatch"
            readonly
          />
          <!-- 9号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-总卵"
            :value="infoList.tree9EggTotal"
            readonly
          />
          <!-- 9号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-孵卵"
            :value="infoList.tree9Hatch"
            readonly
          />
          <!-- 10号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-总卵"
            :value="infoList.tree10EggTotal"
            readonly
          />
          <!-- 10号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-孵卵"
            :value="infoList.tree10Hatch"
            readonly
          />
          <!-- 卵数平均 -->
          <van-field
            label-align="center"
            input-align="center"
            label="卵数平均"
            :value="infoList.hatchAvg"
            readonly
          />
          <!-- 卵数合计 -->
          <van-field
            label-align="center"
            input-align="center"
            label="卵数合计"
            :value="infoList.hatchTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="春尺蠖-幼虫">
        <!-- 监测点 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测点"
          :value="infoList.location"
          readonly
        />
        <!-- 虫害 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测虫害"
          :value="infoList.specialName"
          readonly
        />
        <!-- 检测人 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测人"
          :value="infoList.surveUser"
          readonly
        />
        <!-- 时间 -->
        <van-field
          label-align="center"
          input-align="center"
          label="监测时间"
          :value="infoList.surveTime | datetime('YYYY-MM-DD')"
          readonly
        />
        <!-- 诱捕方式 -->
        <van-field
          label-align="center"
          input-align="center"
          label="诱捕方式"
          :value="infoList.entrapmentMethod"
          readonly
        />
        <!-- 状态 -->
        <van-field
          label-align="center"
          input-align="center"
          label="状态"
          :value="infoList.status == 0 ? '未审核' : '审核通过'"
          readonly
        />
        <!-- 天气 -->
        <van-field
          label-align="center"
          input-align="center"
          label="天气"
          :value="infoList.weather"
          readonly
        />
        <!-- 温度 -->
        <van-field
          label-align="center"
          input-align="center"
          label="温度"
          :value="`${infoList.temperature} ℃`"
          readonly
        />
        <!-- 树种 -->
        <van-field
          label-align="center"
          input-align="center"
          label="树种"
          :value="infoList.varieties"
          readonly
        />
        <!-- 物候 -->
        <van-field
          label-align="center"
          input-align="center"
          label="物候"
          :value="infoList.phenology"
          readonly
        />
        <!-- 1号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="1号树"
          :value="infoList.tree1Num"
          readonly
        />
        <!-- 2号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="2号树"
          :value="infoList.tree2Num"
          readonly
        />
        <!-- 3号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="3号树"
          :value="infoList.tree3Num"
          readonly
        />
        <!-- 4号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="4号树"
          :value="infoList.tree4Num"
          readonly
        />
        <!-- 5号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="5号树"
          :value="infoList.tree5Num"
          readonly
        />
        <!-- 6号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="6号树"
          :value="infoList.tree6Num"
          readonly
        />
        <!-- 7号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="7号树"
          :value="infoList.tree7Num"
          readonly
        />
        <!-- 8号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="8号树"
          :value="infoList.tree8Num"
          readonly
        />
        <!-- 9号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="9号树"
          :value="infoList.tree9Num"
          readonly
        />
        <!-- 10号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="10号树"
          :value="infoList.tree10Num"
          readonly
        />
        <!-- 幼虫平均 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫平均"
          :value="infoList.larvaAvg"
          readonly
        />
        <!-- 幼虫总数 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫总数"
          :value="infoList.larvaTotal"
          readonly
        />
      </van-tab>
    </van-tabs>

    <!-- 苹果蠹蛾 -->
    <van-cell-group v-if="specialId == 'PE006'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        readonly
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫总数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 悬铃木方翅网蝽 -->
    <van-cell-group v-if="specialId == 'PE007'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树—成虫"
        :value="infoList.tree1Adult"
        readonly
      />
      <!-- 1号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树—若虫"
        :value="infoList.tree1Nymph"
        readonly
      />
      <!-- 2号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树—成虫"
        :value="infoList.tree2Adult"
        readonly
      />
      <!-- 2号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树—若虫"
        :value="infoList.tree2Nymph"
        readonly
      />
      <!-- 3号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树—成虫"
        :value="infoList.tree3Adult"
        readonly
      />
      <!-- 3号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树—若虫"
        :value="infoList.tree3Nymph"
        readonly
      />
      <!-- 4号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树—成虫"
        :value="infoList.tree4Adult"
        readonly
      />
      <!-- 4号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树—若虫"
        :value="infoList.tree4Nymph"
        readonly
      />
      <!-- 5号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树—成虫"
        :value="infoList.tree5Adult"
        readonly
      />
      <!-- 5号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树—若虫"
        :value="infoList.tree5Nymph"
        readonly
      />
      <!-- 平均数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="平均（总/10）"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫总数 -->
      <van-field
        label-align="center"
        input-align="center"
        label="（成+若）总"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 桔小实蝇 -->
    <van-cell-group v-if="specialId == 'PE008'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        readonly
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 光肩星天牛 -->
    <van-cell-group v-if="specialId == 'PE009'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />

      <!-- 1号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树—成虫"
        :value="infoList.tree1Adult"
        readonly
      />
      <!-- 1号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树排粪孔"
        :value="infoList.tree1DefecationHole"
        readonly
      />
      <!-- 2号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树—成虫"
        :value="infoList.tree2Adult"
        readonly
      />
      <!-- 2号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树排粪孔"
        :value="infoList.tree2DefecationHole"
        readonly
      />
      <!-- 3号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树—成虫"
        :value="infoList.tree3Adult"
        readonly
      />
      <!-- 3号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树排粪孔"
        :value="infoList.tree3DefecationHole"
        readonly
      />
      <!-- 4号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树—成虫"
        :value="infoList.tree4Adult"
        readonly
      />
      <!-- 4号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树排粪孔"
        :value="infoList.tree4DefecationHole"
        readonly
      />
      <!-- 5号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树—成虫"
        :value="infoList.tree5Adult"
        readonly
      />
      <!-- 5号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树排粪孔"
        :value="infoList.tree5DefecationHole"
        readonly
      />
      <!-- 6号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树—成虫"
        :value="infoList.tree6Adult"
        readonly
      />
      <!-- 6号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树排粪孔"
        :value="infoList.tree6DefecationHole"
        readonly
      />
      <!-- 7号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树—成虫"
        :value="infoList.tree7Adult"
        readonly
      />
      <!-- 7号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树排粪孔"
        :value="infoList.tree7DefecationHole"
        readonly
      />
      <!-- 8号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树—成虫"
        :value="infoList.tree8Adult"
        readonly
      />
      <!-- 8号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树排粪孔"
        :value="infoList.tree8DefecationHole"
        readonly
      />
      <!-- 9号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树—成虫"
        :value="infoList.tree9Adult"
        readonly
      />
      <!-- 9号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树排粪孔"
        :value="infoList.tree9DefecationHole"
        readonly
      />
      <!-- 10号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树—成虫"
        :value="infoList.tree10Adult"
        readonly
      />
      <!-- 10号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树排粪孔"
        :value="infoList.tree10DefecationHole"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均（总/10）"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫总数排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数（排粪孔）"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 红脂大小蠹 -->
    <van-cell-group v-if="specialId == 'PE010'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 松梢螟 -->
    <van-cell-group v-if="specialId == 'PE011'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        readonly
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 杨扇舟蛾 -->
    <van-cell-group v-if="specialId == 'PE012'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树"
        :value="infoList.tree1Num"
        readonly
      />
      <!-- 2号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树"
        :value="infoList.tree2Num"
        readonly
      />
      <!-- 3号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树"
        :value="infoList.tree3Num"
        readonly
      />
      <!-- 4号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树"
        :value="infoList.tree4Num"
        readonly
      />
      <!-- 5号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树"
        :value="infoList.tree5Num"
        readonly
      />
      <!-- 6号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树"
        :value="infoList.tree6Num"
        readonly
      />
      <!-- 7号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树"
        :value="infoList.tree7Num"
        readonly
      />
      <!-- 8号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树"
        :value="infoList.tree8Num"
        readonly
      />
      <!-- 9号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树"
        :value="infoList.tree9Num"
        readonly
      />
      <!-- 10号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树"
        :value="infoList.tree10Num"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 梨小食心虫 -->
    <van-cell-group v-if="specialId == 'PE013'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 双条杉天牛 -->
    <van-cell-group v-if="specialId == 'PE014'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        readonly
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        readonly
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 草履蚧 -->
    <van-cell-group v-if="specialId == 'PE015'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树"
        :value="infoList.tree1Num"
        readonly
      />
      <!-- 2号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树"
        :value="infoList.tree2Num"
        readonly
      />
      <!-- 3号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树"
        :value="infoList.tree3Num"
        readonly
      />
      <!-- 4号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树"
        :value="infoList.tree4Num"
        readonly
      />
      <!-- 5号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树"
        :value="infoList.tree5Num"
        readonly
      />
      <!-- 6号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树"
        :value="infoList.tree6Num"
        readonly
      />
      <!-- 7号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树"
        :value="infoList.tree7Num"
        readonly
      />
      <!-- 8号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树"
        :value="infoList.tree8Num"
        readonly
      />
      <!-- 9号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树"
        :value="infoList.tree9Num"
        readonly
      />
      <!-- 10号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树"
        :value="infoList.tree10Num"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 臭椿沟眶象 -->
    <van-cell-group v-if="specialId == 'PE016'">
      <!-- 监测点 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测点"
        :value="infoList.location"
        readonly
      />
      <!-- 虫害 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测虫害"
        :value="infoList.specialName"
        readonly
      />
      <!-- 检测人 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测人"
        :value="infoList.surveUser"
        readonly
      />
      <!-- 时间 -->
      <van-field
        label-align="center"
        input-align="center"
        label="监测时间"
        :value="infoList.surveTime | datetime('YYYY-MM-DD')"
        readonly
      />
      <!-- 诱捕方式 -->
      <van-field
        label-align="center"
        input-align="center"
        label="诱捕方式"
        :value="infoList.entrapmentMethod"
        readonly
      />
      <!-- 状态 -->
      <van-field
        label-align="center"
        input-align="center"
        label="状态"
        :value="infoList.status == 0 ? '未审核' : '审核通过'"
        readonly
      />
      <!-- 天气 -->
      <van-field
        label-align="center"
        input-align="center"
        label="天气"
        :value="infoList.weather"
        readonly
      />
      <!-- 温度 -->
      <van-field
        label-align="center"
        input-align="center"
        label="温度"
        :value="`${infoList.temperature} ℃`"
        readonly
      />
      <!-- 树种 -->
      <van-field
        label-align="center"
        input-align="center"
        label="树种"
        :value="infoList.varieties"
        readonly
      />
      <!-- 物候 -->
      <van-field
        label-align="center"
        input-align="center"
        label="物候"
        :value="infoList.phenology"
        readonly
      />
      <!-- 1号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树"
        :value="infoList.tree1Num"
        readonly
      />
      <!-- 2号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树"
        :value="infoList.tree2Num"
        readonly
      />
      <!-- 3号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树"
        :value="infoList.tree3Num"
        readonly
      />
      <!-- 4号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树"
        :value="infoList.tree4Num"
        readonly
      />
      <!-- 5号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树"
        :value="infoList.tree5Num"
        readonly
      />
      <!-- 6号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树"
        :value="infoList.tree6Num"
        readonly
      />
      <!-- 7号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树"
        :value="infoList.tree7Num"
        readonly
      />
      <!-- 8号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树"
        :value="infoList.tree8Num"
        readonly
      />
      <!-- 9号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树"
        :value="infoList.tree9Num"
        readonly
      />
      <!-- 10号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树"
        :value="infoList.tree10Num"
        readonly
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="infoList.adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="infoList.adultTotal"
        readonly
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 数据id
      id: "",
      // 虫害id
      specialId: "",
      // 详情列表
      infoList: [],
      // tebs 默认选择
      active: 0
    };
  },
  methods: {
    // 获取详情
    getInfo() {
      this.$axios({
        method: "get",
        url: `/pest/pest/data/info/${this.id}`
      }).then(res => {
        // console.log(res);
        this.infoList = res.data.data;
      });
    },

    goBack() {
      this.$router.push({
        path: "/history"
      });
    }
  },
  created() {
    // 获取id
    this.id = this.$route.query.id;
    // 获取虫害id
    this.specialId = this.$route.query.specialId;

    // 获取详情
    this.getInfo();
  },
  // 离开路由
  beforeRouteLeave(to, from, next) {
    // ...返回历史数据 数据缓存
    to.meta.keepAlive = true;
    next();
  }
};
</script>

<style></style>

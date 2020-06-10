<template>
  <div class="uploadEdit">
    <!-- 导航栏 -->
    <van-nav-bar
      title="上报数据修改"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
      right-text="保存"
      @click-right="saveEdit()"
    />

    <!-- 美国白蛾详情页  ok-->
    <van-cell-group v-if="query.specialId == 'PE001'">
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
        v-model.number="infoList.adultTotal"
      />
    </van-cell-group>

    <!-- 白蜡窄吉丁详情页  ok-->
    <van-cell-group v-if="query.specialId == 'PE002'">
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
        v-model.number="infoList.adultNum"
      />
      <!-- 羽化孔数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="观察员羽化孔"
        :value="infoList.eclosionHole"
        v-model.number="infoList.eclosionHole"
      />
      <!-- 1号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="1号诱捕器"
        :value="infoList.trap1"
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
        readonly
      />
      <!-- 成虫总数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 国槐尺蠖详情页  ok-->
    <van-tabs
      v-model="active"
      v-if="query.specialId == 'PE003'"
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
            v-model.number="infoList.male"
          />
          <!-- 雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫"
            :value="infoList.female"
            v-model.number="infoList.female"
          />
          <!-- 成虫数量 -->
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量"
            :value="maleFemaleTotal"
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
          v-model.number="infoList.tree1Num"
        />
        <!-- 2号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="2号树"
          :value="infoList.tree2Num"
          v-model.number="infoList.tree2Num"
        />
        <!-- 3号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="3号树"
          :value="infoList.tree3Num"
          v-model.number="infoList.tree3Num"
        />
        <!-- 4号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="4号树"
          :value="infoList.tree4Num"
          v-model.number="infoList.tree4Num"
        />
        <!-- 5号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="5号树"
          :value="infoList.tree5Num"
          v-model.number="infoList.tree5Num"
        />
        <!-- 6号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="6号树"
          :value="infoList.tree6Num"
          v-model.number="infoList.tree6Num"
        />
        <!-- 7号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="7号树"
          :value="infoList.tree7Num"
          v-model.number="infoList.tree7Num"
        />
        <!-- 8号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="8号树"
          :value="infoList.tree8Num"
          v-model.number="infoList.tree8Num"
        />
        <!-- 9号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="9号树"
          :value="infoList.tree9Num"
          v-model.number="infoList.tree9Num"
        />
        <!-- 10号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="10号树"
          :value="infoList.tree10Num"
          v-model.number="infoList.tree10Num"
        />
        <!-- 幼虫平均 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫平均"
          :value="larvaAvg"
          readonly
        />
        <!-- 幼虫总数 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫总数"
          :value="larvaTotal"
          readonly
        />
      </van-tab>
    </van-tabs>

    <!-- 国槐叶柄小蛾  ok-->
    <van-cell-group v-if="query.specialId == 'PE004'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        v-model.number="infoList.trap4"
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        v-model.number="infoList.trap5"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
        readonly
      />
      <!-- 成虫总数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 春尺蠖  ok-->
    <van-tabs
      v-model="active"
      v-if="query.specialId == 'PE005'"
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
            v-model.number="infoList.tree1Male"
          />
          <!-- 1号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="1号树-雌虫"
            :value="infoList.tree1Female"
            v-model.number="infoList.tree1Female"
          />
          <!-- 2号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-雄虫"
            :value="infoList.tree2Male"
            v-model.number="infoList.tree2Male"
          />
          <!-- 2号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-雌虫"
            :value="infoList.tree2Female"
            v-model.number="infoList.tree2Female"
          />
          <!-- 3号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-雄虫"
            :value="infoList.tree3Male"
            v-model.number="infoList.tree3Male"
          />
          <!-- 3号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-雌虫"
            :value="infoList.tree3Female"
            v-model.number="infoList.tree3Female"
          />
          <!-- 4号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-雄虫"
            :value="infoList.tree4Male"
            v-model.number="infoList.tree4Male"
          />
          <!-- 4号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-雌虫"
            :value="infoList.tree4Female"
            v-model.number="infoList.tree4Female"
          />
          <!-- 5号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-雄虫"
            :value="infoList.tree5Male"
            v-model.number="infoList.tree5Male"
          />
          <!-- 5号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-雌虫"
            :value="infoList.tree5Female"
            v-model.number="infoList.tree5Female"
          />
          <!-- 6号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-雄虫"
            :value="infoList.tree6Male"
            v-model.number="infoList.tree6Male"
          />
          <!-- 6号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-雌虫"
            :value="infoList.tree6Female"
            v-model.number="infoList.tree6Female"
          />
          <!-- 7号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-雄虫"
            :value="infoList.tree7Male"
            v-model.number="infoList.tree7Male"
          />
          <!-- 7号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-雌虫"
            :value="infoList.tree7Female"
            v-model.number="infoList.tree7Female"
          />
          <!-- 8号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-雄虫"
            :value="infoList.tree8Male"
            v-model.number="infoList.tree8Male"
          />
          <!-- 8号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-雌虫"
            :value="infoList.tree8Female"
            v-model.number="infoList.tree8Female"
          />
          <!-- 9号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-雄虫"
            :value="infoList.tree9Male"
            v-model.number="infoList.tree9Male"
          />
          <!-- 9号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-雌虫"
            :value="infoList.tree9Female"
            v-model.number="infoList.tree9Female"
          />
          <!-- 10号树-雄虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-雄虫"
            :value="infoList.tree10Male"
            v-model.number="infoList.tree10Male"
          />
          <!-- 10号树-雌虫 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-雌虫"
            :value="infoList.tree10Female"
            v-model.number="infoList.tree10Female"
          />
          <!-- 成虫平均 -->
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均数"
            :value="maleFemaleAvg"
            readonly
          />
          <!-- 成虫数量 -->
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量"
            :value="maleFemaleTotal"
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
            v-model.number="infoList.tree1EggTotal"
          />
          <!-- 1号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="1号树-孵卵"
            :value="infoList.tree1Hatch"
            v-model.number="infoList.tree1Hatch"
          />
          <!-- 2号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-总卵"
            :value="infoList.tree2EggTotal"
            v-model.number="infoList.tree2EggTotal"
          />
          <!-- 2号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="2号树-孵卵"
            :value="infoList.tree2Hatch"
            v-model.number="infoList.tree2Hatch"
          />
          <!-- 3号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-总卵"
            :value="infoList.tree3EggTotal"
            v-model.number="infoList.tree3EggTotal"
          />
          <!-- 3号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="3号树-孵卵"
            :value="infoList.tree3Hatch"
            v-model.number="infoList.tree3Hatch"
          />
          <!-- 4号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-总卵"
            :value="infoList.tree4EggTotal"
            v-model.number="infoList.tree4EggTotal"
          />
          <!-- 4号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="4号树-孵卵"
            :value="infoList.tree4Hatch"
            v-model.number="infoList.tree4Hatch"
          />
          <!-- 5号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-总卵"
            :value="infoList.tree5EggTotal"
            v-model.number="infoList.tree5EggTotal"
          />
          <!-- 5号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="5号树-孵卵"
            :value="infoList.tree5Hatch"
            v-model.number="infoList.tree5Hatch"
          />
          <!-- 6号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-总卵"
            :value="infoList.tree6EggTotal"
            v-model.number="infoList.tree6EggTotal"
          />
          <!-- 6号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="6号树-孵卵"
            :value="infoList.tree6Hatch"
            v-model.number="infoList.tree6Hatch"
          />
          <!-- 7号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-总卵"
            :value="infoList.tree7EggTotal"
            v-model.number="infoList.tree7EggTotal"
          />
          <!-- 7号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="7号树-孵卵"
            :value="infoList.tree7Hatch"
            v-model.number="infoList.tree7Hatch"
          />
          <!-- 8号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-总卵"
            :value="infoList.tree8EggTotal"
            v-model.number="infoList.tree8EggTotal"
          />
          <!-- 8号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="8号树-孵卵"
            :value="infoList.tree8Hatch"
            v-model.number="infoList.tree8Hatch"
          />
          <!-- 9号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-总卵"
            :value="infoList.tree9EggTotal"
            v-model.number="infoList.tree9EggTotal"
          />
          <!-- 9号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="9号树-孵卵"
            :value="infoList.tree9Hatch"
            v-model.number="infoList.tree9Hatch"
          />
          <!-- 10号树-总卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-总卵"
            :value="infoList.tree10EggTotal"
            v-model.number="infoList.tree10EggTotal"
          />
          <!-- 10号树-孵卵 -->
          <van-field
            label-align="center"
            input-align="center"
            label="10号树-孵卵"
            :value="infoList.tree10Hatch"
            v-model.number="infoList.tree10Hatch"
          />
          <!-- 卵数平均 -->
          <van-field
            label-align="center"
            input-align="center"
            label="卵数平均"
            :value="eggHatchAvg"
            readonly
          />
          <!-- 卵数合计 -->
          <van-field
            label-align="center"
            input-align="center"
            label="卵数合计"
            :value="eggHatchTotal"
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
          v-model.number="infoList.tree1Num"
        />
        <!-- 2号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="2号树"
          :value="infoList.tree2Num"
          v-model.number="infoList.tree2Num"
        />
        <!-- 3号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="3号树"
          :value="infoList.tree3Num"
          v-model.number="infoList.tree3Num"
        />
        <!-- 4号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="4号树"
          :value="infoList.tree4Num"
          v-model.number="infoList.tree4Num"
        />
        <!-- 5号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="5号树"
          :value="infoList.tree5Num"
          v-model.number="infoList.tree5Num"
        />
        <!-- 6号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="6号树"
          :value="infoList.tree6Num"
          v-model.number="infoList.tree6Num"
        />
        <!-- 7号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="7号树"
          :value="infoList.tree7Num"
          v-model.number="infoList.tree7Num"
        />
        <!-- 8号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="8号树"
          :value="infoList.tree8Num"
          v-model.number="infoList.tree8Num"
        />
        <!-- 9号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="9号树"
          :value="infoList.tree9Num"
          v-model.number="infoList.tree9Num"
        />
        <!-- 10号树 -->
        <van-field
          label-align="center"
          input-align="center"
          label="10号树"
          :value="infoList.tree10Num"
          v-model.number="infoList.tree10Num"
        />
        <!-- 幼虫平均 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫平均"
          :value="larvaAvg"
          readonly
        />
        <!-- 幼虫总数 -->
        <van-field
          label-align="center"
          input-align="center"
          label="幼虫总数"
          :value="larvaTotal"
          readonly
        />
      </van-tab>
    </van-tabs>

    <!-- 苹果蠹蛾  ok-->
    <van-cell-group v-if="query.specialId == 'PE006'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        v-model.number="infoList.trap4"
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        v-model.number="infoList.trap5"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
        readonly
      />
      <!-- 成虫总数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 悬铃木方翅网蝽  ok-->
    <van-cell-group v-if="query.specialId == 'PE007'">
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
        v-model.number="infoList.tree1Adult"
      />
      <!-- 1号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树—若虫"
        :value="infoList.tree1Nymph"
        v-model.number="infoList.tree1Nymph"
      />
      <!-- 2号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树—成虫"
        :value="infoList.tree2Adult"
        v-model.number="infoList.tree2Adult"
      />
      <!-- 2号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树—若虫"
        :value="infoList.tree2Nymph"
        v-model.number="infoList.tree2Nymph"
      />
      <!-- 3号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树—成虫"
        :value="infoList.tree3Adult"
        v-model.number="infoList.tree3Adult"
      />
      <!-- 3号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树—若虫"
        :value="infoList.tree3Nymph"
        v-model.number="infoList.tree3Nymph"
      />
      <!-- 4号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树—成虫"
        :value="infoList.tree4Adult"
        v-model.number="infoList.tree4Adult"
      />
      <!-- 4号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树—若虫"
        :value="infoList.tree4Nymph"
        v-model.number="infoList.tree4Nymph"
      />
      <!-- 5号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树—成虫"
        :value="infoList.tree5Adult"
        v-model.number="infoList.tree5Adult"
      />
      <!-- 5号树若虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树—若虫"
        :value="infoList.tree5Nymph"
        v-model.number="infoList.tree5Nymph"
      />
      <!-- 平均数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="平均（总/10）"
        :value="adultNymphAvg"
        readonly
      />
      <!-- 成虫总数 -->
      <van-field
        label-align="center"
        input-align="center"
        label="（成+若）总"
        :value="adultNymphTotal"
        readonly
      />
    </van-cell-group>

    <!-- 桔小实蝇  ok-->
    <van-cell-group v-if="query.specialId == 'PE008'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        v-model.number="infoList.trap4"
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        v-model.number="infoList.trap5"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 光肩星天牛 ok-->
    <van-cell-group v-if="query.specialId == 'PE009'">
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
        v-model.number="infoList.tree1Adult"
      />
      <!-- 1号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="1号树排粪孔"
        :value="infoList.tree1DefecationHole"
        v-model.number="infoList.tree1DefecationHole"
      />
      <!-- 2号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树—成虫"
        :value="infoList.tree2Adult"
        v-model.number="infoList.tree2Adult"
      />
      <!-- 2号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树排粪孔"
        :value="infoList.tree2DefecationHole"
        v-model.number="infoList.tree2DefecationHole"
      />
      <!-- 3号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树—成虫"
        :value="infoList.tree3Adult"
        v-model.number="infoList.tree3Adult"
      />
      <!-- 3号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树排粪孔"
        :value="infoList.tree3DefecationHole"
        v-model.number="infoList.tree3DefecationHole"
      />
      <!-- 4号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树—成虫"
        :value="infoList.tree4Adult"
        v-model.number="infoList.tree4Adult"
      />
      <!-- 4号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树排粪孔"
        :value="infoList.tree4DefecationHole"
        v-model.number="infoList.tree4DefecationHole"
      />
      <!-- 5号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树—成虫"
        :value="infoList.tree5Adult"
        v-model.number="infoList.tree5Adult"
      />
      <!-- 5号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树排粪孔"
        :value="infoList.tree5DefecationHole"
        v-model.number="infoList.tree5DefecationHole"
      />
      <!-- 6号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树—成虫"
        :value="infoList.tree6Adult"
        v-model.number="infoList.tree6Adult"
      />
      <!-- 6号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树排粪孔"
        :value="infoList.tree6DefecationHole"
        v-model.number="infoList.tree6DefecationHole"
      />
      <!-- 7号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树—成虫"
        :value="infoList.tree7Adult"
        v-model.number="infoList.tree7Adult"
      />
      <!-- 7号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树排粪孔"
        :value="infoList.tree7DefecationHole"
        v-model.number="infoList.tree7DefecationHole"
      />
      <!-- 8号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树—成虫"
        :value="infoList.tree8Adult"
        v-model.number="infoList.tree8Adult"
      />
      <!-- 8号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树排粪孔"
        :value="infoList.tree8DefecationHole"
        v-model.number="infoList.tree8DefecationHole"
      />
      <!-- 9号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树—成虫"
        :value="infoList.tree9Adult"
        v-model.number="infoList.tree9Adult"
      />
      <!-- 9号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树排粪孔"
        :value="infoList.tree9DefecationHole"
        v-model.number="infoList.tree9DefecationHole"
      />
      <!-- 10号树成虫-->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树—成虫"
        :value="infoList.tree10Adult"
        v-model.number="infoList.tree10Adult"
      />
      <!-- 10号树排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树排粪孔"
        :value="infoList.tree10DefecationHole"
        v-model.number="infoList.tree10DefecationHole"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均（总/10）"
        :value="adultAvg_2"
        readonly
      />
      <!-- 成虫总数排粪孔-->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数（排粪孔）"
        :value="adultTotal_2"
        readonly
      />
    </van-cell-group>

    <!-- 红脂大小蠹  ok-->
    <van-cell-group v-if="query.specialId == 'PE010'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        v-model.number="infoList.trap4"
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        v-model.number="infoList.trap5"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 松梢螟  ok-->
    <van-cell-group v-if="query.specialId == 'PE011'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 4号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号诱捕器"
        :value="infoList.trap4"
        v-model.number="infoList.trap4"
      />
      <!-- 5号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号诱捕器"
        :value="infoList.trap5"
        v-model.number="infoList.trap5"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 杨扇舟蛾  ok-->
    <van-cell-group v-if="query.specialId == 'PE012'">
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
        v-model.number="infoList.tree1Num"
      />
      <!-- 2号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树"
        :value="infoList.tree2Num"
        v-model.number="infoList.tree2Num"
      />
      <!-- 3号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树"
        :value="infoList.tree3Num"
        v-model.number="infoList.tree3Num"
      />
      <!-- 4号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树"
        :value="infoList.tree4Num"
        v-model.number="infoList.tree4Num"
      />
      <!-- 5号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树"
        :value="infoList.tree5Num"
        v-model.number="infoList.tree5Num"
      />
      <!-- 6号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树"
        :value="infoList.tree6Num"
        v-model.number="infoList.tree6Num"
      />
      <!-- 7号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树"
        :value="infoList.tree7Num"
        v-model.number="infoList.tree7Num"
      />
      <!-- 8号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树"
        :value="infoList.tree8Num"
        v-model.number="infoList.tree8Num"
      />
      <!-- 9号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树"
        :value="infoList.tree9Num"
        v-model.number="infoList.tree9Num"
      />
      <!-- 10号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树"
        :value="infoList.tree10Num"
        v-model.number="infoList.tree10Num"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 梨小食心虫  ok-->
    <van-cell-group v-if="query.specialId == 'PE013'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 双条杉天牛  ok-->
    <van-cell-group v-if="query.specialId == 'PE014'">
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
        v-model.number="infoList.trap1"
      />
      <!-- 2号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号诱捕器"
        :value="infoList.trap2"
        v-model.number="infoList.trap2"
      />
      <!-- 3号诱捕器 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号诱捕器"
        :value="infoList.trap3"
        v-model.number="infoList.trap3"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="trapAdultAvg"
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="trapAdultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 草履蚧  ok-->
    <van-cell-group v-if="query.specialId == 'PE015'">
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
        v-model.number="infoList.tree1Num"
      />
      <!-- 2号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树"
        :value="infoList.tree2Num"
        v-model.number="infoList.tree2Num"
      />
      <!-- 3号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树"
        :value="infoList.tree3Num"
        v-model.number="infoList.tree3Num"
      />
      <!-- 4号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树"
        :value="infoList.tree4Num"
        v-model.number="infoList.tree4Num"
      />
      <!-- 5号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树"
        :value="infoList.tree5Num"
        v-model.number="infoList.tree5Num"
      />
      <!-- 6号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树"
        :value="infoList.tree6Num"
        v-model.number="infoList.tree6Num"
      />
      <!-- 7号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树"
        :value="infoList.tree7Num"
        v-model.number="infoList.tree7Num"
      />
      <!-- 8号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树"
        :value="infoList.tree8Num"
        v-model.number="infoList.tree8Num"
      />
      <!-- 9号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树"
        :value="infoList.tree9Num"
        v-model.number="infoList.tree9Num"
      />
      <!-- 10号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树"
        :value="infoList.tree10Num"
        v-model.number="infoList.tree10Num"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="adultTotal"
        readonly
      />
    </van-cell-group>

    <!-- 臭椿沟眶象 ok-->
    <van-cell-group v-if="query.specialId == 'PE016'">
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
        v-model.number="infoList.tree1Num"
      />
      <!-- 2号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="2号树"
        :value="infoList.tree2Num"
        v-model.number="infoList.tree2Num"
      />
      <!-- 3号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="3号树"
        :value="infoList.tree3Num"
        v-model.number="infoList.tree3Num"
      />
      <!-- 4号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="4号树"
        :value="infoList.tree4Num"
        v-model.number="infoList.tree4Num"
      />
      <!-- 5号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="5号树"
        :value="infoList.tree5Num"
        v-model.number="infoList.tree5Num"
      />
      <!-- 6号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="6号树"
        :value="infoList.tree6Num"
        v-model.number="infoList.tree6Num"
      />
      <!-- 7号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="7号树"
        :value="infoList.tree7Num"
        v-model.number="infoList.tree7Num"
      />
      <!-- 8号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="8号树"
        :value="infoList.tree8Num"
        v-model.number="infoList.tree8Num"
      />
      <!-- 9号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="9号树"
        :value="infoList.tree9Num"
        v-model.number="infoList.tree9Num"
      />
      <!-- 10号树 -->
      <van-field
        label-align="center"
        input-align="center"
        label="10号树"
        :value="infoList.tree10Num"
        v-model.number="infoList.tree10Num"
      />
      <!-- 成虫平均 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫平均数"
        :value="adultAvg"
        readonly
      />
      <!-- 成虫数量 -->
      <van-field
        label-align="center"
        input-align="center"
        label="成虫总数量"
        :value="adultTotal"
        readonly
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value2: "",
      // 详情列表
      infoList: [],
      // tebs 默认选择
      active: 0,
      query: {
        // 害虫id
        specialId: "",
        // 数据id
        id: ""
      }
    };
  },
  methods: {
    // 获取详情
    getInfo() {
      this.$axios({
        method: "get",
        url: `/pest/pest/data/info/${this.query.id}`
      }).then(res => {
        // console.log(res);
        this.infoList = res.data.data;
      });
    },

    // 修改数据
    saveEdit() {
      console.log(this.infoList);
      this.$axios({
        method: "put",
        url: "/pest/pest/data",
        data: this.infoList
      }).then(res => {
        console.log(res);
        this.$toast.success("修改成功！");
        this.$router.go(-1);
      });
    }
  },
  created() {
    this.query.id = this.$route.query.id;
    this.query.specialId = this.$route.query.specialId;

    // 获取详情
    this.getInfo();
  },
  computed: {
    // 计算诱捕器成虫数量
    trapAdultTotal() {
      var that = this;
      var num = 0;
      if (that.query.specialId == "PE002") {
        num =
          Number(this.infoList.trap1) +
          Number(this.infoList.trap2) +
          Number(this.infoList.trap3) +
          Number(this.infoList.adultNum);
      }
      if (
        that.query.specialId == "PE004" ||
        that.query.specialId == "PE006" ||
        that.query.specialId == "PE008" ||
        that.query.specialId == "PE010" ||
        that.query.specialId == "PE011"
      ) {
        num =
          Number(this.infoList.trap1) +
          Number(this.infoList.trap2) +
          Number(this.infoList.trap3) +
          Number(this.infoList.trap4) +
          Number(this.infoList.trap5);
      }
      if (that.query.specialId == "PE014" || that.query.specialId == "PE013") {
        num =
          Number(this.infoList.trap1) +
          Number(this.infoList.trap2) +
          Number(this.infoList.trap3);
      }

      that.infoList.adultTotal = num;
      return num;
    },

    // 计算诱捕器成虫平均
    trapAdultAvg() {
      var that = this;
      if (that.query.specialId == "PE002") {
        that.infoList.adultAvg = that.infoList.adultTotal / 4;
      }
      if (
        that.query.specialId == "PE004" ||
        that.query.specialId == "PE006" ||
        that.query.specialId == "PE008" ||
        that.query.specialId == "PE010" ||
        that.query.specialId == "PE011"
      ) {
        that.infoList.adultAvg = that.infoList.adultTotal / 5;
      }
      if (that.query.specialId == "PE014" || that.query.specialId == "PE013") {
        that.infoList.adultAvg = that.infoList.adultTotal / 3;
      }
      return +that.infoList.adultAvg.toFixed(1);
    },

    // 计算雄虫加雌虫总数
    maleFemaleTotal() {
      var that = this;
      var num = 0;
      if (that.query.specialId == "PE003") {
        num = Number(this.infoList.male) + Number(this.infoList.female);
      }
      if (that.query.specialId == "PE005") {
        num =
          Number(this.infoList.tree1Male) +
          Number(this.infoList.tree2Male) +
          Number(this.infoList.tree3Male) +
          Number(this.infoList.tree4Male) +
          Number(this.infoList.tree5Male) +
          Number(this.infoList.tree6Male) +
          Number(this.infoList.tree7Male) +
          Number(this.infoList.tree8Male) +
          Number(this.infoList.tree9Male) +
          Number(this.infoList.tree10Male) +
          Number(this.infoList.tree1Female) +
          Number(this.infoList.tree2Female) +
          Number(this.infoList.tree3Female) +
          Number(this.infoList.tree4Female) +
          Number(this.infoList.tree5Female) +
          Number(this.infoList.tree6Female) +
          Number(this.infoList.tree7Female) +
          Number(this.infoList.tree8Female) +
          Number(this.infoList.tree9Female) +
          Number(this.infoList.tree10Female);
      }
      that.infoList.adultTotal = num;
      return num;
    },

    // 计算雄虫加雌虫平均
    maleFemaleAvg() {
      var that = this;
      that.infoList.adultAvg = that.infoList.adultTotal / 20;
      return +that.infoList.adultAvg.toFixed(1);
    },

    // 计算幼虫总数
    larvaTotal() {
      var that = this;
      let num =
        Number(this.infoList.tree1Num) +
        Number(this.infoList.tree2Num) +
        Number(this.infoList.tree3Num) +
        Number(this.infoList.tree4Num) +
        Number(this.infoList.tree5Num) +
        Number(this.infoList.tree6Num) +
        Number(this.infoList.tree7Num) +
        Number(this.infoList.tree8Num) +
        Number(this.infoList.tree9Num) +
        Number(this.infoList.tree10Num);
      that.infoList.larvaTotal = num;
      return num;
    },

    // 计算幼虫平均
    larvaAvg() {
      var that = this;
      that.infoList.larvaAvg = that.infoList.larvaTotal / 10;
      return +that.infoList.larvaAvg.toFixed(1);
    },

    // 计算总卵加卵孵总数
    eggHatchTotal() {
      var that = this;
      let num =
        Number(this.infoList.tree1EggTotal) +
        Number(this.infoList.tree2EggTotal) +
        Number(this.infoList.tree3EggTotal) +
        Number(this.infoList.tree4EggTotal) +
        Number(this.infoList.tree5EggTotal) +
        Number(this.infoList.tree6EggTotal) +
        Number(this.infoList.tree7EggTotal) +
        Number(this.infoList.tree8EggTotal) +
        Number(this.infoList.tree9EggTotal) +
        Number(this.infoList.tree10EggTotal) +
        Number(this.infoList.tree1Hatch) +
        Number(this.infoList.tree2Hatch) +
        Number(this.infoList.tree3Hatch) +
        Number(this.infoList.tree4Hatch) +
        Number(this.infoList.tree5Hatch) +
        Number(this.infoList.tree6Hatch) +
        Number(this.infoList.tree7Hatch) +
        Number(this.infoList.tree8Hatch) +
        Number(this.infoList.tree9Hatch) +
        Number(this.infoList.tree10Hatch);
      that.infoList.hatchTotal = num;
      return num;
    },

    // 计算总卵加卵孵平均
    eggHatchAvg() {
      var that = this;
      that.infoList.hatchAvg = that.infoList.hatchTotal / 20;
      return +that.infoList.hatchAvg.toFixed(1);
    },

    // 计算成虫加若虫总数
    adultNymphTotal() {
      var that = this;
      let num =
        Number(this.infoList.tree1Adult) +
        Number(this.infoList.tree2Adult) +
        Number(this.infoList.tree3Adult) +
        Number(this.infoList.tree4Adult) +
        Number(this.infoList.tree5Adult) +
        Number(this.infoList.tree1Nymph) +
        Number(this.infoList.tree2Nymph) +
        Number(this.infoList.tree3Nymph) +
        Number(this.infoList.tree4Nymph) +
        Number(this.infoList.tree5Nymph);
      that.infoList.adultTotal = num;
      return num;
    },

    // 计算成虫加若虫平均
    adultNymphAvg() {
      var that = this;
      that.infoList.adultAvg = that.infoList.adultTotal / 5;
      return +that.infoList.adultAvg.toFixed(1);
    },

    // 计算10棵树成虫总数
    adultTotal_2() {
      var that = this;
      let num =
        Number(this.infoList.tree1Adult) +
        Number(this.infoList.tree2Adult) +
        Number(this.infoList.tree3Adult) +
        Number(this.infoList.tree4Adult) +
        Number(this.infoList.tree5Adult) +
        Number(this.infoList.tree6Adult) +
        Number(this.infoList.tree7Adult) +
        Number(this.infoList.tree8Adult) +
        Number(this.infoList.tree9Adult) +
        Number(this.infoList.tree10Adult);
      that.infoList.adultTotal = num;
      return num;
    },

    // 计算10棵树成虫平均
    adultAvg_2() {
      var that = this;
      that.infoList.adultAvg = that.infoList.adultTotal / 10;
      return +that.infoList.adultAvg.toFixed(1);
    },

    // 计算10棵树总数
    adultTotal() {
      var that = this;
      let num =
        Number(this.infoList.tree1Num) +
        Number(this.infoList.tree2Num) +
        Number(this.infoList.tree3Num) +
        Number(this.infoList.tree4Num) +
        Number(this.infoList.tree5Num) +
        Number(this.infoList.tree6Num) +
        Number(this.infoList.tree7Num) +
        Number(this.infoList.tree8Num) +
        Number(this.infoList.tree9Num) +
        Number(this.infoList.tree10Num);
      that.infoList.adultTotal = num;
      return num;
    },

    // 计算10棵树平均
    adultAvg() {
      var that = this;
      that.infoList.adultAvg = that.infoList.adultTotal / 10;
      return +that.infoList.adultAvg.toFixed(1);
    }
  }
};
</script>

<style></style>

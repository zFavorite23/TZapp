<template>
  <div class="site">
    <!-- 导航栏 -->
    <van-nav-bar
      title="数据采集"
      @click-left="$router.back()"
      left-text="返回"
      left-arrow
      right-text="保存"
      @click-right="upLoader()"
    ></van-nav-bar>

    <!-- 监测点 -->
    <div class="monitor" style="color:#41b5ff">
      监测点：
      <span>{{ query.location }}</span>
    </div>

    <!-- 美国白蛾tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE001'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="美国白蛾">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.adultTotal"
            v-model="query.adultTotal"
          />
        </van-cell-group>

        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 白蜡窄吉丁tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE002'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="白蜡窄吉丁">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-width="37%"
            label-align="center"
            input-align="center"
            label="（观察员）羽化孔："
            :value="query.eclosionHole"
            v-model="query.eclosionHole"
          />
          <van-field
            label-width="37%"
            label-align="center"
            input-align="center"
            label="（观察员）成虫数："
            :value="query.adultNum"
            v-model="query.adultNum"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>

        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple :after-read="afterRead" />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 国槐尺蠖tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE003'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="国槐尺蠖-幼虫">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="幼虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree1Num"
            v-model="query.tree1Num"
            label="1"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree2Num"
            v-model="query.tree2Num"
            label="2"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree3Num"
            v-model="query.tree3Num"
            label="3"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree4Num"
            v-model="query.tree4Num"
            label="4"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree5Num"
            v-model="query.tree5Num"
            label="5"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree6Num"
            v-model="query.tree6Num"
            label="6"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree7Num"
            v-model="query.tree7Num"
            label="7"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree8Num"
            v-model="query.tree8Num"
            label="8"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree9Num"
            v-model="query.tree9Num"
            label="9"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree10Num"
            v-model="query.tree10Num"
            label="10"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="幼虫平均："
            :value="larvaAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="幼虫总数量："
            :value="larvaTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="国槐尺蠖-成虫">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.male"
            v-model="query.male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.female"
            v-model="query.female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="maleFemaleTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
    </van-tabs>

    <!-- 国槐叶柄小蛾tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE004'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="国槐叶柄小蛾">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="4"
            :value="query.trap4"
            v-model="query.trap4"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="5"
            :value="query.trap5"
            v-model="query.trap5"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 春尺蠖tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE005'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="春尺蠖-卵期">
        <van-cell-group>
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="1号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree1EggTotal"
            v-model="query.tree1EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree1Hatch"
            v-model="query.tree1Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="2号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree2EggTotal"
            v-model="query.tree2EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree2Hatch"
            v-model="query.tree2Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="3号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree3EggTotal"
            v-model="query.tree3EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree3Hatch"
            v-model="query.tree3Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="4号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree4EggTotal"
            v-model="query.tree4EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree4Hatch"
            v-model="query.tree4Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="5号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree5EggTotal"
            v-model="query.tree5EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree5Hatch"
            v-model="query.tree5Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="6号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree6EggTotal"
            v-model="query.tree6EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree6Hatch"
            v-model="query.tree6Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="7号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree7EggTotal"
            v-model="query.tree7EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree7Hatch"
            v-model="query.tree7Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="8号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree8EggTotal"
            v-model="query.tree8EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree8Hatch"
            v-model="query.tree8Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="9号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree9EggTotal"
            v-model="query.tree9EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree9Hatch"
            v-model="query.tree9Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="10号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="总卵数量："
            :value="query.tree10EggTotal"
            v-model="query.tree10EggTotal"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="孵卵数量："
            :value="query.tree10Hatch"
            v-model="query.tree10Hatch"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="卵数平均："
            :value="eggHatchAvg"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="卵数合计："
            :value="eggHatchTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="春尺蠖-幼虫">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="幼虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree1Num"
            v-model="query.tree1Num"
            label="1"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree2Num"
            v-model="query.tree2Num"
            label="2"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree3Num"
            v-model="query.tree3Num"
            label="3"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree4Num"
            v-model="query.tree4Num"
            label="4"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree5Num"
            v-model="query.tree5Num"
            label="5"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree6Num"
            v-model="query.tree6Num"
            label="6"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree7Num"
            v-model="query.tree7Num"
            label="7"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree8Num"
            v-model="query.tree8Num"
            label="8"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree9Num"
            v-model="query.tree9Num"
            label="9"
          />
          <van-field
            label-align="center"
            input-align="center"
            :value="query.tree10Num"
            v-model="query.tree10Num"
            label="10"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="幼虫平均："
            :value="larvaAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="幼虫总数量："
            :value="larvaTotal"
            readonly
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="春尺蠖-成虫">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="1号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree1Male"
            v-model="query.tree1Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree1Female"
            v-model="query.tree1Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="2号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree2Male"
            v-model="query.tree2Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree2Female"
            v-model="query.tree2Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="3号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree3Male"
            v-model="query.tree3Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree3Female"
            v-model="query.tree3Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="4号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree4Male"
            v-model="query.tree4Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree4Female"
            v-model="query.tree4Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="5号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree5Male"
            v-model="query.tree5Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree5Female"
            v-model="query.tree5Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="6号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree6Male"
            v-model="query.tree6Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree6Female"
            v-model="query.tree6Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="7号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree7Male"
            v-model="query.tree7Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree7Female"
            v-model="query.tree7Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="8号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree8Male"
            v-model="query.tree8Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree8Female"
            v-model="query.tree8Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="9号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree9Male"
            v-model="query.tree9Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree9Female"
            v-model="query.tree9Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="10号"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雄虫数量："
            :value="query.tree10Male"
            v-model="query.tree10Male"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="雌虫数量："
            :value="query.tree10Female"
            v-model="query.tree10Female"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="maleFemaleAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="(雌虫+雄虫)成虫总数量："
            :value="maleFemaleTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 苹果蠹蛾tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE006'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="苹果蠹蛾">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="4"
            :value="query.trap4"
            v-model="query.trap4"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="5"
            :value="query.trap5"
            v-model="query.trap5"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 悬铃木方翅网蝽tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE007'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="悬铃木方翅网蝽">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="1号"
            readonly
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree1Adult"
            v-model="query.tree1Adult"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="若虫数量："
            :value="query.tree1Nymph"
            v-model="query.tree1Nymph"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="2号"
            readonly
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree2Adult"
            v-model="query.tree2Adult"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="若虫数量："
            :value="query.tree2Nymph"
            v-model="query.tree2Nymph"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="3号"
            readonly
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree3Adult"
            v-model="query.tree3Adult"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="若虫数量："
            :value="query.tree3Nymph"
            v-model="query.tree3Nymph"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="4号"
            readonly
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree4Adult"
            v-model="query.tree4Adult"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="若虫数量："
            :value="query.tree4Nymph"
            v-model="query.tree4Nymph"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="5号"
            readonly
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree5Adult"
            v-model="query.tree5Adult"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="若虫数量："
            :value="query.tree5Nymph"
            v-model="query.tree5Nymph"
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="平均（合计/10）："
            :value="adultNymphAvg"
            readonly
          />
          <van-field
            label-width="40%"
            label-align="center"
            input-align="center"
            label="（成虫+若虫）合计："
            :value="adultNymphTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 桔小实蝇tabs页 ok-->
    <van-tabs
      v-if="query.specialId == 'PE008'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="桔小实蝇">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="4"
            :value="query.trap4"
            v-model="query.trap4"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="5"
            :value="query.trap5"
            v-model="query.trap5"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 光肩星天牛tabs页 -->
    <van-tabs
      v-if="query.specialId == 'PE009'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="光肩星天牛">
        <van-cell-group>
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="1号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree1DefecationHole"
            v-model="query.tree1DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree1Adult"
            v-model="query.tree1Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="2号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree2DefecationHole"
            v-model="query.tree2DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree2Adult"
            v-model="query.tree2Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="3号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree3DefecationHole"
            v-model="query.tree3DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree3Adult"
            v-model="query.tree3Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="4号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree4DefecationHole"
            v-model="query.tree4DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree4Adult"
            v-model="query.tree4Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="5号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree5DefecationHole"
            v-model="query.tree5DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree5Adult"
            v-model="query.tree5Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="6号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree6DefecationHole"
            v-model="query.tree6DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree6Adult"
            v-model="query.tree6Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="7号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree7DefecationHole"
            v-model="query.tree7DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree7Adult"
            v-model="query.tree7Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="8号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree8DefecationHole"
            v-model="query.tree8DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree8Adult"
            v-model="query.tree8Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="9号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree9DefecationHole"
            v-model="query.tree9DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree9Adult"
            v-model="query.tree9Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="调查株号"
            value="10号"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="排粪孔数量："
            :value="query.tree10DefecationHole"
            v-model="query.tree10DefecationHole"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫数量："
            :value="query.tree10Adult"
            v-model="query.tree10Adult"
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="平均（合计/10）："
            :value="adultAvg_2"
            readonly
          />
          <van-field
            label-width="45%"
            label-align="center"
            input-align="center"
            label="成虫合计（排粪孔不计入）："
            :value="adultTotal_2"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 红脂大小蠹tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE010'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="红脂大小蠹">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="4"
            :value="query.trap4"
            v-model="query.trap4"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="5"
            :value="query.trap5"
            v-model="query.trap5"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 松梢螟tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE011'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="松梢螟">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="4"
            :value="query.trap4"
            v-model="query.trap4"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="5"
            :value="query.trap5"
            v-model="query.trap5"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 杨扇舟蛾tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE012'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="杨扇舟蛾">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree1Num"
            :value="query.tree1Num"
            label="1"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree2Num"
            :value="query.tree2Num"
            label="2"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree3Num"
            :value="query.tree3Num"
            label="3"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree4Num"
            :value="query.tree4Num"
            label="4"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree5Num"
            :value="query.tree5Num"
            label="5"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree6Num"
            :value="query.tree6Num"
            label="6"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree7Num"
            :value="query.tree7Num"
            label="7"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree8Num"
            :value="query.tree8Num"
            label="8"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree9Num"
            :value="query.tree9Num"
            label="9"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree10Num"
            :value="query.tree10Num"
            label="10"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="adultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="adultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 梨小食心虫tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE013'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="梨小食心虫">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 双条杉天牛tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE014'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="双条杉天牛">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕器编号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="1"
            :value="query.trap1"
            v-model="query.trap1"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="2"
            :value="query.trap2"
            v-model="query.trap2"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="3"
            :value="query.trap3"
            v-model="query.trap3"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="trapAdultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="trapAdultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 草履蚧tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE015'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="草履蚧">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree1Num"
            :value="query.tree1Num"
            label="1"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree2Num"
            :value="query.tree2Num"
            label="2"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree3Num"
            :value="query.tree3Num"
            label="3"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree4Num"
            :value="query.tree4Num"
            label="4"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree5Num"
            :value="query.tree5Num"
            label="5"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree6Num"
            :value="query.tree6Num"
            label="6"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree7Num"
            :value="query.tree7Num"
            label="7"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree8Num"
            :value="query.tree8Num"
            label="8"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree9Num"
            :value="query.tree9Num"
            label="9"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree10Num"
            :value="query.tree10Num"
            label="10"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="adultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="adultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 臭椿沟眶象tabs页  ok-->
    <van-tabs
      v-if="query.specialId == 'PE016'"
      title-active-color="#41b5ff"
      color="#41b5ff"
      animated
      swipeable
    >
      <van-tab title="天气 物候">
        <van-cell-group>
          <van-field
            label="树种："
            :value="query.varieties"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.phenology"
            label="物候："
            label-align="center"
            input-align="center"
          />
          <van-field
            label="天气："
            :value="query.weather"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="温度："
            :value="`${query.temperature}℃`"
            readonly
            label-align="center"
            input-align="center"
          />
          <van-field
            label="监测时间："
            readonly
            :value="query.surveTime"
            label-align="center"
            input-align="center"
          />
          <van-field
            v-model="query.remarks"
            label-align="center"
            rows="2"
            autosize
            label="备注："
            type="textarea"
            placeholder="请添加备注"
            show-word-limit
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="臭椿沟眶象">
        <van-cell-group>
          <van-field
            label-align="center"
            input-align="center"
            label="诱捕方式："
            placeholder="请选择方式"
            :value="query.entrapmentMethod"
            @click="showPicker = true"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="调查株号"
            value="成虫数量"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree1Num"
            :value="query.tree1Num"
            label="1"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree2Num"
            :value="query.tree2Num"
            label="2"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree3Num"
            :value="query.tree3Num"
            label="3"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree4Num"
            :value="query.tree4Num"
            label="4"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree5Num"
            :value="query.tree5Num"
            label="5"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree6Num"
            :value="query.tree6Num"
            label="6"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree7Num"
            :value="query.tree7Num"
            label="7"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree8Num"
            :value="query.tree8Num"
            label="8"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree9Num"
            :value="query.tree9Num"
            label="9"
          />
          <van-field
            label-align="center"
            input-align="center"
            v-model="query.tree10Num"
            :value="query.tree10Num"
            label="10"
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫平均："
            :value="adultAvg"
            readonly
          />
          <van-field
            label-align="center"
            input-align="center"
            label="成虫总数量："
            :value="adultTotal"
            readonly
          />
        </van-cell-group>
        <!-- 上传图片 -->
        <div class="img">
          <div style="margin-right:15px;font-size:16px">上传照片：</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-tab>
    </van-tabs>
    <!-- 诱捕方式 -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPicker: false,
      value: "",
      // 诱捕方式
      columns: [
        "性诱",
        "诱液（引诱剂）",
        "诱木/诱枝条",
        "捕获网",
        "人眼观测调查",
        "围环阻隔调查"
      ],
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ],

      // 测报数据
      query: {
        // 虫子id
        specialId: "",
        // 树种
        varieties: "",
        // 监测点
        location: "",
        // 成虫总数
        adultTotal: "",
        // 成虫平均
        adultAvg: "",
        // 卵数总数
        hatchTotal: "",
        // 卵数平均
        hatchAvg: "",
        // 幼虫总数
        larvaTotal: "",
        // 幼虫平均
        larvaAvg: "",
        // 雄虫
        male: "",
        // 雌虫
        female: "",
        // 监测点id
        dotId: "",
        // 物候
        phenology: "",
        // 天气
        weather: "",
        // 温度
        temperature: "",
        // 诱捕方式
        entrapmentMethod: "",
        // 调查时间
        surveTime: "",
        // 备注
        remarks: "",
        // 调查员观察--羽化孔
        eclosionHole: "",
        // 调查员观察--成虫数量
        adultNum: "",
        // 1到10号树 成虫数量
        tree1Num: "",
        tree2Num: "",
        tree3Num: "",
        tree4Num: "",
        tree5Num: "",
        tree6Num: "",
        tree7Num: "",
        tree8Num: "",
        tree9Num: "",
        tree10Num: "",
        // 1到10号树若虫
        tree1Nymph: "",
        tree2Nymph: "",
        tree3Nymph: "",
        tree4Nymph: "",
        tree5Nymph: "",
        tree6Nymph: "",
        tree7Nymph: "",
        tree8Nymph: "",
        tree9Nymph: "",
        tree10Nymph: "",
        // 1到10号树成虫
        tree1Adult: "",
        tree2Adult: "",
        tree3Adult: "",
        tree4Adult: "",
        tree5Adult: "",
        tree6Adult: "",
        tree7Adult: "",
        tree8Adult: "",
        tree9Adult: "",
        tree10Adult: "",
        // 1到10号树雄虫
        tree1Male: "",
        tree2Male: "",
        tree3Male: "",
        tree4Male: "",
        tree5Male: "",
        tree6Male: "",
        tree7Male: "",
        tree8Male: "",
        tree9Male: "",
        tree10Male: "",
        // 1到10号树雌虫
        tree1Female: "",
        tree2Female: "",
        tree3Female: "",
        tree4Female: "",
        tree5Female: "",
        tree6Female: "",
        tree7Female: "",
        tree8Female: "",
        tree9Female: "",
        tree10Female: "",
        // 1到10号树总卵
        tree1EggTotal: "",
        tree2EggTotal: "",
        tree3EggTotal: "",
        tree4EggTotal: "",
        tree5EggTotal: "",
        tree6EggTotal: "",
        tree7EggTotal: "",
        tree8EggTotal: "",
        tree9EggTotal: "",
        tree10EggTotal: "",
        // 1到10号树卵孵
        tree1Hatch: "",
        tree2Hatch: "",
        tree3Hatch: "",
        tree4Hatch: "",
        tree5Hatch: "",
        tree6Hatch: "",
        tree7Hatch: "",
        tree8Hatch: "",
        tree9Hatch: "",
        tree10Hatch: "",
        // 1到10排粪孔
        tree1DefecationHole: "",
        tree2DefecationHole: "",
        tree3DefecationHole: "",
        tree4DefecationHole: "",
        tree5DefecationHole: "",
        tree6DefecationHole: "",
        tree7DefecationHole: "",
        tree8DefecationHole: "",
        tree9DefecationHole: "",
        tree10DefecationHole: "",
        // 1到5号 诱捕器
        trap1: "",
        trap2: "",
        trap3: "",
        trap4: "",
        trap5: ""
      }
    };
  },
  methods: {
    // 诱捕方式
    onConfirm(value) {
      this.query.entrapmentMethod = value;
      this.showPicker = false;
    },

    // 获取天气
    getWeather() {
      this.$axios({
        method: "get",
        url:
          "https://free-api.heweather.net/s6/weather/now?location=beijing&key=4f4fc1eb4fab4a77a45f74663dedb1a6"
      }).then(res => {
        this.query.weather = res.data.HeWeather6[0].now.cond_txt;
        this.query.temperature = res.data.HeWeather6[0].now.tmp;
      });
    },

    // 获取时间
    getTime() {
      var myDate = new Date();
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var strDate = myDate.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.query.surveTime = year + month + strDate;
    },

    // 上报数据
    upLoader() {
      this.query.surveUser = "张凯敏";
      this.query.status = "0";
      if (this.query.remarks == null) {
        this.query.remarks = "无";
      }
      this.$axios({
        method: "post",
        url: "/pest/pest/data",
        data: this.query
      }).then(res => {
        console.log(res);
        this.$toast.success("上报成功！");
        this.$router.push("/report");
      });
    }
  },
  created() {
    // 获取天气
    this.getWeather();

    // 获取时间
    this.getTime();
    this.query.specialId = this.$route.query.specialId;
    this.query.varieties = this.$route.query.varieties;
    this.query.location = this.$route.query.location;
    this.query.dotId = this.$route.query.dotId;
  },
  computed: {
    // 计算10棵树总数
    adultTotal() {
      var that = this;
      let num =
        Number(this.query.tree1Num) +
        Number(this.query.tree2Num) +
        Number(this.query.tree3Num) +
        Number(this.query.tree4Num) +
        Number(this.query.tree5Num) +
        Number(this.query.tree6Num) +
        Number(this.query.tree7Num) +
        Number(this.query.tree8Num) +
        Number(this.query.tree9Num) +
        Number(this.query.tree10Num);
      that.query.adultTotal = num;
      return num;
    },

    // 计算10棵树平均
    adultAvg() {
      var that = this;
      that.query.adultAvg = that.query.adultTotal / 10;
      return +that.query.adultAvg.toFixed(1);
    },

    // 计算诱捕器成虫数量
    trapAdultTotal() {
      var that = this;
      var num = 0;
      if (that.query.specialId == "PE002") {
        num =
          Number(this.query.trap1) +
          Number(this.query.trap2) +
          Number(this.query.trap3) +
          Number(this.query.adultNum);
      }
      if (
        that.query.specialId == "PE004" ||
        that.query.specialId == "PE006" ||
        that.query.specialId == "PE008" ||
        that.query.specialId == "PE010" ||
        that.query.specialId == "PE011"
      ) {
        num =
          Number(this.query.trap1) +
          Number(this.query.trap2) +
          Number(this.query.trap3) +
          Number(this.query.trap4) +
          Number(this.query.trap5);
      }
      if (that.query.specialId == "PE014" || that.query.specialId == "PE013") {
        num =
          Number(this.query.trap1) +
          Number(this.query.trap2) +
          Number(this.query.trap3);
      }

      that.query.adultTotal = num;
      return num;
    },

    // 计算诱捕器成虫平均
    trapAdultAvg() {
      var that = this;
      if (that.query.specialId == "PE002") {
        that.query.adultAvg = that.query.adultTotal / 4;
      }
      if (
        that.query.specialId == "PE004" ||
        that.query.specialId == "PE006" ||
        that.query.specialId == "PE008" ||
        that.query.specialId == "PE010" ||
        that.query.specialId == "PE011"
      ) {
        that.query.adultAvg = that.query.adultTotal / 5;
      }
      if (that.query.specialId == "PE014" || that.query.specialId == "PE013") {
        that.query.adultAvg = that.query.adultTotal / 3;
      }
      return +that.query.adultAvg.toFixed(1);
    },

    // 计算成虫加若虫总数
    adultNymphTotal() {
      var that = this;
      let num =
        Number(this.query.tree1Adult) +
        Number(this.query.tree2Adult) +
        Number(this.query.tree3Adult) +
        Number(this.query.tree4Adult) +
        Number(this.query.tree5Adult) +
        Number(this.query.tree1Nymph) +
        Number(this.query.tree2Nymph) +
        Number(this.query.tree3Nymph) +
        Number(this.query.tree4Nymph) +
        Number(this.query.tree5Nymph);
      that.query.adultTotal = num;
      return num;
    },

    // 计算成虫加若虫平均
    adultNymphAvg() {
      var that = this;
      that.query.adultAvg = that.query.adultTotal / 5;
      return +that.query.adultAvg.toFixed(1);
    },

    // 计算总卵加卵孵总数
    eggHatchTotal() {
      var that = this;
      let num =
        Number(this.query.tree1EggTotal) +
        Number(this.query.tree2EggTotal) +
        Number(this.query.tree3EggTotal) +
        Number(this.query.tree4EggTotal) +
        Number(this.query.tree5EggTotal) +
        Number(this.query.tree6EggTotal) +
        Number(this.query.tree7EggTotal) +
        Number(this.query.tree8EggTotal) +
        Number(this.query.tree9EggTotal) +
        Number(this.query.tree10EggTotal) +
        Number(this.query.tree1Hatch) +
        Number(this.query.tree2Hatch) +
        Number(this.query.tree3Hatch) +
        Number(this.query.tree4Hatch) +
        Number(this.query.tree5Hatch) +
        Number(this.query.tree6Hatch) +
        Number(this.query.tree7Hatch) +
        Number(this.query.tree8Hatch) +
        Number(this.query.tree9Hatch) +
        Number(this.query.tree10Hatch);
      that.query.hatchTotal = num;
      return num;
    },

    // 计算总卵加卵孵平均
    eggHatchAvg() {
      var that = this;
      that.query.hatchAvg = that.query.hatchTotal / 20;
      return +that.query.hatchAvg.toFixed(1);
    },

    // 计算幼虫总数
    larvaTotal() {
      var that = this;
      let num =
        Number(this.query.tree1Num) +
        Number(this.query.tree2Num) +
        Number(this.query.tree3Num) +
        Number(this.query.tree4Num) +
        Number(this.query.tree5Num) +
        Number(this.query.tree6Num) +
        Number(this.query.tree7Num) +
        Number(this.query.tree8Num) +
        Number(this.query.tree9Num) +
        Number(this.query.tree10Num);
      that.query.larvaTotal = num;
      return num;
    },

    // 计算幼虫平均
    larvaAvg() {
      var that = this;
      that.query.larvaAvg = that.query.larvaTotal / 10;
      return +that.query.larvaAvg.toFixed(1);
    },

    // 计算雄虫加雌虫总数
    maleFemaleTotal() {
      var that = this;
      var num = 0;
      if (that.query.specialId == "PE003") {
        num = Number(this.query.male) + Number(this.query.female);
      }
      if (that.query.specialId == "PE005") {
        num =
          Number(this.query.tree1Male) +
          Number(this.query.tree2Male) +
          Number(this.query.tree3Male) +
          Number(this.query.tree4Male) +
          Number(this.query.tree5Male) +
          Number(this.query.tree6Male) +
          Number(this.query.tree7Male) +
          Number(this.query.tree8Male) +
          Number(this.query.tree9Male) +
          Number(this.query.tree10Male) +
          Number(this.query.tree1Female) +
          Number(this.query.tree2Female) +
          Number(this.query.tree3Female) +
          Number(this.query.tree4Female) +
          Number(this.query.tree5Female) +
          Number(this.query.tree6Female) +
          Number(this.query.tree7Female) +
          Number(this.query.tree8Female) +
          Number(this.query.tree9Female) +
          Number(this.query.tree10Female);
      }
      that.query.adultTotal = num;
      return num;
    },

    // 计算雄虫加雌虫平均
    maleFemaleAvg() {
      var that = this;
      that.query.adultAvg = that.query.adultTotal / 20;
      return +that.query.adultAvg.toFixed(1);
    },

    // 计算10棵树成虫总数
    adultTotal_2() {
      var that = this;
      let num =
        Number(this.query.tree1Adult) +
        Number(this.query.tree2Adult) +
        Number(this.query.tree3Adult) +
        Number(this.query.tree4Adult) +
        Number(this.query.tree5Adult) +
        Number(this.query.tree6Adult) +
        Number(this.query.tree7Adult) +
        Number(this.query.tree8Adult) +
        Number(this.query.tree9Adult) +
        Number(this.query.tree10Adult);
      that.query.adultTotal = num;
      return num;
    },

    // 计算10棵树成虫平均
    adultAvg_2() {
      var that = this;
      that.query.adultAvg = that.query.adultTotal / 10;
      return +that.query.adultAvg.toFixed(1);
    }
  }
};
</script>

<style scoped>
.monitor {
  font-size: 30px;
  height: 70px;
  line-height: 70px;
  padding-left: 3%;
  margin: 0 2%;
  border-bottom: 3px solid #cccccc;
}

.nav {
  font-size: 30px;
}

.img {
  display: flex;
  align-items: center;
  margin-top: 15%;
  margin-left: 5%;
}
</style>

<!--  -->
<template>
  <container-fluid padding>
    <div class="home overflow-hidden">
      <a-row :gutter="[24, 24]">
        <a-col v-bind="col">
          <card-statistic title="总访问记录" tip="go" total="￥126,560">
            <div class="flex-row-start-center">
              <number-statistic
                class="margin-right-10"
                title="周同比"
                content="12%"
                type="up"
              />
              <number-statistic title="日同比" content="12.3%" type="down" />
            </div>
            <template #footer>
              <div class="text-ellipsis">日均访问量：<span>3000</span></div>
            </template>
          </card-statistic>
        </a-col>
        <a-col v-bind="col">
          <card-statistic title="总访问记录" tip="go" total="￥126,560">
            <div class="flex-row-start-center">
              <number-statistic
                class="margin-right-10"
                title="周同比"
                content="12%"
                type="up"
              />
              <number-statistic title="日同比" content="12.3%" type="down" />
            </div>
            <template #footer>
              <div class="text-ellipsis">日均访问量：<span>3000</span></div>
            </template>
          </card-statistic>
        </a-col>
        <a-col v-bind="col">
          <card-statistic title="总访问记录" tip="go" total="￥126,560">
            <div class="flex-row-start-center">
              <number-statistic
                class="margin-right-10"
                title="周同比"
                content="12%"
                type="up"
              />
              <number-statistic title="日同比" content="12.3%" type="down" />
            </div>
            <template #footer>
              <div class="text-ellipsis">日均访问量：<span>3000</span></div>
            </template>
          </card-statistic>
        </a-col>
        <a-col v-bind="col">
          <card-statistic title="总访问记录" tip="go" total="￥126,560">
            <div class="flex-row-start-center">
              <number-statistic
                class="margin-right-10"
                title="周同比"
                content="12%"
                type="up"
              />
              <number-statistic title="日同比" content="12.3%" type="down" />
            </div>
            <template #footer>
              <div class="text-ellipsis">日均访问量：<span>3000</span></div>
            </template>
          </card-statistic>
        </a-col>
        <a-col v-bind="col">
          <card-statistic title="总访问记录" tip="go" total="￥126,560">
            <div class="flex-row-start-center">
              <number-statistic
                class="margin-right-10"
                title="周同比"
                content="12%"
                type="up"
              />
              <number-statistic title="日同比" content="12.3%" type="down" />
            </div>
            <template #footer>
              <div class="text-ellipsis">日均访问量：<span>3000</span></div>
            </template>
          </card-statistic>
        </a-col>
      </a-row>
      <img alt="Vue logo" :src="require('@a/img/logo.png')" />
      <AnimateNumber
        :start-num="1000"
        :end-num="100"
        :duration="10000"
        :autoplay="true"
        format="0.00"
        animate-type="ease-in"
      />
    </div>
  </container-fluid>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnimateNumber from "@h/animate-number";
import { RouteGlobal } from "@/types/route";
import { CardStatistic, NumberStatistic } from "@b/index";
@Component({
  components: {
    AnimateNumber,
    CardStatistic,
    NumberStatistic
  }
})
export default class Home extends Vue {
  num: number = 0;
  val: string = "0";
  col = {
    sm: 24,
    md: 12,
    lg: 12,
    xl: 8,
    xxl: 6
  };
  handleClick() {
    this.$routerPush({ name: "Default" });
  }
  created() {
    // console.log("home, created");
    // this.addNum();
  }
}
</script>
<style lang="stylus"></style>

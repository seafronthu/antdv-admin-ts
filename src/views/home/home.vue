<!--  -->
<template>
  <container-fluid padding>
    <my-chart
      :anmiate="true"
      :data="data"
      :autoFit="true"
      :height="500"
      :padding="100"
    >
      <my-scale
        :value="{
          value: {
            min: 10000,
            nice: true
          },
          year: {
            range: [0, 1]
          }
        }"
      ></my-scale>
      <my-area position="year*value" shape="smooth"></my-area>
      <my-line position="year*value" shape="smooth"></my-line>
      <my-create-view
        :data="[
          { year: '1949 年', sales: 38 },
          { year: '1950 年', sales: 52 },
          { year: '1951 年', sales: 38 },
          { year: '1952 年', sales: 52 },
          { year: '1956 年', sales: 61 },
          { year: '1957 年', sales: 145 },
          { year: '1958 年', sales: 48 },
          { year: '1959 年', sales: 38 },
          { year: '1960 年', sales: 38 },
          { year: '1962 年', sales: 38 }
        ]"
      >
        <my-axis
          :value="[
            'year',
            {
              position: 'top',
              label: { formatter: handleFormatter },
              title: {
                style: {
                  fill: '#1890ff'
                }
              }
            }
          ]"
        ></my-axis>
        <my-scale :value="['sales']"></my-scale>
        <my-axis :value="['sales', { position: 'right' }]"></my-axis>
        <my-interval position="year*sales"> </my-interval>
      </my-create-view>
    </my-chart>
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
  data: { year: string; value: number }[] = [
    { year: "1990", value: 11111 },
    { year: "1991", value: 15468 },
    { year: "1992", value: 16100 },
    { year: "1993", value: 15900 },
    { year: "1994", value: 17409 },
    { year: "1995", value: 17000 },
    { year: "1996", value: 31056 },
    { year: "1997", value: 31982 },
    { year: "1998", value: 32040 },
    { year: "1999", value: 33233 }
  ];
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
  handleFormatter(val: any) {
    return val;
  }
  // handleChart(chart: any) {
  //   this.chart = chart;
  // }
  created() {
    // let timer = setInterval(() => {
    //   this.data.splice(0, 1);
    //   if (this.data.length === 3) {
    //     clearInterval(timer);
    //   }
    // }, 5000);
    // console.log("home, created");
    // this.addNum();
  }
  mounted() {}
}
</script>
<style lang="stylus"></style>

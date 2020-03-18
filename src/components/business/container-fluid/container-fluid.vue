<!-- 容器 -->
<template>
  <div class="container-fluid" ref="container" :style="containerStyle">
    <slot name="header"></slot>
    <div class="container-fluid-scroll" :style="scrollStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { ElLoadingComponent } from "element-ui/types/loading";
@Component
export default class ContainerFluid extends Vue {
  $refs!: {
    container: HTMLElement;
  };
  @Prop({
    type: Boolean,
    default: false
  })
  full!: boolean;
  @Prop({
    type: Boolean,
    default: false
  })
  loading!: boolean;
  @Prop({
    type: String,
    default: "Loading……"
  })
  text!: string;
  @Prop({
    type: String,
    default: "large"
  })
  spinSize!: string;
  @Prop({
    type: Boolean,
    default: false
  })
  overflowY!: boolean;
  @Prop({
    type: Boolean
  })
  scrollBackgroundColor?: string;
  height: string = "calc(100vh - 133px)";
  // height: string = "calc(100vh - 133px)";
  loadingTarget?: ElLoadingComponent;
  @Watch("loading", {
    immediate: true
  })
  setLoading(currVal: boolean, oldVal: boolean) {
    if (currVal) {
      this.$nextTick(() => {
        this.loadingTarget = this.$loading({
          target: this.$refs.container,
          text: this.text,
          spinner:
            "hhf-iconfont hhf-icon-loading-fan loading-rotating inline-block size-30",
          background: "rgba(255, 255, 255, 0.6)"
        });
      });
      return;
    }
    if (this.loadingTarget) {
      this.loadingTarget.close();
    }
  }
  get containerStyle() {
    const { height, full } = this;
    return full
      ? {
          height
        }
      : null;
  }
  get scrollStyle() {
    return this.full
      ? {
          overflowY: "auto",
          backgroundColor: this.scrollBackgroundColor
        }
      : null;
  }
}
</script>
<style lang="stylus">
.container-fluid
  width 100%
  display flex
  flex-flow column nowrap
  .ant-spin-nested-loading
    height 100%
    .ant-spin-container
      height 100%
  .container-fluid-scroll
    border-radius 3px
    height auto
    max-height 100%
    flex 1
</style>

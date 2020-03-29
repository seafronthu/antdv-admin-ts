/*** 容器 ***/
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { ElLoadingComponent } from "element-ui/types/loading";
import { CreateElement } from "vue";
import "./container-fluid.styl";
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
  message!: string;
  @Prop({
    type: String,
    default: "Loading……"
  })
  spinClassName!: string;
  @Prop({
    type: String,
    default: "large"
  })
  spinSize!: "small" | "default" | "large";
  @Prop({
    type: Boolean,
    default: false
  })
  overflowY!: boolean;
  @Prop({
    type: Boolean
  })
  scrollBackgroundColor?: string;
  height: string = "calc(100vh - 152px)";
  // height: string = "calc(100vh - 133px)";
  loadingTarget?: ElLoadingComponent;
  // @Watch("loading", {
  //   immediate: true
  // })
  // setLoading(currVal: boolean, oldVal: boolean) {
  //   if (currVal) {
  //     this.$nextTick(() => {
  //       this.loadingTarget = this.$loading({
  //         target: this.$refs.container,
  //         text: this.message,
  //         spinner:
  //           "hhf-iconfont hhf-icon-loading-fan loading-rotating inline-block size-30",
  //         background: "rgba(255, 255, 255, 0.6)"
  //       });
  //     });
  //     return;
  //   }
  //   if (this.loadingTarget) {
  //     this.loadingTarget.close();
  //   }
  // }
  get iconStyle() {
    switch (this.spinSize) {
      case "small":
        return {
          fontSize: "14px"
        };
      case "default":
        return {
          fontSize: "20px"
        };
      case "large":
        return {
          fontSize: "32px"
        };
      default:
        return {
          fontSize: "20px"
        };
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
  created() {
    console.log("come in");
  }
  render(h: CreateElement) {
    const {
      containerStyle,
      scrollStyle,
      spinSize,
      loading,
      message,
      spinClassName,
      $scopedSlots,
      iconStyle
    } = this;
    const props = {
      size: spinSize,
      tip: message,
      spinning: loading,
      wrapperClassName: spinClassName,
      class: "container-fluid-spin"
    };
    const header = $scopedSlots.header && $scopedSlots.header({});
    const df = $scopedSlots.default && $scopedSlots.default({});
    // const header = $scopedSlots.header;
    // const df = $scopedSlots.default;
    //? 额外包一层是为了动画
    return (
      <div>
        <div class="container-fluid" ref="container" style={containerStyle}>
          <a-spin {...{ props }}>
            <template slot="indicator">
              <antd-icon type="hhf-icon-loading-fan" style={iconStyle} spin />
            </template>
            <div class="container-fluid-main">
              {header}
              <div class="container-fluid-scroll" style={scrollStyle}>
                {df}
              </div>
            </div>
          </a-spin>
        </div>
      </div>
    );
  }
}

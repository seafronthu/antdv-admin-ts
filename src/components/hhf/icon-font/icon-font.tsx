/** 图标 */

import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class IconFont extends Vue {
  @Prop({
    type: String || Array
  })
  classes?: string | string[];
  @Prop({
    type: String
  })
  type?: string;
  @Prop({
    type: Number
  })
  rotate?: Number;
  @Prop({
    type: String
  })
  color?: string;
  @Prop({
    type: String
  })
  size?: string;
  @Prop({
    type: Boolean
  })
  spin?: boolean;
  @Prop({
    type: String
  })
  width?: string;
  @Prop({
    type: String
  })
  height?: string;
  get containerParams() {
    const { width, height, size, color } = this;
    return {
      style: {
        width,
        height,
        fontSize: size,
        color
      }
    };
  }
  get svgParams() {
    const { spin, rotate } = this;
    return {
      class: spin ? "hhf-icon-font-rotate" : "",
      style: {
        transform: `rotate(${rotate}deg)`
      },
      attrs: {
        "aria-hidden": "true"
      }
    };
  }
  get useParams() {
    const { spin, type } = this;
    return {
      attrs: {
        "xlink:href": `#hhf-icon-${type}`
      },
      class: spin ? "hhf-icon-font-rotate" : ""
    };
  }
  render() {
    const { useParams, svgParams, containerParams } = this;
    return (
      <i class="hhf-icon-font" {...containerParams}>
        <svg {...svgParams}>
          <use {...useParams} />
        </svg>
      </i>
    );
  }
}

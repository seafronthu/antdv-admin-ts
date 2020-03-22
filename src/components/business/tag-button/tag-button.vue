<!-- 标签按钮 -->
<template>
  <div class="tag-button" :style="{ height: height }">
    <el-dropdown :trigger="trigger" @command="handleCommand">
      <div ref="clickEle">
        <div @click.stop="handleClick" ref="contextmenuEle">
          <el-tag
            :type="type"
            :color="color"
            :effect="effect"
            :closable="closable"
            class="tag-button-flex"
          >
            <IconFont
              v-if="dot"
              icon="dot"
              :style="{ color: color, paddingRight: '10px' }"
            />
            <slot></slot>
          </el-tag>
        </div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <slot name="menu"></slot>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div :style="{ height: height }">
    <a-dropdown :trigger="trigger">
      <a-tag
        class="flex-row flex-start-center not-select"
        :closable="closable"
        :style="stylesMerge"
        @close="handleClose"
        @click="handleTagClick"
      >
        <IconFont
          v-if="dot"
          icon="dot"
          :style="{ color: color, paddingRight: '10px' }"
        ></IconFont>
        <slot></slot>
        <!-- <a-icon type="close-circle" /> -->
      </a-tag>
      <a-menu slot="overlay" @click="handleMenuClick">
        <slot name="menu"></slot>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IconFont from "@h/icon-font";
@Component({
  components: {
    IconFont
  }
})
export default class TagButton extends Vue {
  @Prop({
    type: Array,
    default() {
      return ["hover"];
    }
  })
  trigger?: ("hover" | "click" | "contextmenu")[];
  @Prop({
    type: Boolean
  })
  closable?: boolean;
  @Prop({
    type: Boolean,
    default: false
  })
  dot?: boolean;
  @Prop({ type: String }) color?: string;
  @Prop({ type: String, default: "" })
  type?: "" | "success" | "info" | "warning" | "danger";
  @Prop({
    type: String
  })
  height?: string;
  handleClose() {}
  handleTagClick() {
    this.$emit("trigger-click");
  }
  handleMenuClick() {}
}
export default {
  name: "TagButton",

  data() {
    return {};
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    size: {
      type: String
    },
    height: {
      type: String
    },
    trigger: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  components: {
    IconFont
  },

  computed: {
    stylesMerge() {
      const { height } = this;
      let wrapStyles = {};
      if (height) {
        wrapStyles = {
          lineHeight: "normal",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "flex-start",
          alignItem: "center",
          fontWeight: "bold",
          height
        };
      }
      return {
        color: this.color,
        fontSize: this.size,
        marginRight: 0,
        ...wrapStyles
      };
    }
  },

  methods: {
    handleClose(e) {
      e.preventDefault();
      this.$emit("trigger-close", e);
    },
    handleTagClick(e) {
      this.$emit("trigger-tag-click", e);
    },
    handleMenuClick({ item, key, keyPath }) {
      this.$emit("trigger-menu-click", { item, key, keyPath });
    }
  },

  mounted() {}
};
</script>
<style lang="stylus" scoped>
.dot
  padding-right 10px
  color #eeeeee
  font-size 25px
</style>

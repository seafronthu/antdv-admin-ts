<!-- 消息栏 -->
<template>
  <a-popover
    overlayClassName="header-message"
    placement="bottomRight"
    v-model="visible"
    trigger="click"
    @visibleChange="handleChange"
  >
    <div class="pointer flex-row-center padding-0-15 hover-bgcolor-white">
      <a-badge :count="100" :overflowCount="99">
        <a-icon type="message" class="size-25 color-white" />
      </a-badge>
    </div>
    <template #content>
      <a-spin :spinning="loading">
        <a-tabs>
          <a-tab-pane tab="通知（10）" key="1">
            <a-list>
              <a-list-item>
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
                    />
                  </template>
                  <template #title>
                    <a class="head-message-title" href="javascript: void 0;">
                      这是通知</a
                    >
                  </template>
                  <template #description>
                    <span>一分钟前</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"
                    />
                  </template>
                  <template #title>
                    <a class="head-message-title" href="javascript: void 0;">
                      这是通知这是通知这是通知</a
                    >
                  </template>
                  <template #description>
                    <span>两分钟前</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"
                    />
                  </template>
                  <template #title>
                    <a class="head-message-title" href="javascript: void 0;"
                      >这是通知这是通知这是通知</a
                    >
                  </template>
                  <template #description>
                    <span>三分钟前</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="消息（1）" key="2">
            123
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
  </a-popover>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HeadMessage extends Vue {
  visible: boolean = false;
  loading: boolean = false;
  /** methods */
  handleChange(visible: boolean) {
    console.log("visible:", visible);
  }
}
</script>
<style lang="stylus">
.header-message
  .ant-popover-inner-content
    padding 12px 0
  .ant-tabs-bar
    padding 0 16px
  .ant-list-item
    padding 12px 16px
    transition all 0.3s
    cursor pointer
    &:hover
      background-color $hover-bgcolor
</style>

<!-- 消息栏 -->
<template>
  <a-popover
    overlayClassName="head-message"
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
          <a-tab-pane tab="通知（11）" key="1">
            <a-list>
              <a-list-item v-for="(item, index) of list.notice" :key="index">
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"
                    />
                  </template>
                  <template #title>
                    <a class="head-message-title" href="javascript: void 0;">
                      {{ item.title }}</a
                    >
                  </template>
                  <template #description>
                    <span>{{ item.description }}</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
            <div class="head-message-btn-container">
              <button class="head-message-btn">清空 通知</button>
              <button class="head-message-btn">查看更多</button>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="消息（1）" key="2">
            <a-list>
              <a-list-item v-for="(item, index) of list.message" :key="index">
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
                    />
                  </template>
                  <template #title>
                    <a class="head-message-title" href="javascript: void 0;">
                      {{ item.title }}</a
                    >
                  </template>
                  <template #description>
                    <span>{{ item.description }}</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
            <div class="head-message-btn-container">
              <button class="head-message-btn">清空 消息</button>
              <button class="head-message-btn">查看更多</button>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="待办" key="3">
            <a-list>
              <a-list-item v-for="(item, index) of list.deal" :key="index">
                <a-list-item-meta>
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"
                    />
                  </template>
                  <template #title>
                    <a class="head-message-title" href="javascript: void 0;">
                      {{ item.title }}</a
                    >
                  </template>
                  <template #description>
                    <span>{{ item.description }}</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
            <div class="head-message-btn-container">
              <button class="head-message-btn">清空 待办</button>
              <button class="head-message-btn">查看更多</button>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
  </a-popover>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const list = {
  notice: [
    {
      title: "这是通知",
      description: "1分钟前"
    },
    {
      title: "这是通知",
      description: "1分钟前"
    },
    {
      title: "这是通知",
      description: "1分钟前"
    }
  ],
  message: [
    {
      title: "这是消息",
      description: "2分钟前"
    },
    {
      title: "这是消息",
      description: "2分钟前"
    },
    {
      title: "这是消息",
      description: "2分钟前"
    }
  ],
  deal: [
    {
      title: "这是待办",
      description: "3分钟前"
    },
    {
      title: "这是待办",
      description: "3分钟前"
    },
    {
      title: "这是待办",
      description: "5分钟前"
    }
  ]
};
@Component
export default class HeadMessage extends Vue {
  visible: boolean = false;
  loading: boolean = false;
  list = list;
  /** methods */
  handleChange(visible: boolean) {
    // console.log("visible:", visible);
  }
}
</script>
<style lang="stylus">
.head-message
  .ant-popover-inner-content
    padding 0
  .ant-tabs-bar
    padding 0 16px
  .ant-list-item
    padding 12px 16px
    transition all 0.3s
    cursor pointer
    &:hover
      background-color $hover-bgcolor
  .head-message-btn-container
    height 46px
    text-align center
    line-height @height
    border-top 1px solid #f0f0f0
    border-radius 0 0 2px 2px
    transition all .3s;
    .head-message-btn
      display inline-block
      width 50%
      cursor pointer
      transition all .3s
      user-select none
      background none
      border none
      outline none
      &:active
        background-color $hover-bgcolor
      &:last-of-type
        border-left 1px solid #f0f0f0
</style>

<!--  -->
<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header" style="top:0;left:0;">
      <TopHeader />
    </a-layout-header>
    <a-layout>
      <a-drawer
        v-if="isMobile"
        wrapClassName="layout-drawer"
        placement="left"
        :closable="false"
        @close="handleClose"
        :visible="collapse"
      >
        <Menu :collapse="collapse" theme="dark" />
      </a-drawer>
      <a-layout-sider
        v-else
        :collapsible="true"
        v-model="collapse"
        width="256px"
      >
        <Menu :collapse="collapse" theme="dark" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="padding: 0; height: auto; line-height: initial">
          <SecondHeader v-model="collapse" />
          <TabNav :tab-nav-list="tabList" />
        </a-layout-header>
        <a-layout-content>
          <transition
            name="page-slide-fade"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <!-- 组件类一定要写类名否则缓存失效 -->
            <keep-alive :include="cacheNameList">
              <router-view />
            </keep-alive>
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch, ProvideReactive } from "vue-property-decorator";
import Menu from "./menu";
import { delayExecute, urlJoin } from "@l/tools";
import SecondHeader from "./second-header";
import TopHeader from "./top-header";
import TabNav from "./tab-nav";
import { RouteGlobal } from "@/types/route";
import { DeviceMixin } from "@l/mixin";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
const App = namespace("app");
@Component({
  components: {
    Menu,
    SecondHeader,
    TopHeader,
    TabNav
  }
})
// @Component({ MenuList })
export default class Layout extends DeviceMixin {
  collapse: boolean = false;
  headerHeight: string = "45px";
  @App.State("tabList") tabList!: RouteGlobal.TabObjINF[]; // 标签页列表
  @App.State("cacheRoutesList") cacheRoutesList!: RouteGlobal.RouteINF[]; // 缓存路由列表
  @App.Getter("cacheNameList") cacheNameList!: string[]; // 缓存路由名字列表
  @App.Mutation("APP_SETTABLIST_MUTATE") APP_SETTABLIST_MUTATE!: (
    tabList: RouteGlobal.TabObjINF[]
  ) => void;
  @App.Mutation("APP_SETCACHEROUTES_MUTATE") APP_SETCACHEROUTES_MUTATE!: (
    cacheRoutesList: RouteGlobal.RouteINF[]
  ) => void;
  @ProvideReactive("breadcrumbList")
  breadcrumbList: RouteGlobal.BreadcrumbINF[] = [];
  get asideWidth() {
    return this.collapse ? "65px" : "256px";
  }
  get containerStyle() {
    const { headerHeight } = this;
    return {
      height: `calc(100vh - ${headerHeight})`
    };
  }
  @Watch("$route")
  watchRoute(to: RouteGlobal.RouteINF, from: RouteGlobal.RouteINF) {
    this.changeRouteDeal(to);
  }
  enter(el: Element, done: () => void) {
    // 去除动画的时候出现滚动条
    document.body.style.overflow = "hidden";
    delayExecute(500).then(() => {
      done();
    });
    // ...
    // done()
  }
  afterEnter(el: Element) {
    document.body.style.overflow = "";
    // ...
  }
  leave(el: Element, done: () => void) {
    document.body.style.overflow = "";
    done();
  }
  // 处理面包屑
  dealBreadCrumb(meta: RouteGlobal.BackMetaINF) {
    this.breadcrumbList = meta && meta.breadcrumb ? meta.breadcrumb : [];
  }
  // 处理缓存路由
  dealCacheRoutes(to: RouteGlobal.RouteINF) {
    let cacheRoutesList = [...this.cacheRoutesList];
    const notCache = to.meta && to.meta.notCache;
    if (!notCache && !cacheRoutesList.some(v => v.name === to.name)) {
      cacheRoutesList.push(to);
      this.APP_SETCACHEROUTES_MUTATE(cacheRoutesList);
    }
  }
  // 处理标签页
  dealTabNav(to: RouteGlobal.RouteINF) {
    let {
      name,
      fullPath,
      query,
      params,
      meta: {
        redirect,
        notClosed,
        hideTab,
        notCache,
        // notSingleTab,
        beforeClosedCallback,
        title
      }
    } = to;
    let paramsStr = urlJoin(params);
    let queryStr = urlJoin(query);
    title =
      title +
      (paramsStr ? `?params:${paramsStr}` : "") +
      (queryStr ? `?query:${queryStr}` : "");
    const tabList = [...this.tabList];
    let hasTab: boolean = false; // 是否有tab
    for (let i = 0; i < tabList.length; ++i) {
      let items = tabList[i];
      items.checked = false;
      // if (items.notSingleTab && items.key === fullPath) {
      //   items.checked = true;
      //   hasTab = true;
      //   continue;
      // }
      if (items.name === name) {
        items.title = title;
        items.checked = true;
        hasTab = true;
      }
    }
    // 不存在标签页并且是显示标签页的
    if (!hasTab && !hideTab) {
      tabList.push({
        name,
        key: fullPath,
        query,
        params,
        redirect,
        title,
        beforeClosedCallback,
        notClosed,
        checked: true,
        hideTab,
        notCache,
        // notSingleTab,
        createTime: +new Date()
      });
    }
    this.APP_SETTABLIST_MUTATE(tabList);
    // let newTabList = this.tabList.filter(v =>
    //   v.notSingleTab ? v : v.name === to.name
    // );
  }
  changeRouteDeal(to: RouteGlobal.RouteINF) {
    const { meta, name } = to;
    this.dealBreadCrumb(meta);
    this.dealTabNav(to);
    this.dealCacheRoutes(to);
  }
  // 手机端关闭menu抽屉触发
  handleClose() {
    this.collapse = false;
  }
  created() {
    this.changeRouteDeal(this.$route as RouteGlobal.RouteINF);
  }
}
</script>
<style lang="stylus">
.layout
  min-height 100vh
  overflow-x hidden
  .layout-header
    padding 0
  // .layout-aside // 覆盖样式（为了防止menu滚动导致超出指定宽度从而影响其他容器的大小）
  //   overflow hidden
  //   max-width size(256)
  .layout-main
    padding 0
    background-color #f0f2f5
</style>

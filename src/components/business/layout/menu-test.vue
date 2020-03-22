<!--  -->
<template>
  <div>
    <Logo />
    <a-menu
      mode="inline"
      :theme="theme"
      @OpenChange="onOpenChange"
      @Click="handleRouter"
      :defaultOpenKeys="defaultOpenKeys"
      :openKeys="openKeys"
      :inlineCollapsed="collapse"
      :defaultSelectedKeys="defaultSelectedKeys"
      :selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <a-icon type="mail" />
        Navigation One
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="calendar" />
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="appstore" /><span>Navigation Three</span></span
        >
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="setting" /><span>Navigation Four</span></span
        >
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { Component, Vue, Prop, Model } from "vue-property-decorator";
import Logo from "./logo";
// import SubMenu from "./sub-menu";
import { RouteGlobal } from "@/types/route";
import { arrageMenu } from "@l/manage";
import { CreateElement, VNode } from "vue/types/umd";
const App = namespace("app");
interface ToRoutes {
  name: string;
  meta: RouteGlobal.BackMetaINF;
}
@Component({
  components: {
    Logo
  }
})
export default class Menu extends Vue {
  @Prop({
    type: String
  })
  width?: string;
  @Prop({
    type: String,
    default: ""
  })
  themeColor!: string;
  @Prop({
    type: String,
    default: "light"
  })
  theme!: string;
  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  collapse!: boolean;
  // data
  openKeys: string[] = [];
  selectedKeys: string[] = [];
  defaultSelectedKeys: string[] = [];
  defaultOpenKeys: string[] = [];
  // state
  @App.State(state => state.menuList)
  public menuList!: RouteGlobal.ArrageMenuObjINF[];
  @App.State(state => state.frontRoutesList)
  public frontRoutesList!: {
    [key: string]: RouteGlobal.FrontStageRoutesObjINF;
  };
  @App.State(state => state.authorizationList)
  public authorizationList!: RouteGlobal.BackStageRoutesObjINF[];
  // methods
  onOpenChange(openKeys: string[]) {
    this.openKeys = openKeys;
  }
  handleRouter() {}
  private changeMenu(to: ToRoutes) {
    if (!to.meta.hideMenu) {
      this.defaultSelectedKeys = [to.name];
      const matched = to.meta.matched || [];
      const currOpenMenu = matched
        .filter(v => v.meta.type === "MENU" && !v.meta.hideMenu)
        .map(v => v.name);
      this.defaultOpenKeys = currOpenMenu;
    }
  }
  created() {
    const { meta, name } = this.$route;
    this.changeMenu({
      meta,
      name: name as string
    });
  }
}
</script>
<style lang="stylus" scoped></style>

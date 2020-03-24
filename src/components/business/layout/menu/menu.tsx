import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import SubMenu from "./sub-menu";
import { RouteGlobal } from "@/types/route";
import { arrageMenu } from "@l/manage";
import { CreateElement, VNode } from "vue/types/umd";
const App = namespace("app");
interface ToRoutes {
  name: string;
  meta: RouteGlobal.BackMetaINF;
}
@Component
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
  selectedKeys: string[] = [];
  openKeys: string[] = [];
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
  // watch
  @Watch("$route")
  watchRoute(to: RouteGlobal.RouteINF, from: RouteGlobal.RouteINF) {
    const { meta, name } = this.$route;
    this.changeMenu({
      meta,
      name: name as string
    });
  }
  // methods
  onOpenChange(openKeys: string[]) {
    this.openKeys = openKeys;
  }
  handleRouter({
    item,
    key,
    keyPath
  }: {
    item: VNode;
    key: string;
    keyPath: string;
  }) {
    this.selectedKeys = [key];
    this.$routerPush({ name: key });
  }
  handleSelected({
    item,
    key,
    keyPath
  }: {
    item: string;
    key: string;
    keyPath: string;
  }) {
    console.log("selected", item, key, keyPath);
    // this.$routerPush({ name: key });
  }
  private changeMenu(to: ToRoutes) {
    if (!to.meta.hideMenu) {
      // this.defaultSelectedKeys = [to.name];
      this.selectedKeys = [to.name];
      const matched = to.meta.matched || [];
      const currOpenMenu = matched
        .filter(v => v.meta.type === "MENU" && !v.meta.hideMenu)
        .map(v => v.name);
      this.openKeys = currOpenMenu;
      // this.defaultOpenKeys = currOpenMenu;
    }
  }
  created() {
    const { meta, name } = this.$route;
    this.changeMenu({
      meta,
      name: name as string
    });
  }
  render(h: CreateElement) {
    const {
      theme,
      onOpenChange,
      handleRouter,
      defaultOpenKeys,
      openKeys,
      defaultSelectedKeys,
      selectedKeys,
      themeColor,
      collapse,
      handleSelected,
      menuList
    } = this;
    const ResultJSXEle = menuList.map(v => SubMenu(h, v));
    return (
      <div>
        <a-menu
          mode="inline"
          theme={theme}
          onOpenChange={onOpenChange}
          onClick={handleRouter}
          onSelected={handleSelected}
          defaultOpenKeys={defaultOpenKeys}
          openKeys={openKeys}
          inlineCollapsed={false}
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={selectedKeys}
          class={["not-select", `menu-${themeColor}`]}
        >
          {ResultJSXEle}
        </a-menu>
      </div>
    );
  }
}

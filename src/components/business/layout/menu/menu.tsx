import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";
import Logo from "../logo";
import SubMenu from "./sub-menu";
import { RouteGlobal } from "@/types/route";
import { arrageMenu } from "@l/manage";
import { CreateElement, VNode } from 'vue/types/umd';
const App = namespace("app");
interface ToRoutes {
  name: string;
  meta: RouteGlobal.BackMetaINF;
}
@Component({
  components: {
    Logo,
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
  collapsible!: boolean;
  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  // data
  collapsed!: boolean;
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
  onOpenChange() {}
  handleRouter() {}
  private changeMenu(to: ToRoutes) {
    if (!to.meta.hideMenu) {
      this.defaultSelectedKeys = [to.name];
      const matched = to.meta.matched || [];
      const currOpenMenu = matched
        .filter(v => v.meta.type === "MENU" && !v.meta.hideMenu)
        .map(v => v.name);
      this.defaultOpenKeys = currOpenMenu;
      console.log(this.menuList);
    }
  }
  analysisSubMenu(h: CreateElement, subMenuInfo: RouteGlobal.ArrageMenuObjINF) {
    let subMenu: VNode
    if (subMenuInfo.children) {
      subMenu = SubMenu(h, subMenuInfo)
    } else {
      subMenu = (<a-menu-item key={subMenuInfo.name}>
                  <a-icon type={subMenuInfo.icon} /><span>{subMenuInfo.title}</span>
                </a-menu-item>)
    }
    return subMenu
  }
  analysisMenu(h: CreateElement,menuList: RouteGlobal.ArrageMenuObjINF[]) {
    let m: VNode[] = []
    menuList.forEach(v => {
      m.push(this.analysisSubMenu(h, v))
    })
return m.map(item => {
  return (
    <template>
    {v.icon}
    </template>
  )
})
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
  themeColor
} = this
    return (
  <div>
  <Logo />
  <a-menu
    mode="inline"
    theme={theme}
    onOpenChange={onOpenChange}
    onClick={handleRouter}
    defaultOpenKeys={defaultOpenKeys}
    openKeys={openKeys}
    defaultSelectedKeys={defaultSelectedKeys}
    selectedKeys={selectedKeys}
    class={['not-select', `menu-${themeColor}`]}
  >
    <template v-for="items of menuList">
    {
      items.children ? (
        <SubMenu
        :sub-menu-info="items"
        :key="items.name"
      />
      ) : (
        
      )
    }
      
      
    </template>
  </a-menu>
</div>
    )
  }
}

<!-- 顶部头 -->
<template>
  <div class="top-header flex-row-between-center">
    <Logo />
    <div class="flex-row-end-stretch">
      <FullScreen />
      <ErrorStore v-if="navList.includes('ErrorLog')" />
      <HeadMessage />
      <HeadUser />
    </div>
  </div>
</template>

<script lang="ts">
import { namespace } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import HeadUser from "./head-user.vue";
import ErrorStore from "./error-store.vue";
import FullScreen from "./full-screen.vue";
import HeadMessage from "./head-message.vue";
import Logo from "../logo";
import { RouteGlobal } from "@/types/route";
const App = namespace("app");
@Component({
  components: {
    Logo,
    HeadUser,
    ErrorStore,
    FullScreen,
    HeadMessage
  }
})
export default class TopHeader extends Vue {
  @App.State("authRoutesList")
  authRoutesList!: RouteGlobal.FrontStageRoutesObjINF[];
  get navList() {
    return this.authRoutesList
      .filter(v => {
        return v.meta && v.meta.showNav;
      })
      .map(v => v.name);
  }
  /**lifecle */
  mounted() {}
}
</script>
<style lang="stylus">
.top-header
  height 100%
  padding 0 15px
  background-color #002040
</style>

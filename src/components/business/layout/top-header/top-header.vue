<!-- 顶部头 -->
<template>
  <div class="top-header flex-row-between-center">
    <Logo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../logo";
@Component({
  components: {
    Logo
  }
})
export default class TopHeader extends Vue {}
</script>
<style lang="stylus">
.top-header
  height 100%
  background-color #002040
</style>

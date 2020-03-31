<!-- 个人信息 -->
<template>
  <ContainerFluid class="personal-information" padding full :loading="loading">
    <div class="bgcolor-white flex-row-start height-full">
      <div class="personal-information-left-mode height-full">
        <a-menu mode="inline" class="height-full">
          <a-menu-item key="1">
            <span>基础信息</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span>安全设置</span>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="flex-1">
        <a-card :bordered="false">
          <h4 class="size-20">基础信息</h4>
          <div class="flex-row-between-start">
            <a-form-model
              layout="vertical"
              :model="form"
              v-bind="formItemLayout"
            >
              <a-form-model-item label="Field A">
                <a-input
                  v-model="form.fieldA"
                  placeholder="input placeholder"
                />
              </a-form-model-item>
            </a-form-model>
            <div></div>
          </div>
        </a-card>
      </div>
    </div>
  </ContainerFluid>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { personalInformationColumn } from "@/views/setting/tables";
interface SearchFormINF {
  name: string;
  date: string;
}
@Component
export default class PersonalCenter extends Vue {
  loading: boolean = true; // 容器加载中
  searchForm: SearchFormINF = {
    name: "",
    date: ""
  };
  col = {
    xs: { span: 23, offset: 1 },
    sm: { span: 8, offset: 1 },
    md: { span: 6, offset: 1 },
    lg: { span: 5, offset: 1 },
    xl: { span: 5, offset: 1 }
  };
  dateCol = {
    xs: { span: 23, offset: 1 },
    sm: { span: 10, offset: 1 },
    md: { span: 10, offset: 1 },
    lg: { span: 8, offset: 1 },
    xl: { span: 10, offset: 1 }
  };
  tableData = Array(60)
    .fill({
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    })
    .map((v, i) => ({ ...v, key: i, index: i + 1 }));
  columns = personalInformationColumn;
  // methods
  handleChangeDate() {}
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>
<style lang="stylus" scoped>
.personal-information
  .personal-information-left-mode
    padding-top 24px
    box-sizing border-box
    width 224px
</style>

<!-- 个人信息 -->
<template>
  <ContainerFluid
    class="bgcolor-white personal-information"
    full
    :loading="loading"
  >
    <template #header>
      <el-form ref="form" class="form" :model="searchForm" size="medium">
        <el-row>
          <el-col v-bind="col">
            <el-form-item>
              <el-input
                class="input"
                placeholder="请输入搜索内容"
                prefix-icon="el-icon-search"
                v-model="searchForm.name"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col v-bind="dateCol">
            <el-form-item>
              <el-date-picker
                v-model="searchForm.date"
                type="daterange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col v-bind="col">
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
    <div class="padding-0-20">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="index" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </ContainerFluid>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface SearchFormINF {
  name: string;
  date: string;
}
@Component
export default class PersonalInformation extends Vue {
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
    .map((v, i) => ({ ...v, index: i + 1 }));
  mounted() {
    setTimeout(() => (this.loading = false), 1000);
  }
}
</script>
<style lang="stylus" scoped>
.personal-information
  .form
    padding-top 10px
    .input
      max-width 350px
</style>

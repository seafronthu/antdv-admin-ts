<!-- 错误日志 -->

<template>
  <ContainerFluid class="bg-color-f role-list">
    <a-card :bordered="false">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :md="8" :sm="24">
            <a-form-item label="角色ID">
              <a-input placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="账号">
              <a-input placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item>
              <a-button type="primary">查询</a-button>
              <a-button style="margin-left: 8px">重置</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <a-table
        :locale="locale"
        :columns="columns"
        :dataSource="tableData"
        @change="handleTableChange"
        class="role-list-table"
      >
        <template #headimgTitle>
          <span><a-icon type="smile-o" /> 用户头像</span>
        </template>
        <template #headimg="url">
          <img :src="url" />
        </template>
      </a-table>
    </a-card>
  </ContainerFluid>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ErrorRecordINF } from "@s/modules/app";
import { namespace } from "vuex-class";
interface FieldsINF {
  id: string;
  name: string;
  description: string;
  createRoleNum: string;
  createUserNum: string;
}
const App = namespace("app");
const columns = [
  { title: "序号", dataIndex: "number" },
  { title: "用户ID", dataIndex: "userId" },
  {
    // title: "用户头像",
    dataIndex: "headimg",
    key: "headimg",
    slots: { title: "headimgTitle" },
    scopedSlots: { customRender: "headimg" }
  },
  { title: "用户名", dataIndex: "userName" },
  {
    title: "类型",
    dataIndex: "type",
    // filterMultiple: true,
    filters: [
      { text: "script", value: "script", checked: true },
      { text: "ajax", value: "ajax" }
    ],
    onFilter: (value: string, record: { name: string[] }) => {
      console.log(value, record);
      return record.name.indexOf(value) === 0;
    }
  },
  { title: "编码", dataIndex: "code" },
  { title: "信息", dataIndex: "msg" },
  { title: "URL", dataIndex: "url" },
  { title: "时间", dataIndex: "time" }
];

@Component
export default class ErrorLog extends Vue {
  columns = columns;
  locale = { filterConfirm: "确定", filterReset: "重置" };
  visible: boolean = false;
  fields: FieldsINF = {
    id: "",
    name: "",
    description: "",
    createRoleNum: "",
    createUserNum: ""
  };
  @App.State("errorLogList") errorLogList!: ErrorRecordINF[];
  get tableData() {
    return this.errorLogList.map((v, i) => ({ ...v, key: i }));
  }
  /** methods */
  handleAdd() {
    this.visible = true;
  }
  handleTableChange(
    pagination: { current: number; pageSize: number },
    filters: string[],
    sorter: { key: string },
    { currentDataSource }: { currentDataSource: any[] }
  ) {
    console.log(pagination, filters, sorter, currentDataSource);
  }
  // handleExpanded(expanded: string, record: { user: string; id: string }) {}
  handleEdit(record: string) {
    console.log(record);
  }
}
</script>
<style lang="stylus">
.role-list
  .ant-form-item
    display flex
    margin-bottom 12px
    margin-right 0px
    .ant-form-item-label
      width auto
      padding 0 8px 0 0
      line-height 39.9999px
    .ant-form-item-control-wrapper
      flex 1 1
  .role-list-table
    .ant-table-content
      overflow-y auto
      .ant-table-body
        min-width 800px
</style>

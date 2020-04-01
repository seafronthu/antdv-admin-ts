<!-- 基础信息 -->
<template>
  <a-card :bordered="false" class="basic-info">
    <h4 class="size-20">基础信息</h4>
    <a-row type="flex" justify="space-between">
      <a-col :xs="24" :sm="14" :ms="18">
        <a-form-model layout="vertical" :model="form">
          <a-form-model-item label="昵称">
            <a-input v-model="form.nickName" placeholder="请输入昵称" />
          </a-form-model-item>
          <a-form-model-item label="个人简介">
            <a-textarea
              v-model="form.description"
              placeholder="请输入简介"
              :rows="4"
            />
          </a-form-model-item>
          <a-form-model-item label="电子邮件">
            <a-input v-model="form.email" placeholder="请输入电子邮件" />
          </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :order="isXS ? 0 : 1" :sm="8" :xs="24" :ms="4">
        <a-upload
          name="headimg"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :beforeUpload="handleBeforeUpload"
          @change="handleUploadChange"
        >
          <img v-if="headimg" :src="headimg" alt="avatar" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-col>
    </a-row>
    <div>
      <a-button type="primary" size="large">提交</a-button>
    </div>
  </a-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const App = namespace("app");
function getBase64(
  img: Blob,
  callback: (result: string | ArrayBuffer | null) => void
) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
interface SearchFormINF {
  account: string;
  sex: 0 | 1 | 2;
  phone?: number;
  email: string;
  nickName: string;
  realName: string;
  description: string;
}
@Component
export default class BasicInfo extends Vue {
  loading: boolean = false;
  headimg: null | ArrayBuffer | string = "";
  form: SearchFormINF = {
    account: "",
    sex: 0,
    nickName: "",
    realName: "",
    description: "",
    phone: undefined,
    email: ""
  };
  @App.Getter("isXS") isXS!: boolean;
  /** methods */
  handleBeforeUpload(file: File) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      this.$message.error("You can only upload JPG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.$message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  handleUploadChange(info: {
    file: { status: "uploading" | "done" | "error"; originFileObj: Blob };
    fileList: any;
    event: Event;
  }) {
    if (info.file.status === "uploading") {
      this.loading = true;
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, headimg => {
        this.headimg = headimg;
        this.loading = false;
      });
    }
  }
}
</script>
<style lang="stylus">
.basic-info
  .basic-info-update
    order: 2
</style>

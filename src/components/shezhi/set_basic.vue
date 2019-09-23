<template>
  <div class="set_basic">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>设置</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本设置</span>
      </div>
      <div class="centen">
        <!-- 1 -->
        <div class="updata">
          <div slot="header" class="clear">
            <span>
              商城logo
              <i class="el-icon-right"></i>
            </span>
          </div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :before-upload="beforeAvatarUpload"
            :on-remove="handleRemove"
            :file-list="fileList"
            :on-exceed="handle"
            :limit="1"
            list-type="picture-card"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">（建议图片尺寸 2:1）图片最大张数为 1。</div>
          </el-upload>
          <!-- 2 -->
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" height="700px" :src="dialogImageUrl" alt />
          </el-dialog>
          <div slot="header" class="clear">
            <span>
              商城二维码
              <i class="el-icon-right"></i>
            </span>
          </div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-upload="beforeAvatarUpload"
            :file-list="fileList"
            :limit="1"
            :on-exceed="handle"
            list-type="picture-card"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">（建议图片尺寸 1:1）图片最大张数为 1。</div>
          </el-upload>
        </div>
        <!-- 3 -->
        <el-form>
          <el-form-item label="line-ID：">
            <el-input v-model="input" clearable style="width:23.4%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handle(files, fileList) {
      // console.log(files,fileList);
      alert("图片上传数量已上限！");
    }
  }
};
</script>
<style scoped>
.set_basic {
  padding: 0 20px;
}
.user-title {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  margin: 10px 10px;
}
.user-title span {
  display: inline-block;
}
.user-title .bars {
  border-left: 5px solid #409eff;
  padding-left: 15px;
  line-height: 20px;
  font-size: 16px;
}
.user-title .bars span {
  color: #409eff;
}
.box-card {
  margin-top: 10px;
  min-height: 550px;
}
.updata {
  display: flex;
  width: 70%;
  box-sizing: border-box;
  padding: 50px 50px;
  justify-content: space-evenly;
}
.updata .clear span {
  display: inline-block;
  padding: 20px 0;
  text-align: center;
  line-height: 100px;
  font-size: 18px;
}
.centen form {
  padding: 0 10.2%;
}
.centen form button {
  margin-left: 72px;
}
</style>

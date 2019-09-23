<template>
  <div class="list_details">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>商品分类</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加商品信息</span>
      </div>
      <el-form :model="ruleForm">
        <el-form-item label="排序：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品名称：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品副名称：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品分类：" :label-width="formLabelWidth">
          <el-select v-model="ruleForm.name" placeholder="请选择状态">
            <el-option label="默认：无" value="0"></el-option>
            <el-option label="王小虎" value="王小虎"></el-option>
            <el-option label="王虎" value="王虎"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌：" :label-width="formLabelWidth">
          <el-select v-model="ruleForm.name" placeholder="请选择状态">
            <el-option label="默认：无" value="0"></el-option>
            <el-option label="王小虎" value="王小虎"></el-option>
            <el-option label="王虎" value="王虎"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品市场价：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品原价：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品库存：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品组图：" :label-width="formLabelWidth">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            multiple
            :limit="9"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-exceed="handle"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="是否显示：" :label-width="formLabelWidth">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品参数：" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button type="primary" size="small">提交</el-button>
          <el-button @click="cancel" size="small">返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {},
      dialogImageUrl: "",
      dialogVisible: false,
      formLabelWidth: "100px"
    };
  },
  created() {
    let query = window.location.href.split("?");
    if (!query[1]) window.location.href = "/#/product_list";
    else {
      query = query[1];
      let arr = [];
      let vars = query.split("&");
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == "sid") {
          arr["sid"] = pair[1];
        }
      }
      if (arr["sid"] > 0) {
        // this.$axios
        //   .post("news", { id: sessionStorage.getItem("loginid") })
        //   .then(res => {
        //     this.tableData = res.data.data;
        //     this.news_id = arr["sid"];
        //   });
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handle(files, fileList) {
      // console.log(files,fileList);
      alert("图片数量已上限！");
    },
    //返回
    cancel(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.list_details {
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
.el-form {
  padding: 0 20%;
}
.el-form .el-input {
  width: 50%;
}
</style>

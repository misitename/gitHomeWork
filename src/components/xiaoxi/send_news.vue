<template>
  <div class="send_news">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>发送消息</span>
      </span>
    </div>
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入内容" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="发送的对象" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="所有商户" value="1"></el-radio>
            <el-radio label="商户组" value="2"></el-radio>
            <el-radio label="单个商户" value="3"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="选择商户" v-if="ruleForm.resource == '所有商户'? true:false" prop="region">
          <el-select
            v-model="ruleForm.region1"
            placeholder="请选择商户版本"
            v-if="ruleForm.resource == '所有商户'? true:false"
          >
            <el-option label="普通" value="0"></el-option>
            <el-option label="定制" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商户组" v-if="ruleForm.resource == '商户组'? true:false" prop="region">
          <el-select
            v-model="ruleForm.region2"
            placeholder="请选择商户组"
            v-if="ruleForm.resource == '商户组'? true:false"
          >
            <el-option
              v-for="(item,index) in ruleForm.webtype"
              :key="index"
              :value="item.webtype_id"
              :label="item.title"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="输入商户账号" v-if="ruleForm.resource == '单个商户'? true:false" prop="region">
          <el-input
            placeholder="请输入商户账号"
            v-model="ruleForm.region3"
            v-if="ruleForm.resource == '单个商户'? true:false"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" size="small">发送</el-button>
          <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        webtype: [],
        name: "",
        region1: "",
        region2: "",
        region3: "",
        delivery: false,
        resource: "所有商户",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入标题名称", trigger: "blur" }],
        region1: [{ required: true, message: "请选择商户", trigger: "change" }],
        region2: [
          { required: true, message: "请选择商户组", trigger: "change" }
        ],
        region3: [
          { required: true, message: "请输入商户账号", trigger: "change" }
        ],
        resource: [
          { required: true, message: "请选择发送对象", trigger: "change" }
        ],
        desc: [{ required: true, message: "请输入描述内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var strjson;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.resource == "所有商户") {
            strjson = {
              type: "add",
              status: "1",
              vtype: this.ruleForm.region1,
              title: this.ruleForm.name,
              content: this.ruleForm.desc
            };
          }
          if (this.ruleForm.resource == "商户组") {
            strjson = {
              type: "add",
              status: "2",
              webtype_id: this.ruleForm.region2,
              title: this.ruleForm.name,
              content: this.ruleForm.desc
            };
          }
          if (this.ruleForm.resource == "单个商户") {
            strjson = {
              type: "add",
              status: "3",
              website: this.ruleForm.region3,
              title: this.ruleForm.name,
              content: this.ruleForm.desc
            };
          }
          // this.$axios
          // .post("api/news.php", qs.stringify(strjson))
          // .then(res => {
          //   if(res.data == ""){
          //   this.$message({
          //   showClose: true,
          //   message: '发送失败！',
          //   type: 'warning'
          // });
          //   }else{
          //     this.$message({
          //     type: 'success',
          //     showClose: true,
          //     message: '发送成功!'
          //   });
          //   this.resetForm('ruleForm')
          //   }
          // })
        } else {
          this.$message({
            showClose: true,
            message: "发送失败！",
            type: "error"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.send_news {
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
  padding: 2% 25%;
  min-height: 200px;
}
</style>
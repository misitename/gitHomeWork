<template>
  <div class="userlist">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>用户列表</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <div class="card-title">
          <el-select v-model="search" placeholder="用户账号筛选">
            <el-option label="用户账号" value="1"></el-option>
            <el-option label="代理网址" value="2"></el-option>
          </el-select>
          <el-input placeholder="请输入要查询的网站地址" v-model="search">
            <template slot="append">搜索</template>
          </el-input>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="date" label="账号/邮箱"></el-table-column>
        <el-table-column prop="name" label="用户昵称"></el-table-column>
        <el-table-column prop="address" label="用户组"></el-table-column>
        <el-table-column prop="date" label="用户头像"></el-table-column>
        <el-table-column prop="name" label="注册时间"></el-table-column>
        <el-table-column label="状态">
          <el-button type="success" size="mini">白名单</el-button>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" circle @click.native.prevent="editRow(scope.$index, tableData)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        style="float:right;margin:20px 0 50px 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </el-card>
    <!-- 编辑弹窗 -->
      <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible" width="38%">
        <el-form :model="ruleForm">
          <el-form-item label="头像" :label-width="formLabelWidth">
            <!-- :src="circleUrl" -->
            <el-avatar :size="50" ></el-avatar>
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="账号" :label-width="formLabelWidth">
            <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
            <!-- <span>{{}}</span> -->
          </el-form-item>
          <el-form-item label="用户组" :label-width="formLabelWidth">
            <el-select v-model="ruleForm.name" placeholder="请选择状态">
              <el-option label="王小虎" value="王小虎"></el-option>
              <el-option label="王虎" value="王虎"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="黑名单" :label-width="formLabelWidth">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
            <p v-if="ruleForm.resource=='是'">设置黑名单后，此会员无法访问商城</p>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth">
            <el-button @click="cancel" size="small">取 消</el-button>
            <el-button type="primary" size="small">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        date: "",
        name: "",
        address: "",
        desc:"",
        resource: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      search: "",
      currentPage: 1,
      pagesize: 5,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    // 分页
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    //编辑弹窗事件
    editRow(index, rows) {
      this.dialogFormVisible = true;
      this.ruleForm.date = rows[index].date;
      this.ruleForm.name = rows[index].name;
      this.ruleForm.address = rows[index].address;
    },
      //弹框取消
    cancel() {
      this.dialogFormVisible = false;
      this.ruleForm.date = "";
      this.ruleForm.name = "";
      this.ruleForm.address = "";
      this.ruleForm.resource = "";
      this.ruleForm.desc = ""
    }
  }
};
</script>
<style scoped>
.userlist {
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
.card-title {
  display: flex;
  justify-content: right;
  height: 30px;
  overflow: hidden;
  padding-left: 65%;
}
.card-title .el-select {
  flex: 0.8;
  margin-right: 10px;
}
.card-title .el-input {
  flex: 2.5;
}
.el-dialog p{font-size: 12px;color: red;height: 20px;line-height: 20px;}
</style>

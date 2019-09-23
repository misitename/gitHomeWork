<template>
  <div class="user_group">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>用户组</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="primary" class="el-icon-plus" size="mini" @click="addRow">添加标签组</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="标签名称"></el-table-column>
        <el-table-column prop="date" label="会员数"></el-table-column>
        <el-table-column prop="name" label="标签描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" circle @click.native.prevent="editRow(scope.$index, tableData)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" circle @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>
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
    <el-dialog :title="title" :visible.sync="dialogFormVisible" width="38%">
      <el-form :model="ruleForm">
        <el-form-item label="标签名称" :label-width="formLabelWidth">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="ruleForm.address" :rows="5"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button size="small" type="primary">确 定</el-button>
          <el-button size="small" @click="cancel">关 闭</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:"",
      ruleForm: {
        name: "",
        address: ""
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
      this.ruleForm.name = rows[index].name;
      this.ruleForm.address = rows[index].address;
      this.title = "标签组信息修改"
    },
    //弹框取消
    cancel() {
      this.dialogFormVisible = false;
      this.ruleForm.name = "";
      this.ruleForm.address = "";
    },
    //移除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
     //添加
    addRow() {
      this.dialogFormVisible = true;
      this.ruleForm.name = "";
      this.ruleForm.address = "";
      this.title = "添加标签组";
    },
  }
};
</script>
<style scoped>
.user_group {
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
</style>

<template>
  <div class="agency_list">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>代理列表</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>代理列表</span>
        <div class="card-title">
          <div class="card-bar">
            <ul>
              <li
                v-for="(item,id) in barlist"
                :key="id"
                @click="active(item.id)"
                :class="{active:show==item.id}"
              >{{item.title}}</li>
            </ul>
          </div>
          <el-input placeholder="请输入要查询的网站地址" v-model="search">
            <template slot="append">搜索</template>
          </el-input>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="序号"></el-table-column>
        <el-table-column prop="name" label="代理商所属网址"></el-table-column>
        <el-table-column prop="address" label="账号"></el-table-column>
        <el-table-column prop="date" label="状态"></el-table-column>
        <el-table-column label="查看">
          <el-button type="success" size="mini">查看订单</el-button>
          <el-button type="warning" size="mini">查看用户</el-button>
        </el-table-column>
        <el-table-column label="操作" width="320">
          <template slot-scope="scope">
          <el-button type="primary" size="mini" @click.native.prevent="editRow(scope.$index, tableData)">编辑</el-button>
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
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" width="35%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="网址" prop="date">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="date">
          <el-input v-model="ruleForm.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="后台账号" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="address">
          <el-input v-model="ruleForm.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="small">提交</el-button>
          <el-button type="info" @click="resetForm('ruleForm')" size="small">取消</el-button>
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
        address: ""
      },
      barlist: [
        { id: 1, title: "全部代理" },
        { id: 2, title: "审核中" },
        { id: 3, title: "暂停" },
        { id: 4, title: "已删除" }
      ],
      show: "1",
      search: "",
      dialogFormVisible: false,
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
          name: "王小虎2",
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
    //切换导航
    active(val) {
      this.show = val;
    },
    //编辑按钮
     editRow(index, rows) {
      this.dialogFormVisible = true;
      this.ruleForm.date = rows[index].date;
      this.ruleForm.name = rows[index].name;
      this.ruleForm.address = rows[index].address;
     },
    //编辑取消
    resetForm(ruleForm) {
      this.dialogFormVisible = false;
      this.$refs[ruleForm].resetFields();
    }
  }
};
</script>
<style scoped>
.agency_list {
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
  height: 60px;
  overflow: hidden;
}
.card-title .card-bar {
  flex: 5;
}
.card-title .card-bar ul {
  margin-top: 20px;
  display: flex;
}
.card-title .card-bar li {
  line-height: 25px;
  font-size: 13px;
  margin: 7.5px 0;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: pointer;
}
.card-title .card-bar li.active {
  background: #67c23a;
  color: #fff;
  border: none;
}
.card-title .el-input {
  flex: 1.8;
  margin-top: 30px;
}
</style>

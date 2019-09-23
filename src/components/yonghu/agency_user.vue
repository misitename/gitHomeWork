<template>
  <div class="agency_user">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>代理用户</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>代理用户</span>
        <div class="card-title">
          <el-select v-model="search" placeholder="请选择版本">
            <el-option label="用户账号" value="1"></el-option>
            <el-option label="代理网址" value="2"></el-option>
          </el-select>
          <el-input placeholder="请输入要查询的网站地址" v-model="search">
            <template slot="append">搜索</template>
          </el-input>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="序号"></el-table-column>
        <el-table-column prop="name" label="网址"></el-table-column>
        <el-table-column prop="address" label="头像"></el-table-column>
        <el-table-column prop="date" label="账号"></el-table-column>
        <el-table-column prop="name" label="昵称"></el-table-column>
        <el-table-column prop="address" label="用户组"></el-table-column>
        <el-table-column prop="address" label="注册时间"></el-table-column>
        <el-table-column label="状态">
          <el-button type="success" size="mini">白名单</el-button>
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
        :total="tableData.length"> 
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      currentPage:1, 
      pagesize:5,
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
    }
  },
  methods:{
    // 分页
    handleSizeChange: function (size) {
        this.pagesize = size;
      },
    handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      }
  }
}
</script>
<style scoped>
.agency_user {
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
  padding-left: 70%
}
.card-title .el-select{flex: .8;margin-right: 10px}
.card-title .el-input{flex: 2.2;}
</style>

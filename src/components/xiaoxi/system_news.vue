<template>
  <div class="system_news">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>系统消息</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="发送时间"></el-table-column>
        <el-table-column prop="name" label="消息标题"></el-table-column>
        <el-table-column prop="address" label="消息内容"></el-table-column>
        <el-table-column prop="date" label="状态"></el-table-column>
        <el-table-column label="操作">
          <!-- @click.native.prevent="editRow(scope.row.user_group_id,scope.row.store.store_id)" -->
          <!-- slot-scope="scope" -->
           <template>
            <el-button
              type="primary" icon="el-icon-edit" size="mini" circle
            ></el-button>
            <el-button
              type="danger" icon="el-icon-delete" size="mini" circle
            ></el-button>
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
.system_news {
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

<template>
  <div class="newslist">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>消息列表</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="success" class="el-icon-plus" size="mini" @click="setnews">发送消息</el-button>
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
        <el-table-column prop="name" label="代理商所属网址"></el-table-column>
        <el-table-column prop="address" label="发送时间"></el-table-column>
        <el-table-column prop="date" label="消息标题"></el-table-column>
        <el-table-column prop="name" label="消息内容"></el-table-column>
        <el-table-column prop="address" label="用户账号"></el-table-column>
        <el-table-column label="操作" width="320">
          <el-button type="primary" size="mini">查看详情</el-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      barlist: [
        { id: 1, title: "用户消息列表" },
        { id: 2, title: "代理商订单消息" }
      ],
      show: "1",
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
    //切换导航
    active(val) {
      this.show = val;
    },
    //跳转发送消息
    setnews() {
      this.$router.push("/send_news");
    }
  }
};
</script>
<style scoped>
.newslist {
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
.card-title .el-select {
  flex: 0.8;
  margin-right: 10px;
  margin-top: 30px;
}
.card-title .el-input {
  flex: 2.2;
  margin-top: 30px;
}
</style>

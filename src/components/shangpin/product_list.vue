<template>
  <div class="product_list">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>商品列表</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="primary" class="el-icon-plus" size="mini">添加</el-button>
        <el-button type="info" size="mini" class="el-icon-close">下架</el-button>
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
          <el-select v-model="search" placeholder="属性筛选">
            <el-option label="用户账号" value="1"></el-option>
            <el-option label="代理网址" value="2"></el-option>
          </el-select>
          <el-select v-model="search" placeholder="分类筛选">
            <el-option label="用户账号" value="1"></el-option>
            <el-option label="代理网址" value="2"></el-option>
          </el-select>
          <el-input placeholder="请输入要查询的名称" v-model="search">
            <template slot="append">搜索</template>
          </el-input>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="排序"></el-table-column>
        <el-table-column prop="date" label="商品图片"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="address" label="价格"></el-table-column>
        <el-table-column prop="date" label="库存"></el-table-column>
        <el-table-column prop="name" label="销量"></el-table-column>
        <el-table-column prop="address" label="状态"></el-table-column>
        <el-table-column prop="address" label="属性"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" circle @click.native.prevent="editRow(scope.row.name)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" circle ></el-button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      Selection: [],
      barlist: [
        { id: 1, title: "出售中" },
        { id: 2, title: "已售罄" },
        { id: 3, title: "已下架" },
        { id: 4, title: "已删除" }
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
    // 查看详情
    editRow(id) {
      this.$router.push({path: "/list_details?sid="+id})
    },
    //获取勾选的
    handleSelectionChange(val) {
      var str = "";
      for (var i = 0; i < val.length; i++) {
        str += val[i].store_id + ",";
      }
      this.Selection = str;
    }
  }
};
</script>
<style scoped>
.product_list {
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
  flex: 0.7;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 30px 10px 0 0;
}
.card-title .el-input {
  flex: 2.2;
  margin-top: 30px;
}
</style>

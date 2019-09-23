<template>
  <div class="order_details">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>商品</span>
      </span>
    </div>
    <el-card class="box-card">
      <el-steps :active="2" align-center>
        <el-step title="2019-09-03  12：00"></el-step>
        <el-step title="确认收货"></el-step>
        <el-step title="完成交易"></el-step>
      </el-steps>
    </el-card>
    <el-card class="box-card">
      <span>订单信息</span>
      <div class="centen">
        <div class="centen_left">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <span>{{item.title}}</span>
              <span>{{item.centen}}</span>
            </li>
          </ul>
        </div>
        <div class="centen_right">
          <el-form>
            <el-form-item label="备注：" style="width:50%">
              <el-input type="textarea" :rows="4"></el-input>
            </el-form-item>
            <el-button type="success" size="mini">保存</el-button>
          </el-form>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <span>商品信息</span>
      <div class="centen">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="商品名称"></el-table-column>
          <el-table-column prop="name" label="规格"></el-table-column>
          <el-table-column prop="address" label="单价"></el-table-column>
          <el-table-column prop="name" label="数量"></el-table-column>
          <el-table-column prop="address" label="小计"></el-table-column>
        </el-table>
      </div>
      <p class="total">
        商品总计：
        <span>￥{{tableData[0].name}}</span>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "粉色",
          address: "1300"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      list: [
        { title: "所属网站：", centen: "http://www.ollkk.com" },
        { title: "订单状态：", centen: "待发货" },
        { title: "订单号：", centen: "QK1415212a515" },
        { title: "买家：", centen: "梅干菜肉饼" },
        {
          title: "收货人：",
          centen: "真皮沙发，广州增城新塘智合大厦，1564645646"
        }
      ]
    };
  }
};
</script>
<style scoped>
.order_details {
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
  min-height: 200px;
}

.box-card:last-child{margin-bottom: 50px}
.centen {
  margin: 20px 0 0 0;
  display: flex;
  box-sizing: border-box;
  padding: 20px 0 0 0;
  border: 1px solid #ddd;
}
.total {
  box-sizing: border-box;
  line-height: 30px;
  text-align: right;
  border: 1px solid #ddd;
  border-top: none;
  padding: 5px 0;
  padding-right: 4%;
  margin-bottom: 10px
}
.centen .centen_left {
  font-size: 15px;
  flex: 1;
}
.centen .centen_left li span:first-child {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  color: #999;
  padding: 10px 20px;
}
.centen .centen_left li:nth-child(2) span:last-child {
  color: #ff0000;
  font-weight: bold;
  font-size: 18px;
}
.centen .centen_right {
  flex: 1;
  box-sizing: border-box;
}
</style>

<template>
  <div class="order_details">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>首页</span>
      </span>
    </div>
    <div class="card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>商城信息</span>
        </div>
        <div class="card-title">
          <ul>
            <li>
              商城名称：
              <span>ccz的商城</span>
            </li>
            <li>
              商城介绍：
              <span>打破传统电商，新型全球贸易</span>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card-title1">
          <ul>
            <li v-for="(item,index) in squareUrl" :key="index">
              <el-avatar shape="square" :size="60" :src="item.url"></el-avatar>
              <div class="logo">
                <span>{{item.num}}</span>
                <span>{{item.title}}</span>
              </div>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
    <el-card class="box-card">
    <div class="map">
    <ve-line :data="chartData" :settings="chartSettings" style="width:30%"></ve-line>
    <ve-histogram :data="chartData" :settings="chartSettings" style="width:30%"></ve-histogram>
    <ve-pie :data="chartData" :settings="chartSettings" style="width:30%"></ve-pie>
    </div>
     </el-card>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
        axisSite: { right: ['下单率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      }
    return {
      squareUrl: [
        {url: require("../assets/1.png"), num:1, title:'已售罄商品'},
        {url: require("../assets/2.png"), num:5, title:'待发货订单'},
        {url: require("../assets/3.png"), num:12, title:'待收货订单'},
        {url: require("../assets/4.png"), num:22, title:'已完成'}
      ],
      list: [
        { title: "所属网站：", centen: "123131313123" },
        { title: "订单状态：", centen: "54245154454" },
        { title: "订单号：", centen: "1415212a515" },
        { title: "买家：", centen: "45221445" },
        { title: "收货人：", centen: "156161616" }
      ],
       chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
    }
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
  min-height: 250px;
}
.centen {
  height: 250px;
  margin: 20px 0;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ddd;
}
.centen .centen_left {
  flex: 1;
}
.centen .centen_left li span:nth-child(1) {
  display: inline-block;
  width: 100px;
  padding: 10px 20px;
}
.centen .centen_right {
  flex: 1;
  box-sizing: border-box;
}
.card {
  display: flex;
  justify-content: space-between;
}
.card div:first-child {
  flex: 0.31;
}
.card div:last-child {
  flex: 0.68;
}
.card-title ul {
  display: flex;
  flex-direction: column;
}
.card-title ul li {
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
}
.card-title span {
  font-size: 14px;
  color: #999;
}
.card-title1 ul {
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 20px 0
}
.card-title1 ul li {
  flex: 1;
  height: 80px;
  line-height: 80px;
  font-size: 15px;
  border-left: 1px solid #ddd;
  display: flex;
  padding: 0 20px
}
.card-title1 ul li:first-child{ border-left:none;}
.card-title1 ul li .logo {
  display: flex;
  flex-direction: column;
}
.card-title1 ul li .logo span{display: inline-block;height: 45px;line-height: 45px;text-align: center}
.card-title1 ul li .logo{flex: 4}
.el-avatar{box-sizing: border-box;padding: 15px;background: #fff;flex: 1}
.map{width: 100%;display: flex;justify-content: space-around;padding-top: 50px}
</style>

<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <el-menu
          background-color="#1D2240"
          text-color="#fff"
          :router="true"
          :unique-opened="true"
          :collapse-transition="true"
          :default-active="activeIndex"
          :default-openeds="openeds"
          @select="selectitem"
        >
          <!-- 0 -->
          <el-menu-item index="0" route="/home">
            <div class="top-text">
              <el-avatar :size="40" :src="url"></el-avatar>
            </div>
          </el-menu-item>
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>商品
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/product_list">商品列表</el-menu-item>
              <el-menu-item index="1-2" route="/product_class">商品分类</el-menu-item>
              <el-menu-item index="1-3" route="/product_brand">商品品牌</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>订单
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" route="/order_list">订单列表</el-menu-item>
              <el-menu-item index="2-2" route="/agency_order">代理订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user"></i>用户
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" route="/user_list">用户列表</el-menu-item>
              <el-menu-item index="3-2" route="/user_group">用户组</el-menu-item>
              <el-menu-item index="3-3" route="/agency_user">代理用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-finished"></i>广告
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" route="/advert_list">广告列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-chat-dot-square"></i>消息
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1" route="/send_news">发送用户消息</el-menu-item>
              <el-menu-item index="5-2" route="/newslist">消息列表</el-menu-item>
              <el-menu-item index="5-3" route="/system_news">系统消息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 6 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1" route="/set_basic">基本设置</el-menu-item>
              <el-menu-item index="6-2" route="/set_mobile">手机端首页图标</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 7 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-connection"></i>代理
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1" route="/agency_list">代理列表</el-menu-item>
              <el-menu-item index="7-2" route="/agency_clearing">代理结算</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <ul class="bar-left">
            <li>
              <el-badge :value="3" class="item">
                <span size="small">
                  <i class="el-icon-bell"></i>消息
                </span>
              </el-badge>
            </li>
            <li>
              <el-dropdown @command="addpwd">
                <span class="el-dropdown-link">admin</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">修改密码</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <i class="el-icon-switch-button"></i>
              <span>注销</span>
            </li>
          </ul>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
    <!-- 修改密码弹框 -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码" prop="oldpwd">
          <el-input type="password" v-model="ruleForm.oldpwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpwd">
          <el-input type="password" v-model="ruleForm.newpwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="samepwd">
          <el-input type="password" v-model="ruleForm.samepwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openeds: [],
      activeIndex: "0",
      ruleForm: {
        oldpwd: "",
        newpwd: "",
        samepwd: ""
      },
      dialogFormVisible: false,
      url: require("../assets/fangzi.png"),
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    //打开修改密码
    addpwd(command) {
      this.dialogFormVisible = true;
    },
    //清空修改密码
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 点击图标关闭左侧菜单闭合
    selectitem(index) {
      if (!index.includes("-")) this.openeds = [];
    }
  },
  mounted() {
    this.activeIndex = this.$route.meta.index;
  }
};
</script>
<style>
html,
body,
#app,
.index {
  height: 100%;
}
.index {
  padding-left: 200px;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  padding: 0 !important;
}
.el-menu {
  border-right: 0 !important;
}
.el-menu-item {
  font-size: 12px !important;
}
.el-aside {
  position: fixed;
  left: 0;
  height: 100%;
  background: #1d2240 !important;
}
.el-divider {
  height: 100% !important;
}
.el-table .cell {
  text-align: center;
}
.el-container {
  height: 100% !important;
}
.top-text {
  margin-top: 40px;
  display: flex;
  padding-top: 10px;
  align-items: center;
  justify-content: center;
}
.el-table--enable-row-transition .el-table__body td {
  font-size: 12px;
}
.el-input--suffix .el-input__inner {
  height: 30px;
}
.el-input-group--append .el-input__inner {
  height: 30px;
}
.bar-left {
  display: flex;
  justify-content: flex-end;
}
.bar-left li {
  width: 6%;
  text-align: center;
  border-left: 2px solid rgba(200, 200, 200, 0.1);
  font-size: 14px;
  box-sizing: border-box;
  height: 60px;
  cursor: pointer;
}
.el-dropdown-link {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.el-dropdown {
  width: 100%;
  height: 100%;
}
.bar-left li button{border: none}
.bar-left li button i{font-size: 14px;}
.bar-left li button:hover {
  background: none;
}
.el-dropdown:hover {
  color: #409eff;
}
.bar-left li:hover{
  background: rgba(200, 200, 200, 0.1);
  color: #409eff;
  border-bottom: 1px solid rgba(200, 200, 200, 0.2);
}
.bar-left li:nth-child(2) {
  width: 8%;
}
.bar-left li i {
  margin-right: 5px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu {
  width: 120px;
  margin-right: 8px;
}
.el-avatar {
  background: #1d2240;
}
.top-text img {
  cursor: pointer;
}
.top-text img:hover {
  background: #409eff;
}
.el-badge__content.is-fixed {
  top: 14px;
  right: 2px;
}
</style>
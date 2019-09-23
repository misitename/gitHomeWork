import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/index.vue'),
      children:[
         {
          path: '/',//默认路径首页
          redirect: '/home',
         },
         {
          path: '/home',//首页
          name: 'home',
          meta:{title:"首页",index:"0"},
          component: () => import('./views/home.vue')
        },
        {
          path: '/agency_user',//代理用户
          name: 'agency_user',
          meta:{title:"代理用户",index:"3-3"},
          component: () => import('./components/yonghu/agency_user.vue')
        },
        {
          path: '/user_list',//用户列表
          name: 'user_list',
          meta:{title:"用户列表",index:"3-1"},
          component: () => import('./components/yonghu/user_list.vue')
        },
        {
          path: '/user_group',//用户组
          name: 'agency_group',
           meta:{title:"用户组",index:"3-2"},
          component: () => import('./components/yonghu/user_group.vue')
        },
        {
          path: '/order_list',//订单列表
          name: 'order_list',
           meta:{title:"订单列表",index:"2-1"},
          component: () => import('./components/dingdan/order_list.vue')
        },
        {
          path: '/order_details',//订单列表详情页
          name: 'order_details',
           meta:{title:"订单列表详情"},
          component: () => import('./components/dingdan/order_details.vue')
        },
        {
          path: '/agency_order',//代理订单
          name: 'agency_order',
           meta:{title:"代理订单",index:"2-2"},
          component: () => import('./components/dingdan/agency_order.vue')
        },
        {
          path: '/agency_details',//代理订单详情页
          name: 'agency_details',
           meta:{title:"代理订单详情"},
          component: () => import('./components/dingdan/agency_details.vue')
        },
        {
          path: '/agency_list',//代理列表
          name: 'agency_list',
           meta:{title:"代理列表",index:"7-1"},
          component: () => import('./components/daili/agency_list.vue')
        },
        {
          path: '/agency_clearing',//代理结算
          name: 'agency_clearing',
           meta:{title:"代理结算",index:"7-2"},
          component: () => import('./components/daili/agency_clearing.vue')
        },
        {
          path: '/newslist',//消息列表
          name: 'newslist',
           meta:{title:"消息列表",index:"5-2"},
          component: () => import('./components/xiaoxi/newslist.vue')
        },
        {
          path: '/send_news',//发送消息
          name: 'send_news',
           meta:{title:"发送消息",index:"5-1"},
          component: () => import('./components/xiaoxi/send_news.vue')
        },
        {
          path: '/system_news',//系统消息
          name: 'system_news',
           meta:{title:"系统消息",index:"5-3"},
          component: () => import('./components/xiaoxi/system_news.vue')
        },
        {
          path: '/product_list',//商品列表
          name: 'product_list',
           meta:{title:"商品列表",index:"1-1"},
          component: () => import('./components/shangpin/product_list.vue')
        },
        {
          path: '/list_details',//商品列表详情
          name: 'list_details',
           meta:{title:"商品列表详情"},
          component: () => import('./components/shangpin/list_details.vue')
        },
        {
          path: '/product_class',//商品分类
          name: 'product_class',
           meta:{title:"商品分类",index:"1-2"},
          component: () => import('./components/shangpin/product_class.vue')
        },
        {
          path: '/product_brand',//商品品牌
          name: 'product_brand',
           meta:{title:"商品品牌",index:"1-3"},
          component: () => import('./components/shangpin/product_brand.vue')
        },
        {
          path: '/advert_list',//广告列表
          name: 'advert_list',
           meta:{title:"广告列表",index:"4-1"},
          component: () => import('./components/guanggao/advert_list.vue')
        },
        {
          path: '/set_basic',//基本设置
          name: 'set_basic',
           meta:{title:"基本设置",index:"6-1"},
          component: () => import('./components/shezhi/set_basic.vue')
        },
        {
          path: '/set_mobile',//手机端设置
          name: 'set_mobile',
           meta:{title:"手机端设置",index:"6-2"},
          component: () => import('./components/shezhi/set_mobile.vue')
        }
      ]
    }
  ]
})


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/documentation', // 读者管理
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   zhname: '读者管理',
  //   promiss: 'readManage',
  //   meta: { title: 'documentation', icon: 'documentation', roles: ['admin', 'readManage'] },
  //   children: [
  //     {
  //       path: 'index', // 借书管理
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       zhname: '借书管理',
  //       promiss: 'readManage-borrow',
  //       meta: { title: 'borrowBook', roles: ['admin', 'readManage-borrow'] }
  //     },
  //     {
  //       path: 'Rcard', // 读者列表
  //       component: () => import('@/views/documentation/Rcard'),
  //       name: 'Rcard',
  //       zhname: '读者列表',
  //       promiss: 'readManage-card',
  //       meta: { title: 'rcard', roles: ['admin', 'readManage-card'] }
  //     },
  //     // {
  //     //   path: 'readerManage', // 读者管理
  //     //   component: () => import('@/views/documentation/Rcard'),
  //     //   name: 'readerManage',
  //     //   zhname: '读者管理',
  //     //   promiss: 'readManage-readerManage',
  //     //   meta: { title: 'readerManage', icon: 'documentation', roles: ['admin', 'readManage-readerManage'] }
  //     // },
  //     {
  //       path: 'Ractive', // 活动管理
  //       component: () => import('@/views/documentation/Ractive'),
  //       name: 'Ractive',
  //       zhname: '活动管理',
  //       promiss: 'readManage-active',
  //       meta: { title: 'ractive', noCache: true, roles: ['admin', 'readManage-active'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide', // 捐赠管理
  //   component: Layout,
  //   redirect: '/guide/index',
  //   zhname: '捐赠管理',
  //   promiss: 'donationManage',
  //   meta: {
  //     title: 'guide', icon: 'guide',
  //     roles: ['admin', 'donationManage'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'index', //  捐赠文档管理
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       zhname: '捐赠文档管理',
  //       promiss: 'donationManage-doc',
  //       meta: { title: 'donationDoc', roles: ['admin', 'donationManage-doc'] }
  //     },
  //     {
  //       path: 'donationList', //  捐赠图书列表
  //       component: () => import('@/views/guide/donationList'),
  //       name: 'DonationList',
  //       zhname: '捐赠图书列表',
  //       promiss: 'donationManage-booklist',
  //       meta: { title: 'donationList', roles: ['admin', 'donationManage-booklist'] }
  //     },
  //     {
  //       path: 'mainDonation', //  重要捐赠管理
  //       component: () => import('@/views/guide/mainDonation'),
  //       name: 'MainDonation',
  //       zhname: '重要捐赠管理',
  //       promiss: 'donationManage-mainbook',
  //       meta: { title: 'mainDonation', roles: ['admin', 'donationManage-mainbook'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/resource', // 资源管理
  //   component: Layout,
  //   zhname: '资源管理',
  //   promiss: 'resource',
  //   meta: {
  //     title: 'resource', icon: 'example',
  //     roles: ['admin', 'resource']
  //   },
  //   children: [
  //     {
  //       path: 'index', // 资源管理
  //       zhname: '资源管理',
  //       promiss: 'resourceindex',
  //       component: () => import('@/views/resourceManage/resource'),
  //       name: 'resource',
  //       meta: { title: 'resource', roles: ['admin', 'resourceindex'] }
  //     },
  //     {
  //       path: 'resourcetype', //  资源类型管理
  //       component: () => import('@/views/resourceManage/resourcetype'),
  //       name: 'resourcetype',
  //       zhname: '资源类型管理',
  //       promiss: 'resourcetype',
  //       meta: { title: 'resourcetype', roles: ['admin', 'resourcetype'] }
  //     },
  //     {
  //       path: 'seriesmanage', //  系列管理
  //       component: () => import('@/views/resourceManage/seriesManage'),
  //       name: 'seriesmanage',
  //       zhname: '系列管理',
  //       promiss: 'seriesmanage',
  //       meta: { title: 'seriesmanage', roles: ['admin', 'seriesmanage'] }
  //     },
  //     {
  //       path: 'bookresource', //  图书资源
  //       component: () => import('@/views/resourceManage/bookresource'),
  //       name: 'bookresource',
  //       zhname: '图书资源',
  //       promiss: 'bookresource',
  //       meta: { title: 'bookresource', roles: ['admin', 'bookresource'] }
  //     }
  //   ]
  // },
  {
    path: '/notice', // 通知管理
    component: Layout,
    zhname: '通知管理',
    promiss: 'notice',
    meta: { title: 'notice', icon: 'excel', roles: ['admin', 'notice'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/notice/notice'),
        name: 'notice',
        meta: { title: 'notice', roles: ['admin', 'notice'] }
      }
    ]
  },
  {
    path: '/banner', // 轮播图管理
    component: Layout,
    zhname: '轮播图管理',
    promiss: 'banner',
    meta: { title: 'banner', icon: 'guide', roles: ['admin', 'banner'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/banner/banner'),
        name: 'banner',
        meta: { title: 'banner', roles: ['admin', 'banner'] }
      }
    ]
  },
  {
    path: '/article', // 学院课程
    component: Layout,
    zhname: '学院课程',
    promiss: 'article',
    meta: { title: 'article', icon: 'list', roles: ['admin', 'article'] },
    children: [
      {
        path: 'index',
        zhname: '学院课程',
        promiss: 'articleindex',
        component: () => import('@/views/article/article'),
        name: 'articleindex',
        meta: { title: 'article', roles: ['admin', 'articleindex'] }
      },
      {
        path: 'articleSeries',
        zhname: '课程系列',
        promiss: 'articleSeries',
        component: () => import('@/views/article/articleSeries'),
        name: 'articleSeries',
        meta: { title: 'articleSeries', roles: ['admin', 'articleSeries'] }
      }
    ]
  },
  {
    path: '/goodsManage', // 商品管理
    component: Layout,
    zhname: '商品管理',
    promiss: 'goodsManage',
    meta: { title: 'goods', icon: 'example', roles: ['admin', 'goodsManage'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/goodsManage/goodsManage'),
        name: 'goodsManage',
        meta: { title: 'goods', roles: ['admin', 'goodsManage'] }
      },
      {
        path: 'carManage', // 汽车管理
        zhname: '汽车管理',
        name: 'carManage',
        component: () => import('@/views/carManage/carManage'),
        promiss: 'carManage',
        meta: { title: 'icons', roles: ['admin', 'carManage'] }
      },
      {
        path: 'collage',
        zhname: '拼团管理',
        promiss: 'collage',
        component: () => import('@/views/collage/collage'),
        name: 'collage',
        meta: { title: 'collage', roles: ['admin', 'collage'] }
      },
      {
        path: 'goodsCategory', // 系统分类
        zhname: '系统分类',
        promiss: 'cate-index',
        component: () => import('@/views/goodsManage/goodsCategory'),
        name: 'goodsCategory',
        meta: { title: 'goodscate', roles: ['admin', 'cate-index'] }
      },
      {
        path: 'shop_cate', // 店铺分类
        component: () => import('@/views/goodsManage/shopCategory'),
        name: 'shop_cate',
        zhname: '店铺分类',
        promiss: 'shop-cate',
        meta: { title: 'shopcate', noCache: true, roles: ['admin', 'shop-cate'] }
      }
    ]
  },
  {
    path: '/order', // 订单管理
    component: Layout,
    zhname: '订单管理',
    promiss: 'order',
    meta: { title: 'order', icon: 'documentation', roles: ['admin', 'order'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/order/order'),
        name: 'order',
        meta: { title: 'order', roles: ['admin', 'order'] }
      }
    ]
  },
  {
    path: '/userManage', // 会员管理
    component: Layout,
    zhname: '会员管理',
    promiss: 'userManage',
    meta: { title: 'userManage', icon: 'peoples', roles: ['admin', 'userManage'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/userManage/userManage'),
        name: 'userManage',
        meta: { title: 'userManage', roles: ['admin', 'userManage'] }
      }
    ]
  },
  {
    path: '/shop', // 商户管理
    component: Layout,
    zhname: '商户管理',
    promiss: 'shop',
    meta: { title: 'shop', icon: 'table', roles: ['admin', 'shop'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/shop/shop'),
        name: 'shop',
        meta: { title: 'shop', roles: ['admin', 'shop'] }
      }
    ]
  },
  {
    path: '/demand', // 需求列表
    component: Layout,
    zhname: '需求列表',
    promiss: 'demand',
    meta: { title: 'demand', icon: 'tab', roles: ['admin', 'demand'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Demand/Demand'),
        name: 'demand',
        meta: { title: 'demand', roles: ['admin', 'demand'] }
      }
    ]
  },
  // {
  //   path: '/tab', // 服务指南
  //   component: Layout,
  //   zhname: '服务指南',
  //   promiss: 'service',
  //   meta: { title: 'serviceList', icon: 'tab', roles: ['admin', 'service'] },
  //   children: [
  //     {
  //       path: 'serviceList', // 服务指南
  //       component: () => import('@/views/tab/serviceList'),
  //       name: 'ServiceList',
  //       meta: { title: 'serviceList', roles: ['admin', 'service'] }
  //     }
  //   ]
  // },
  /** When your routing table is too long, you can split it into small modules**/
  //  componentsRouter,
  //  chartsRouter,
  //  nestedRouter,
  //  tableRouter,

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   meta: { roles: ['admin'] },
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },

  {
    path: '/systemSetup', // 系统设置
    component: Layout,
    zhname: '系统设置',
    redirect: 'noredirect',
    promiss: 'systemSetup',
    meta: { icon: 'clipboard', roles: ['admin', 'systemSetup'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/systemSetup/index'),
        name: 'SystemSetup',
        meta: { title: 'systemSetup', roles: ['admin', 'systemSetup'] }
      }
    ]
  },

  {
    path: '/i18n', // 管理员管理
    component: Layout,
    zhname: '管理员管理',
    promiss: 'adminManage',
    meta: { title: 'i18n', icon: 'international', roles: ['admin', 'adminManage'] },
    children: [
      {
        path: 'addAdmin', // 角色管理
        component: () => import('@/views/i18n-demo/addAdmin'),
        name: 'AddAdmin',
        zhname: '角色管理',
        promiss: 'adminManage-addAdmin',
        meta: { title: 'addAdmin', roles: ['admin', 'adminManage-addAdmin'] }
      },
      {
        path: 'index', // 管理员管理
        component: () => import('@/views/i18n-demo/index'),
        name: 'I18n',
        zhname: '管理员管理',
        promiss: 'adminManage-index',
        meta: { title: 'i18n', noCache: true, roles: ['admin', 'adminManage-index'] }
      },
      {
        path: 'adminLog', // 管理员日志
        component: () => import('@/views/i18n-demo/adminLog'),
        name: 'AdminLog',
        promiss: 'adminManage-log',
        zhname: '管理员日志',
        meta: { title: 'adminLog', roles: ['admin', 'adminManage-log'] }
      }
    ]
  },

  // {
  //   path: '/clipboard', // 你读书我买单管理
  //   component: Layout,
  //   zhname: '你读书我买单管理',
  //   redirect: 'noredirect',
  //   promiss: 'ureadManage',
  //   meta: { icon: 'clipboard', roles: ['admin', 'ureadManage'] },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', roles: ['admin', 'ureadManage'] }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/passenger', // 客流管理
  //   component: Layout,
  //   zhname: '客流管理',
  //   promiss: 'passenger',
  //   meta: { title: 'passenger', icon: 'peoples', roles: ['admin', 'passenger'] },
  //   children: [
  //     {
  //       path: 'passengerequipment', // 客流设备管理
  //       component: () => import('@/views/passenger/passengerequipment'),
  //       name: 'passengerEquipment',
  //       promiss: 'passenger-equipment',
  //       zhname: '客流设备管理',
  //       meta: { title: 'passengerEquipment', roles: ['admin', 'passenger-equipment'] }
  //     },
  //     {
  //       path: 'passengerdata', // 客流数据管理
  //       component: () => import('@/views/passenger/passengerdata'),
  //       name: 'passengerData',
  //       promiss: 'passenger-data',
  //       zhname: '客流数据管理',
  //       meta: { title: 'passengerData', roles: ['admin', 'passenger-data'] }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

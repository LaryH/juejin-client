// 在这里引用组件
// 使用路由懒加载进行引入
const Home = () => import("@/pages/Home");
const Pins = () => import("@/pages/Pins");
const Topics = () => import("@/pages/Topics");
const Books = () => import("@/pages/Books");
const Events = () => import("@/pages/Events");
const Subscribe = () => import("@/pages/Subscribe");
const Detail = () => import("@/pages/Detail");
export default [
  /* 
  在这里配置路由
  示例
  {
    path: '/home',  路径
    component:
  }
*/
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/subscribe",
    component: Subscribe,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/pins",
    component: Pins,
  },
  {
    path: "/topics",
    component: Topics,
  },
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/events",
    component: Events,
  },
  // {
  //   path: "/",
  //   redirect: "/home",
  // },
];

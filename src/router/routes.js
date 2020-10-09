// 在这里引用组件
// 使用路由懒加载进行引入
const Home = () => import("@/pages/Home");
const Pins = () => import("@/pages/Pins");
const Topics = () => import("@/pages/Topics");
const Books = () => import("@/pages/Books");
const Events = () => import("@/pages/Events");
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
    path: "/home",
    component: Home,
<<<<<<< HEAD
    children: [],
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
=======
    redirect: "/",
    children: [],
>>>>>>> e56c3d93649a540a8c8f37d23506ba55e0bf3739
  },
];

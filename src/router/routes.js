// 在这里引用组件
// 使用路由懒加载进行引入
const Home = () => import("@/pages/Home");
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
    children: [
      
    ]
  },
];

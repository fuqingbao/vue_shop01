import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
Vue.use(VueRouter)

  const routes = [
    //重定向
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/home',
      component:Home
    },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
//挂在导航守卫为router对象挂在一个beforEach，然后接收一个回调函数
router.beforeEach((to, from, next)=>{
  //to将要访问的路径
//  from表示从哪个路径跳转过来
//  next表示一个函数，放行
//  next表现形式有next（）放行 next（'/login')强制跳转到login
  if(to.path==='/login')return next();
  //获取tokenStr
  const tokenStr =window.sessionStorage.getItem('token');
  if (!tokenStr)return next('/login')
  next()
})
export default router


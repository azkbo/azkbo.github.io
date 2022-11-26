/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc:
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const App = () => import('../App.vue')
const Home = () => import('./main/HomePage.vue')
const LoginPage = () => import('./account/LoginPage.vue')
const Notfound = () => import('./other/NotfoundPage.vue')

// const history = createWebHistory();
export const routers = createRouter({
  history: createWebHashHistory(),
  // scrollBehavior(to, from, savedPosition) {
  //   // console.log(to, from, savedPosition);
  //   return { top: 0 }
  // },
  routes: [
    { path: '/', redirect: '/home', component: App },
    { path: '/home', name: 'home', component: Home },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/*', name: 'notfound', component: Notfound },
  ]
});

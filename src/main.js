/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 项目入口
 */
import { createApp } from 'vue'
import './App.css'
import App from './App.vue'
import { routers } from './pages/router';

const app = createApp(App);
app.use(routers); // 添加路由器

app.mount('#app');



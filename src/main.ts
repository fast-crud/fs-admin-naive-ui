import './styles/tailwind.css';
import { createApp } from 'vue';
import { setupNaive, setupDirectives, setupFastCrud } from '@/plugins';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from '@/store';

import i18n from './i18n';

// 本地mock， 正式项目请删除mock，避免影响性能
import './mock';

async function bootstrap() {
  const app = createApp(App);

  // 注册全局常用的 naive-ui 组件
  setupNaive(app);

  app.use(i18n);
  // 注册fast-crud
  setupFastCrud(app, { i18n });

  // 注册全局自定义组件
  //setupCustomComponents();

  // 注册全局自定义指令，如：v-permission权限指令
  setupDirectives(app);

  // 注册全局方法，如：app.config.globalProperties.$message = message
  //setupGlobalMethods(app);

  // 挂载状态管理
  setupStore(app);

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载APP实例
  await router.isReady();

  app.mount('#app', true);
}

void bootstrap();

import { RouteRecordRaw } from 'vue-router';
import { Layout, ParentLayout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const basicRoute = {
  path: 'basis',
  name: 'CrudBasis',
  redirect: '/crud/basis/compute',
  meta: {
    title: '基本特性',
  },
  component: ParentLayout,
  children: [
    {
      name: 'BasisCompute',
      path: 'compute',
      meta: {
        title: '动态计算',
      },
      component: () => import('@/views/crud/basis/compute/index.vue'),
    },
    {
      name: 'BasisComputeMore',
      path: 'compute-more',
      meta: {
        title: '动态计算-更多示例',
      },
      component: () => import('@/views/crud/basis/compute-more/index.vue'),
    },
    {
      title: '国际化',
      name: 'BasisI18n',
      path: 'i18n',
      meta: {
        title: '国际化',
      },
      component: () => import('@/views/crud/basis/i18n/index.vue'),
    },
    {
      title: 'ValueChange',
      name: 'BasisValueChange',
      path: 'value-change',
      meta: {
        title: 'ValueChange',
      },
      component: () => import('@/views/crud/basis/value-change/index.vue'),
    },
  ],
};

const componentRoute = {
  path: 'component',
  name: 'CrudComponent',
  redirect: '/crud/component/text',
  meta: {
    title: '组件示例',
  },
  component: ParentLayout,
  children: [
    {
      path: 'text',
      name: 'ComponentText',
      meta: {
        title: '文本组件',
      },
      component: () => import('@/views/crud/component/text/index.vue'),
    },
  ],
};

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/crud',
    name: 'crud',
    redirect: '/crud/basic',
    component: Layout,
    meta: {
      title: 'Crud示例',
      icon: renderIcon(TableOutlined),
      sort: 1,
    },
    children: [basicRoute, componentRoute],
  },
];

export default routes;

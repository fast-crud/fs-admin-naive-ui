import { RouteRecordRaw } from 'vue-router';
import { Layout, ParentLayout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';
const routeName = '';

import {
  DiscOutline,
  BookOutline,
  BeerOutline,
  DocumentOutline,
  ExtensionPuzzleOutline,
  FlameOutline,
  CubeOutline,
} from '@vicons/ionicons5';

const basicRoute = {
  path: 'basis',
  name: routeName + 'Basis',
  redirect: '/crud/basis/compute',
  meta: {
    title: '基本特性',
    icon: renderIcon(DiscOutline),
  },
  component: ParentLayout,
  children: [
    {
      name: routeName + 'BasisCompute',
      path: 'compute',
      meta: {
        title: '动态计算',
      },
      component: () => import('@/views/crud/basis/compute/index.vue'),
    },
    {
      name: routeName + 'BasisComputeMore',
      path: 'compute-more',
      meta: {
        title: '动态计算-更多示例',
      },
      component: () => import('@/views/crud/basis/compute-more/index.vue'),
    },
    {
      name: routeName + 'BasisI18n',
      path: 'i18n',
      meta: {
        title: '国际化',
      },
      component: () => import('@/views/crud/basis/i18n/index.vue'),
    },
    {
      name: routeName + 'BasisValueChange',
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
  name: routeName + 'Component',
  redirect: '/crud/component/text',
  meta: {
    icon: renderIcon(CubeOutline),
    title: '组件示例',
  },
  component: ParentLayout,
  children: [
    {
      path: 'text',
      name: routeName + 'ComponentText',
      meta: {
        title: '文本组件',
      },
      component: () => import('@/views/crud/component/text/index.vue'),
    },
    {
      name: routeName + 'ComponentSelect',
      path: 'select',
      meta: {
        title: '选择(select)',
      },
      component: () => import('@/views/crud/component/select/index.vue'),
    },
    {
      meta: {
        title: '级联(cascader)',
      },
      name: routeName + 'ComponentCascader',
      path: 'cascader',
      component: () => import('@/views/crud/component/cascader/index.vue'),
    },
    {
      meta: {
        title: '多选(checkbox)',
      },
      name: routeName + 'ComponentCheckbox',
      path: 'checkbox',
      component: () => import('@/views/crud/component/checkbox/index.vue'),
    },
    {
      meta: {
        title: '单选(radio)',
      },
      name: routeName + 'ComponentRadio',
      path: 'radio',
      component: () => import('@/views/crud/component/radio/index.vue'),
    },
    {
      meta: {
        title: '开关(switch)',
      },
      name: routeName + 'ComponentSwitch',
      path: 'switch',
      component: () => import('@/views/crud/component/switch/index.vue'),
    },
    {
      meta: {
        title: '日期时间(date)',
      },
      name: routeName + 'ComponentDate',
      path: 'date',
      component: () => import('@/views/crud/component/date/index.vue'),
    },
    {
      meta: {
        title: '按钮链接',
      },
      name: routeName + 'ComponentButton',
      path: 'button',
      component: () => import('@/views/crud/component/button/index.vue'),
    },
    {
      meta: {
        title: '数字',
      },
      name: routeName + 'ComponentNumber',
      path: 'number',
      component: () => import('@/views/crud/component/number/index.vue'),
    },
    {
      meta: {
        title: '树形选择',
      },
      name: routeName + 'ComponentTree',
      path: 'tree',
      component: () => import('@/views/crud/component/tree/index.vue'),
    },
    {
      meta: {
        title: '图片裁剪上传',
      },
      name: routeName + 'ComponentUploaderCropper',
      path: 'uploader/cropper',
      component: () => import('@/views/crud/component/uploader/cropper/index.vue'),
    },
    {
      meta: {
        title: '表单本地上传',
      },
      name: routeName + 'ComponentUploaderForm',
      path: 'uploader/form',
      component: () => import('@/views/crud/component/uploader/form/index.vue'),
    },
    {
      meta: {
        title: '阿里云oss上传',
      },
      name: routeName + 'ComponentUploaderAlioss',
      path: 'uploader/alioss',
      component: () => import('@/views/crud/component/uploader/alioss/index.vue'),
    },
    {
      meta: {
        title: '腾讯云cos上传',
      },
      name: routeName + 'ComponentUploaderCos',
      path: 'uploader/cos',
      component: () => import('@/views/crud/component/uploader/cos/index.vue'),
    },
    {
      meta: {
        title: '七牛云上传',
      },
      name: routeName + 'ComponentUploaderQiniu',
      path: 'uploader/qiniu',
      component: () => import('@/views/crud/component/uploader/qiniu/index.vue'),
    },
    {
      meta: {
        title: '富文本编辑器',
      },
      name: routeName + 'ComponentEditor',
      path: 'editor',
      component: () => import('@/views/crud/component/editor/index.vue'),
    },
    {
      meta: {
        title: '图标',
      },
      name: routeName + 'ComponentIcon',
      path: 'icon',
      component: () => import('@/views/crud/component/icon/index.vue'),
    },
  ],
};

const dictRoutes = {
  name: routeName + 'Dict',
  path: '/crud/dict',
  redirect: '/crud/dict/single',
  meta: {
    title: '数据字典',
    icon: renderIcon(BookOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '单例',
      },
      name: routeName + 'DictSingle',
      path: 'single',
      component: () => import('@/views/crud/dict/single/index.vue'),
    },
    {
      meta: {
        title: '分发复制',
      },
      name: routeName + 'DictCloneable',
      path: 'cloneable',
      component: () => import('@/views/crud/dict/cloneable/index.vue'),
    },
    {
      meta: {
        title: '原型复制',
      },
      name: routeName + 'DictPrototype',
      path: 'prototype',
      component: () => import('@/views/crud/dict/prototype/index.vue'),
    },
  ],
};
const formRoutes = {
  name: routeName + 'form',
  path: 'form',
  redirect: '/crud/form/layout',
  meta: {
    title: 'Form表单',
    icon: renderIcon(DocumentOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '表单Grid布局',
      },
      name: routeName + 'FormLayoutGrid',
      path: 'layout-grid',
      component: () => import('@/views/crud/form/layout-grid/index.vue'),
    },
    {
      meta: {
        title: '表单Flex布局',
      },
      name: routeName + 'FormLayoutFlex',
      path: 'layout-flex',
      component: () => import('@/views/crud/form/layout-flex/index.vue'),
    },
    {
      meta: {
        title: '表单动态布局',
      },
      name: routeName + 'FormLayout',
      path: 'layout',
      component: () => import('@/views/crud/form/layout/index.vue'),
    },
    {
      meta: {
        title: '表单校验',
      },
      name: routeName + 'FormValidation',
      path: 'validation',
      component: () => import('@/views/crud/form/validation/index.vue'),
    },
    {
      meta: {
        title: '抽屉表单',
      },
      name: routeName + 'FormDrawer',
      path: 'drawer',
      component: () => import('@/views/crud/form/drawer/index.vue'),
    },
    {
      meta: {
        title: '表单分组',
      },
      name: routeName + 'FormGroup',
      path: 'group',
      component: () => import('@/views/crud/form/group/index.vue'),
    },
    {
      meta: {
        title: '表单分组(tabs)',
      },
      name: routeName + 'FormGroupTabs',
      path: 'group-tabs',
      component: () => import('@/views/crud/form/group-tabs/index.vue'),
    },
    {
      meta: {
        title: '自定义表单',
      },
      name: routeName + 'FormCustomForm',
      path: 'custom-form',
      component: () => import('@/views/crud/form/custom-form/index.vue'),
    },
    {
      meta: {
        title: '字段帮助说明',
      },
      name: routeName + 'FormHelper',
      path: 'helper',
      component: () => import('@/views/crud/form/helper/index.vue'),
    },
    {
      meta: {
        title: '页面内弹出表单',
        cache: true,
      },
      name: routeName + 'FormInner',
      path: 'inner',
      component: () => import('@/views/crud/form/inner/index.vue'),
    },
    {
      meta: {
        title: '地区字典管理',
        cache: true,
      },
      name: routeName + 'FormInnerArea',
      path: 'inner/area',
      component: () => import('@/views/crud/form/inner/area/index.vue'),
    },
    {
      name: routeName + 'FormNewPage',
      path: 'new-page',
      component: () => import('@/views/crud/form/new-page/index.vue'),
      meta: {
        title: '新页面编辑',
        cache: false,
      },
    },
    {
      name: routeName + 'FormNewPageEdit',
      path: 'new-page/edit',
      component: () => import('@/views/crud/form/new-page/edit.vue'),
      meta: {
        title: '新页面编辑表单',
        hidden: true, //不是菜单
      },
    },
    {
      meta: {
        title: '独立使用表单',
      },
      name: routeName + 'FormIndependent',
      path: 'independent',
      component: () => import('@/views/crud/form/independent/index.vue'),
    },
  ],
};
const featureRoutes = {
  path: 'feature',
  name: routeName + 'Feature',
  meta: {
    title: '表格特性',
    icon: renderIcon(BeerOutline),
  },
  component: ParentLayout,
  redirect: '/crud/feature/dropdown',
  children: [
    {
      meta: {
        title: '操作列按钮折叠',
      },

      name: routeName + 'FeatureDropdown',
      path: 'dropdown',
      component: () => import('@/views/crud/feature/dropdown/index.vue'),
    },
    {
      meta: {
        title: '部件显隐',
      },
      name: routeName + 'FeatureHide',
      path: 'hide',
      component: () => import('@/views/crud/feature/hide/index.vue'),
    },
    {
      meta: { title: '多选&批量删除' },
      name: routeName + 'FeatureSelection',
      path: 'selection',
      component: () => import('@/views/crud/feature/selection/index.vue'),
    },
    {
      meta: { title: '表头过滤' },
      name: routeName + 'FeatureFilter',
      path: 'filter',
      component: () => import('@/views/crud/feature/filter/index.vue'),
    },
    {
      meta: { title: '行展开' },
      name: routeName + 'FeatureExpand',
      path: 'expand',
      component: () => import('@/views/crud/feature/expand/index.vue'),
    },
    {
      meta: { title: '树形表格' },
      name: routeName + 'FeatureTree',
      path: 'tree',
      component: () => import('@/views/crud/feature/tree/index.vue'),
    },
    {
      meta: { title: '多级表头' },
      name: routeName + 'FeatureHeaderGroup',
      path: 'header-group',
      component: () => import('@/views/crud/feature/header-group/index.vue'),
    },
    {
      meta: { title: '合并单元格' },
      name: routeName + 'FeatureMerge',
      path: 'merge',
      component: () => import('@/views/crud/feature/merge/index.vue'),
    },
    {
      meta: { title: '序号' },
      name: routeName + 'FeatureIndex',
      path: 'index',
      component: () => import('@/views/crud/feature/index/index.vue'),
    },
    {
      meta: { title: '排序' },
      name: routeName + 'FeatureSortable',
      path: 'sortable',
      component: () => import('@/views/crud/feature/sortable/index.vue'),
    },
    {
      meta: { title: '固定列' },
      name: routeName + 'FeatureFixed',
      path: 'fixed',
      component: () => import('@/views/crud/feature/fixed/index.vue'),
    },
    {
      meta: { title: '不固定高度' },
      name: routeName + 'FeatureHeight',
      path: 'height',
      component: () => import('@/views/crud/feature/height/index.vue'),
    },
    {
      meta: { title: '可编辑' },
      name: routeName + 'FeatureEditable',
      path: 'editable',
      component: () => import('@/views/crud/feature/editable/index.vue'),
    },
    {
      meta: { title: '行编辑' },
      name: routeName + 'FeatureEditableRow',
      path: 'editable-row',
      component: () => import('@/views/crud/feature/editable-row/index.vue'),
    },
    {
      meta: { title: '查询框' },
      name: routeName + 'FeatureSearch',
      path: 'search',
      component: () => import('@/views/crud/feature/search/index.vue'),
    },
    {
      meta: { title: '查询框多行模式' },
      name: routeName + 'FeatureSearchMulti',
      path: 'search-multi',
      component: () => import('@/views/crud/feature/search-multi/index.vue'),
    },
    {
      meta: { title: '字段排序' },
      name: routeName + 'FeatureColumnSort',
      path: 'column-sort',
      component: () => import('@/views/crud/feature/column-sort/index.vue'),
    },
    {
      meta: { title: 'ValueBuilder' },
      name: routeName + 'FeatureValueBuilder',
      path: 'value-builder',
      component: () => import('@/views/crud/feature/value-builder/index.vue'),
    },
  ],
};
const slotRoutes = {
  name: routeName + 'Slots',
  path: 'slots',
  redirect: '/crud/slots/layout',
  meta: {
    title: '插槽',
    icon: renderIcon(ExtensionPuzzleOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '页面占位插槽',
      },
      name: routeName + 'SlotsLayout',
      path: 'layout',
      component: () => import('@/views/crud/slots/layout/index.vue'),
    },
    {
      meta: { title: '表单占位插槽' },
      name: routeName + 'SlotsForm',
      path: 'form',
      component: () => import('@/views/crud/slots/form/index.vue'),
    },
    {
      meta: { title: '查询字段插槽' },
      name: routeName + 'SlotsSearch',
      path: 'search',
      component: () => import('@/views/crud/slots/search/index.vue'),
    },
    {
      meta: { title: '单元格插槽' },
      name: routeName + 'SlotsCell',
      path: 'cell',
      component: () => import('@/views/crud/slots/cell/index.vue'),
    },
    {
      meta: { title: '表单字段插槽' },
      name: routeName + 'SlotsFormItem',
      path: 'form-item',
      component: () => import('@/views/crud/slots/form-item/index.vue'),
    },
  ],
};
const advancedRoutes = {
  name: routeName + 'Advanced',
  path: 'advanced',
  redirect: '/crud/advanced/linkage',
  meta: {
    title: '复杂需求',
    icon: renderIcon(FlameOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '选择联动',
      },
      name: routeName + 'AdvancedLinkage',
      path: 'linkage',
      component: () => import('@/views/crud/advanced/linkage/index.vue'),
    },
    {
      meta: {
        title: '后台加载crud',
      },
      name: routeName + 'AdvancedFormBackend',
      path: 'from-backend',
      component: () => import('@/views/crud/advanced/from-backend/index.vue'),
    },
    {
      meta: {
        title: '本地分页',
      },
      name: routeName + 'AdvancedLocalPagination',
      path: 'local-pagination',
      component: () => import('@/views/crud/advanced/local-pagination/index.vue'),
    },
    {
      meta: {
        title: '嵌套子表格',
      },
      name: routeName + 'AdvancedNest',
      path: 'nest',
      component: () => import('@/views/crud/advanced/nest/index.vue'),
    },
    {
      meta: {
        title: '修改布局',
      },
      name: routeName + 'AdvancedLayout',
      path: 'layout',
      component: () => import('@/views/crud/advanced/layout/index.vue'),
    },
    {
      meta: {
        title: '自定义布局',
      },
      name: routeName + 'AdvancedCustomLayout',
      path: 'custom-layout',
      component: () => import('@/views/crud/advanced/custom-layout/index.vue'),
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
    name: routeName,
    redirect: '/crud/basic',
    component: Layout,
    meta: {
      title: 'Crud示例',
      icon: renderIcon(TableOutlined),
      sort: 1,
    },
    children: [
      basicRoute,
      dictRoutes,
      componentRoute,
      featureRoutes,
      formRoutes,
      slotRoutes,
      advancedRoutes,
    ],
  },
];

export default routes;

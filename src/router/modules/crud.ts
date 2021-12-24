import { RouteRecordRaw } from 'vue-router';
import { Layout, ParentLayout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';
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
  name: 'CrudBasis',
  redirect: '/crud/basis/compute',
  meta: {
    title: '基本特性',
    icon: renderIcon(DiscOutline),
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
      name: 'BasisI18n',
      path: 'i18n',
      meta: {
        title: '国际化',
      },
      component: () => import('@/views/crud/basis/i18n/index.vue'),
    },
    {
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
    icon: renderIcon(CubeOutline),
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
    {
      title: '选择(select)',
      name: 'ComponentSelect',
      path: '/crud/component/select',
      meta: {
        title: '选择(select)',
      },
      component: () => import('@/views/crud/component/select/index.vue'),
    },
    {
      meta: {
        title: '级联(cascader)',
      },
      name: 'ComponentCascader',
      path: '/crud/component/cascader',
      component: () => import('@/views/crud/component/cascader/index.vue'),
    },
    {
      meta: {
        title: '多选(checkbox)',
      },
      name: 'ComponentCheckbox',
      path: '/crud/component/checkbox',
      component: () => import('@/views/crud/component/checkbox/index.vue'),
    },
    {
      meta: {
        title: '单选(radio)',
      },
      name: 'ComponentRadio',
      path: '/crud/component/radio',
      component: () => import('@/views/crud/component/radio/index.vue'),
    },
    {
      meta: {
        title: '开关(switch)',
      },
      name: 'ComponentSwitch',
      path: '/crud/component/switch',
      component: () => import('@/views/crud/component/switch/index.vue'),
    },
    {
      meta: {
        title: '日期时间(date)',
      },
      name: 'ComponentDate',
      path: '/crud/component/date',
      component: () => import('@/views/crud/component/date/index.vue'),
    },
    {
      meta: {
        title: '按钮链接',
      },
      name: 'ComponentButton',
      path: '/crud/component/button',
      component: () => import('@/views/crud/component/button/index.vue'),
    },
    {
      meta: {
        title: '数字',
      },
      name: 'ComponentNumber',
      path: '/crud/component/number',
      component: () => import('@/views/crud/component/number/index.vue'),
    },
    {
      meta: {
        title: '树形选择',
      },
      name: 'ComponentTree',
      path: '/crud/component/tree',
      component: () => import('@/views/crud/component/tree/index.vue'),
    },
    {
      meta: {
        title: '图片裁剪上传',
      },
      name: 'ComponentUploaderCropper',
      path: '/crud/component/uploader/cropper',
      component: () => import('@/views/crud/component/uploader/cropper/index.vue'),
    },
    {
      meta: {
        title: '表单本地上传',
      },
      name: 'ComponentUploaderForm',
      path: '/crud/component/uploader/form',
      component: () => import('@/views/crud/component/uploader/form/index.vue'),
    },
    {
      meta: {
        title: '阿里云oss上传',
      },
      name: 'ComponentUploaderAlioss',
      path: '/crud/component/uploader/alioss',
      component: () => import('@/views/crud/component/uploader/alioss/index.vue'),
    },
    {
      meta: {
        title: '腾讯云cos上传',
      },
      name: 'ComponentUploaderCos',
      path: '/crud/component/uploader/cos',
      component: () => import('@/views/crud/component/uploader/cos/index.vue'),
    },
    {
      meta: {
        title: '七牛云上传',
      },
      name: 'ComponentUploaderQiniu',
      path: '/crud/component/uploader/qiniu',
      component: () => import('@/views/crud/component/uploader/qiniu/index.vue'),
    },
    {
      meta: {
        title: '富文本编辑器',
      },
      name: 'ComponentEditor',
      path: '/crud/component/editor',
      component: () => import('@/views/crud/component/editor/index.vue'),
    },
    {
      meta: {
        title: '图标',
      },
      name: 'ComponentIcon',
      path: '/crud/component/icon',
      component: () => import('@/views/crud/component/icon/index.vue'),
    },
  ],
};

const dictRoutes = {
  name: 'dict',
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
      name: 'DictSingle',
      path: '/crud/dict/single',
      component: () => import('@/views/crud/dict/single/index.vue'),
    },
    {
      meta: {
        title: '分发复制',
      },
      name: 'DictCloneable',
      path: '/crud/dict/cloneable',
      component: () => import('@/views/crud/dict/cloneable/index.vue'),
    },
    {
      meta: {
        title: '原型复制',
      },
      name: 'DictPrototype',
      path: '/crud/dict/prototype',
      component: () => import('@/views/crud/dict/prototype/index.vue'),
    },
  ],
};
const formRoutes = {
  name: 'form',
  path: '/crud/form',
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
      name: 'FormLayoutGrid',
      path: '/crud/form/layout-grid',
      component: () => import('@/views/crud/form/layout-grid/index.vue'),
    },
    {
      meta: {
        title: '表单Flex布局',
      },
      name: 'FormLayoutFlex',
      path: '/crud/form/layout-flex',
      component: () => import('@/views/crud/form/layout-flex/index.vue'),
    },
    {
      meta: {
        title: '表单动态布局',
      },
      name: 'FormLayout',
      path: '/crud/form/layout',
      component: () => import('@/views/crud/form/layout/index.vue'),
    },
    {
      meta: {
        title: '表单校验',
      },
      name: 'FormValidation',
      path: '/crud/form/validation',
      component: () => import('@/views/crud/form/validation/index.vue'),
    },
    {
      meta: {
        title: '抽屉表单',
      },
      name: 'FormDrawer',
      path: '/crud/form/drawer',
      component: () => import('@/views/crud/form/drawer/index.vue'),
    },
    {
      meta: {
        title: '表单分组',
      },
      name: 'FormGroup',
      path: '/crud/form/group',
      component: () => import('@/views/crud/form/group/index.vue'),
    },
    {
      meta: {
        title: '表单分组(tabs)',
      },
      name: 'FormGroupTabs',
      path: '/crud/form/group-tabs',
      component: () => import('@/views/crud/form/group-tabs/index.vue'),
    },
    {
      meta: {
        title: '自定义表单',
      },
      name: 'FormCustomForm',
      path: '/crud/form/custom-form',
      component: () => import('@/views/crud/form/custom-form/index.vue'),
    },
    {
      meta: {
        title: '字段帮助说明',
      },
      name: 'FormHelper',
      path: '/crud/form/helper',
      component: () => import('@/views/crud/form/helper/index.vue'),
    },
    // {
    //   title: "页面内部弹出表单",
    //   name: "FormInner",
    //   path: "/crud/form/inner",
    //   component: "/crud/form/inner/index.vue"
    // },
    {
      name: 'FormNewPage',
      path: '/crud/form/new-page',
      component: () => import('@/views/crud/form/new-page/index.vue'),
      meta: {
        title: '新页面编辑',
        cache: false,
      },
    },
    {
      name: 'FormNewPageEdit',
      path: '/crud/form/new-page/edit',
      component: () => import('@/views/crud/form/new-page/edit.vue'),
      meta: {
        title: '新页面编辑表单',
        isMenu: false,
      },
    },
    {
      meta: {
        title: '独立使用表单',
      },
      name: 'FormIndependent',
      path: '/crud/form/independent',
      component: () => import('@/views/crud/form/independent/index.vue'),
    },
  ],
};
const featureRoutes = {
  path: '/crud/feature',
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

      name: 'FeatureDropdown',
      path: '/crud/feature/dropdown',
      component: () => import('@/views/crud/feature/dropdown/index.vue'),
    },
    {
      meta: {
        title: '部件显隐',
      },
      name: 'FeatureHide',
      path: '/crud/feature/hide',
      component: () => import('@/views/crud/feature/hide/index.vue'),
    },
    {
      meta: { title: '多选&批量删除' },
      name: 'FeatureSelection',
      path: '/crud/feature/selection',
      component: () => import('@/views/crud/feature/selection/index.vue'),
    },
    {
      meta: { title: '表头过滤' },
      name: 'FeatureFilter',
      path: '/crud/feature/filter',
      component: () => import('@/views/crud/feature/filter/index.vue'),
    },
    {
      meta: { title: '行展开' },
      name: 'FeatureExpand',
      path: '/crud/feature/expand',
      component: () => import('@/views/crud/feature/expand/index.vue'),
    },
    {
      meta: { title: '树形表格' },
      name: 'FeatureTree',
      path: '/crud/feature/tree',
      component: () => import('@/views/crud/feature/tree/index.vue'),
    },
    {
      meta: { title: '多级表头' },
      name: 'FeatureHeaderGroup',
      path: '/crud/feature/header-group',
      component: () => import('@/views/crud/feature/header-group/index.vue'),
    },
    {
      meta: { title: '序号' },
      name: 'FeatureIndex',
      path: '/crud/feature/index',
      component: () => import('@/views/crud/feature/index/index.vue'),
    },
    {
      meta: { title: '排序' },
      name: 'FeatureSortable',
      path: '/crud/feature/sortable',
      component: () => import('@/views/crud/feature/sortable/index.vue'),
    },
    {
      meta: { title: '固定列' },
      name: 'FeatureFixed',
      path: '/crud/feature/fixed',
      component: () => import('@/views/crud/feature/fixed/index.vue'),
    },
    {
      meta: { title: '可编辑' },
      name: 'FeatureEditable',
      path: '/crud/feature/editable',
      component: () => import('@/views/crud/feature/editable/index.vue'),
    },
    {
      meta: { title: '行编辑' },
      name: 'FeatureEditableRow',
      path: '/crud/feature/editable-row',
      component: () => import('@/views/crud/feature/editable-row/index.vue'),
    },
    {
      meta: { title: '查询框' },
      name: 'FeatureSearch',
      path: '/crud/feature/search',
      component: () => import('@/views/crud/feature/search/index.vue'),
    },
    {
      meta: { title: '查询框多行模式' },
      name: 'FeatureSearchMulti',
      path: '/crud/feature/search-multi',
      component: () => import('@/views/crud/feature/search-multi/index.vue'),
    },
    {
      meta: { title: '字段排序' },
      name: 'FeatureColumnSort',
      path: '/crud/feature/column-sort',
      component: () => import('@/views/crud/feature/column-sort/index.vue'),
    },
    {
      meta: { title: 'ValueBuilder' },
      name: 'FeatureValueBuilder',
      path: '/crud/feature/value-builder',
      component: () => import('@/views/crud/feature/value-builder/index.vue'),
    },
  ],
};
const slotRoutes = {
  name: 'Slots',
  path: '/crud/slots',
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
      name: 'SlotsLayout',
      path: '/crud/slots/layout',
      component: () => import('@/views/crud/slots/layout/index.vue'),
    },
    {
      meta: { title: '表单占位插槽' },
      name: 'SlotsForm',
      path: '/crud/slots/form',
      component: () => import('@/views/crud/slots/form/index.vue'),
    },
    {
      meta: { title: '查询字段插槽' },
      name: 'SlotsSearch',
      path: '/crud/slots/search',
      component: () => import('@/views/crud/slots/search/index.vue'),
    },
    {
      meta: { title: '单元格插槽' },
      name: 'SlotsCell',
      path: '/crud/slots/cell',
      component: () => import('@/views/crud/slots/cell/index.vue'),
    },
    {
      meta: { title: '表单字段插槽' },
      name: 'SlotsFormItem',
      path: '/crud/slots/form-item',
      component: () => import('@/views/crud/slots/form-item/index.vue'),
    },
  ],
};
const advancedRoutes = {
  name: 'Advanced',
  path: '/crud/advanced',
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
      name: 'AdvancedLinkage',
      path: '/crud/advanced/linkage',
      component: () => import('@/views/crud/advanced/linkage/index.vue'),
    },
    {
      meta: {
        title: '后台加载crud',
      },
      name: 'AdvancedFormBackend',
      path: '/crud/advanced/from-backend',
      component: () => import('@/views/crud/advanced/from-backend/index.vue'),
    },
    {
      meta: {
        title: '本地分页',
      },
      name: 'AdvancedLocalPagination',
      path: '/crud/advanced/local-pagination',
      component: () => import('@/views/crud/advanced/local-pagination/index.vue'),
    },
    {
      meta: {
        title: '嵌套子表格',
      },
      name: 'AdvancedNest',
      path: '/crud/advanced/nest',
      component: () => import('@/views/crud/advanced/nest/index.vue'),
    },
    {
      meta: {
        title: '修改布局',
      },
      name: 'AdvancedLayout',
      path: '/crud/advanced/layout',
      component: () => import('@/views/crud/advanced/layout/index.vue'),
    },
    {
      meta: {
        title: '自定义布局',
      },
      name: 'AdvancedCustomLayout',
      path: '/crud/advanced/custom-layout',
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
    name: 'crud',
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

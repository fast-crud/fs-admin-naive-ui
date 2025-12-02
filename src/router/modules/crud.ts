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
  PencilOutline,
} from '@vicons/ionicons5';

const basicRoute: RouteRecordRaw = {
  path: 'basis',
  name: 'Basis',
  redirect: '/crud/basis/compute',
  meta: {
    title: '基本特性',
    icon: renderIcon(DiscOutline),
  },
  component: ParentLayout,
  children: [
    {
      name: 'HelloWorld',
      path: 'helloWorld',
      meta: {
        title: 'HelloWorld',
      },
      component: () => import('@/views/crud/basis/first/index.vue'),
    },
    {
      name: 'BasisCompute',
      path: 'compute',
      meta: {
        title: '动态计算',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/compute/index.vue'),
    },
    {
      name: 'BasisComputeMore',
      path: 'compute-more',
      meta: {
        title: '动态计算-更多示例',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/compute-more/index.vue'),
    },
    {
      name: 'BasisI18n',
      path: 'i18n',
      meta: {
        title: '国际化',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/i18n/index.vue'),
    },
    {
      name: 'BasisValueChange',
      path: 'value-change',
      meta: {
        title: 'ValueChange',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/value-change/index.vue'),
    },
    {
      name: 'BasisLayoutCard',
      path: 'layout-card',
      meta: {
        title: 'Card布局',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/layout-card/index.vue'),
    },
    {
      name: 'BasisLayoutCustom',
      path: 'layout-custom',
      meta: {
        title: '自定义布局',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/layout-custom/index.vue'),
    },
    {
      name: 'BasisCustom',
      path: 'custom',
      meta: {
        title: '自定义组件',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/custom/index.vue'),
    },
    {
      name: 'BasisColumnsSet',
      path: 'columns-set',
      meta: {
        title: '列设置',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/columns-set/index.vue'),
    },
    {
      name: 'BasisColumnMergePlugin',
      path: 'column-merge-plugin',
      meta: {
        title: '字段合并插件',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/column-merge-plugin/index.vue'),
    },
    {
      name: 'BasisReset',
      path: 'reset',
      meta: {
        title: 'ResetCrudOptions',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/reset/index.vue'),
    },
    {
      name: 'BasisPlugin',
      path: 'plugin',
      meta: {
        title: '插件',
        keepAlive: true,
      },
      component: () => import('@/views/crud/basis/plugin/index.vue'),
    },
  ],
};

const rowHandleRoute: RouteRecordRaw = {
  path: 'row-handle',
  name: 'RowHandle',
  redirect: '/crud/row-handle/tooltip',
  meta: {
    title: '操作列',
    icon: renderIcon(DiscOutline),
  },
  component: ParentLayout,
  children: [
    {
      name: 'RowHandleTooltip',
      path: 'tooltip',
      meta: {
        title: 'Tooltip',
        keepAlive: true,
      },
      component: () => import('@/views/crud/row-handle/tooltip/index.vue'),
    },
    {
      name: 'RowHandleDropdown',
      path: 'dropdown',
      meta: {
        title: '按钮折叠',
        keepAlive: true,
      },
      component: () => import('@/views/crud/row-handle/dropdown/index.vue'),
    },
  ],
};
const componentRoute = {
  path: 'component',
  name: 'Component',
  redirect: '/crud/component/text',
  meta: {
    icon: renderIcon(CubeOutline),
    title: '组件示例',
    keepAlive: true,
  },
  component: ParentLayout,
  children: [
    {
      path: 'text',
      name: 'ComponentText',
      meta: {
        title: '文本组件',
        keepAlive: true,
      },
      component: () => import('@/views/crud/component/text/index.vue'),
    },
    {
      name: 'ComponentSelect',
      path: 'select',
      meta: {
        title: '选择(select)',
        keepAlive: true,
      },
      component: () => import('@/views/crud/component/select/index.vue'),
    },
    {
      name: 'ComponentTableSelect',
      path: 'table-select',
      meta: {
        title: '表格选择(table-select)',
        keepAlive: true,
      },
      component: () => import('@/views/crud/component/table-select/index.vue'),
    },
    {
      meta: {
        title: '级联(cascader)',
        keepAlive: true,
      },
      name: 'ComponentCascader',
      path: 'cascader',
      component: () => import('@/views/crud/component/cascader/index.vue'),
    },
    {
      meta: {
        title: '多选(checkbox)',
        keepAlive: true,
      },
      name: 'ComponentCheckbox',
      path: 'checkbox',
      component: () => import('@/views/crud/component/checkbox/index.vue'),
    },
    {
      meta: {
        title: '单选(radio)',
        keepAlive: true,
      },
      name: 'ComponentRadio',
      path: 'radio',
      component: () => import('@/views/crud/component/radio/index.vue'),
    },
    {
      meta: {
        title: '开关(switch)',
        keepAlive: true,
      },
      name: 'ComponentSwitch',
      path: 'switch',
      component: () => import('@/views/crud/component/switch/index.vue'),
    },
    {
      meta: {
        title: '日期时间(date)',
        keepAlive: true,
      },
      name: 'ComponentDate',
      path: 'date',
      component: () => import('@/views/crud/component/date/index.vue'),
    },
    {
      meta: {
        title: '按钮链接',
        keepAlive: true,
      },
      name: 'ComponentButton',
      path: 'button',
      component: () => import('@/views/crud/component/button/index.vue'),
    },
    {
      meta: {
        title: '数字',
        keepAlive: true,
      },
      name: 'ComponentNumber',
      path: 'number',
      component: () => import('@/views/crud/component/number/index.vue'),
    },
    {
      meta: {
        title: '树形选择',
        keepAlive: true,
      },
      name: 'ComponentTree',
      path: 'tree',
      component: () => import('@/views/crud/component/tree/index.vue'),
    },
    {
      meta: {
        title: '图片裁剪上传',
        keepAlive: true,
      },
      name: 'ComponentUploaderCropper',
      path: 'uploader/cropper',
      component: () => import('@/views/crud/component/uploader/cropper/index.vue'),
    },
    {
      meta: {
        title: '表单本地上传',
        keepAlive: true,
      },
      name: 'ComponentUploaderForm',
      path: 'uploader/form',
      component: () => import('@/views/crud/component/uploader/form/index.vue'),
    },
    {
      meta: {
        title: '阿里云oss上传',
        keepAlive: true,
      },
      name: 'ComponentUploaderAlioss',
      path: 'uploader/alioss',
      component: () => import('@/views/crud/component/uploader/alioss/index.vue'),
    },
    {
      meta: {
        title: '腾讯云cos上传',
        keepAlive: true,
      },
      name: 'ComponentUploaderCos',
      path: 'uploader/cos',
      component: () => import('@/views/crud/component/uploader/cos/index.vue'),
    },
    {
      meta: {
        title: '七牛云上传',
        keepAlive: true,
      },
      name: 'ComponentUploaderQiniu',
      path: 'uploader/qiniu',
      component: () => import('@/views/crud/component/uploader/qiniu/index.vue'),
    },
    {
      meta: {
        title: 'S3上传',
        keepAlive: true,
      },
      name: 'ComponentUploaderS3',
      path: 'uploader/s3',
      component: () => import('@/views/crud/component/uploader/s3/index.vue'),
    },
    {
      meta: {
        title: '富文本编辑器',
        keepAlive: true,
      },
      name: 'ComponentEditor',
      path: 'editor',
      component: () => import('@/views/crud/component/editor/index.vue'),
    },
    {
      meta: {
        title: '代码编辑器',
        keepAlive: true,
      },
      name: 'ComponentCode',
      path: 'code',
      component: () => import('@/views/crud/component/code/index.vue'),
    },
    {
      meta: {
        title: '图标',
        keepAlive: true,
      },
      name: 'ComponentIcon',
      path: 'icon',
      component: () => import('@/views/crud/component/icon/index.vue'),
    },
    {
      meta: {
        title: 'JsonEditor',
        keepAlive: true,
      },
      name: 'ComponentJson',
      path: 'json',
      component: () => import('@/views/crud/component/json/index.vue'),
    },
    {
      meta: {
        title: '国际手机号',
        keepAlive: true,
      },
      name: 'ComponentPhone',
      path: 'phone',
      component: () => import('@/views/crud/component/phone/index.vue'),
    },
    {
      meta: {
        title: '组件独立使用',
        keepAlive: true,
      },
      name: 'ComponentIndependent',
      path: 'independent',
      component: () => import('@/views/crud/component/independent/index.vue'),
    },
  ],
};

const dictRoutes = {
  name: 'Dict',
  path: '/crud/dict',
  redirect: '/crud/dict/single',
  meta: {
    title: '数据字典',
    keepAlive: true,
    icon: renderIcon(BookOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '单例',
        keepAlive: true,
      },
      name: 'DictSingle',
      path: 'single',
      component: () => import('@/views/crud/dict/single/index.vue'),
    },
    {
      meta: {
        title: '分发复制',
        keepAlive: true,
      },
      name: 'DictCloneable',
      path: 'cloneable',
      component: () => import('@/views/crud/dict/cloneable/index.vue'),
    },
    {
      meta: {
        title: '原型复制',
        keepAlive: true,
      },
      name: 'DictPrototype',
      path: 'prototype',
      component: () => import('@/views/crud/dict/prototype/index.vue'),
    },
    {
      meta: {
        title: '页面间共享',
        keepAlive: true,
      },
      name: 'DictShared',
      path: 'shared',
      component: ParentLayout,
      children: [
        {
          meta: {
            keepAlive: true,
            title: '共享字典数据管理',
          },
          name: 'DictSharedManager',
          path: 'manager',
          component: () => import('@/views/crud/dict/shared/manager/index.vue'),
        },
        {
          meta: {
            title: '共享字典使用',
            keepAlive: true,
          },
          name: 'DictSharedUse',
          path: 'use',
          component: () => import('@/views/crud/dict/shared/use/index.vue'),
        },
      ],
    },
  ],
};
const formRoutes = {
  name: 'form',
  path: 'form',
  redirect: '/crud/form/layout',
  meta: {
    title: 'Form表单',
    keepAlive: true,
    icon: renderIcon(DocumentOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '基本表单',
        keepAlive: true,
      },
      name: 'FormBase',
      path: 'base',
      component: () => import('@/views/crud/form/base/index.vue'),
    },
    {
      meta: {
        title: '表单Grid布局',
        keepAlive: true,
      },
      name: 'FormLayoutGrid',
      path: 'layout-grid',
      component: () => import('@/views/crud/form/layout-grid/index.vue'),
    },
    {
      meta: {
        title: '表单Flex布局',
        keepAlive: true,
      },
      name: 'FormLayoutFlex',
      path: 'layout-flex',
      component: () => import('@/views/crud/form/layout-flex/index.vue'),
    },
    {
      meta: {
        title: '表单动态布局',
        keepAlive: true,
      },
      name: 'FormLayout',
      path: 'layout',
      component: () => import('@/views/crud/form/layout/index.vue'),
    },
    {
      meta: {
        title: '表单单列模式',
        keepAlive: true,
      },
      name: 'FormSingleColumn',
      path: 'single-column',
      component: () => import('@/views/crud/form/single-column/index.vue'),
    },
    {
      meta: {
        title: '表单校验',
        keepAlive: true,
      },
      name: 'FormValidation',
      path: 'validation',
      component: () => import('@/views/crud/form/validation/index.vue'),
    },
    {
      meta: {
        title: '抽屉表单',
        keepAlive: true,
      },
      name: 'FormDrawer',
      path: 'drawer',
      component: () => import('@/views/crud/form/drawer/index.vue'),
    },
    {
      meta: {
        title: '表单分组',
        keepAlive: true,
      },
      name: 'FormGroup',
      path: 'group',
      component: () => import('@/views/crud/form/group/index.vue'),
    },
    {
      meta: {
        title: '表单分组(tabs)',
        keepAlive: true,
      },
      name: 'FormGroupTabs',
      path: 'group-tabs',
      component: () => import('@/views/crud/form/group-tabs/index.vue'),
    },
    {
      meta: {
        title: '自定义表单',
        keepAlive: true,
      },
      name: 'FormCustomForm',
      path: 'custom-form',
      component: () => import('@/views/crud/form/custom-form/index.vue'),
    },
    {
      meta: {
        title: '字段帮助说明',
        keepAlive: true,
      },
      name: 'FormHelper',
      path: 'helper',
      component: () => import('@/views/crud/form/helper/index.vue'),
    },
    {
      meta: {
        title: '页面内弹出表单',
        keepAlive: true,
      },
      name: 'FormInner',
      path: 'inner',
      component: () => import('@/views/crud/form/inner/index.vue'),
    },
    {
      meta: {
        title: '地区字典管理',
        keepAlive: true,
      },
      name: 'FormInnerArea',
      path: 'inner/area',
      component: () => import('@/views/crud/form/inner/area/index.vue'),
    },
    {
      name: 'FormNewPage',
      path: 'new-page',
      component: () => import('@/views/crud/form/new-page/index.vue'),
      meta: {
        title: '新页面编辑',
        keepAlive: false,
      },
    },
    {
      name: 'FormNewPageEdit',
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
        keepAlive: true,
      },
      name: 'FormIndependent',
      path: 'independent',
      component: () => import('@/views/crud/form/independent/index.vue'),
    },
    {
      meta: {
        title: '表单嵌套数据',
        keepAlive: true,
      },
      name: 'FormNest',
      path: 'nest',
      component: () => import('@/views/crud/form/nest/index.vue'),
    },
    {
      meta: {
        title: '表单字段周围render',
        keepAlive: true,
      },
      name: 'FormRender',
      path: 'render',
      component: () => import('@/views/crud/form/render/index.vue'),
    },
    {
      meta: {
        title: '查看表单使用cell组件',
        keepAlive: true,
      },
      name: 'FormView',
      path: 'view',
      component: () => import('@/views/crud/form/view/index.vue'),
    },
    {
      meta: {
        title: '表单Watch',
        keepAlive: true,
      },
      name: 'FormWatch',
      path: 'view',
      component: () => import('@/views/crud/form/watch/index.vue'),
    },
  ],
};
const featureRoutes = {
  path: 'feature',
  name: 'Feature',
  meta: {
    title: '表格特性',
    keepAlive: true,
    icon: renderIcon(BeerOutline),
  },
  component: ParentLayout,
  redirect: '/crud/feature/dropdown',
  children: [
    {
      meta: {
        title: '部件显隐',
        keepAlive: true,
      },
      name: 'FeatureHide',
      path: 'hide',
      component: () => import('@/views/crud/feature/hide/index.vue'),
    },
    {
      meta: { title: '多选&批量删除', keepAlive: true },
      name: 'FeatureSelection',
      path: 'selection',
      component: () => import('@/views/crud/feature/selection/index.vue'),
    },
    {
      meta: { title: '表头过滤', keepAlive: true },
      name: 'FeatureFilter',
      path: 'filter',
      component: () => import('@/views/crud/feature/filter/index.vue'),
    },
    {
      meta: { title: '行展开', keepAlive: true },
      name: 'FeatureExpand',
      path: 'expand',
      component: () => import('@/views/crud/feature/expand/index.vue'),
    },
    {
      meta: { title: '树形表格', keepAlive: true },
      name: 'FeatureTree',
      path: 'tree',
      component: () => import('@/views/crud/feature/tree/index.vue'),
    },
    {
      meta: { title: '自定义表头', keepAlive: true },
      name: 'FeatureHeader',
      path: 'header',
      component: () => import('@/views/crud/feature/header/index.vue'),
    },
    {
      meta: { title: '多级表头', keepAlive: true },
      name: 'FeatureHeaderGroup',
      path: 'header-group',
      component: () => import('@/views/crud/feature/header-group/index.vue'),
    },
    {
      meta: { title: '合并单元格', keepAlive: true },
      name: 'FeatureMerge',
      path: 'merge',
      component: () => import('@/views/crud/feature/merge/index.vue'),
    },
    {
      meta: { title: '序号', keepAlive: true },
      name: 'FeatureIndex',
      path: 'index',
      component: () => import('@/views/crud/feature/index/index.vue'),
    },
    {
      meta: { title: '排序', keepAlive: true },
      name: 'FeatureSortable',
      path: 'sortable',
      component: () => import('@/views/crud/feature/sortable/index.vue'),
    },
    {
      meta: { title: '固定列', keepAlive: true },
      name: 'FeatureFixed',
      path: 'fixed',
      component: () => import('@/views/crud/feature/fixed/index.vue'),
    },
    {
      meta: { title: '不固定高度', keepAlive: true },
      name: 'FeatureHeight',
      path: 'height',
      component: () => import('@/views/crud/feature/height/index.vue'),
    },
    {
      meta: { title: '查询框', keepAlive: true },
      name: 'FeatureSearch',
      path: 'search',
      component: () => import('@/views/crud/feature/search/index.vue'),
    },
    {
      meta: { title: '查询框多行模式', keepAlive: true },
      name: 'FeatureSearchMulti',
      path: 'search-multi',
      component: () => import('@/views/crud/feature/search-multi/index.vue'),
    },
    {
      meta: { title: 'Tabs快捷查询', keepAlive: true },
      name: 'FeatureTabs',
      path: 'tabs',
      component: () => import('@/views/crud/feature/tabs/index.vue'),
    },
    {
      meta: { title: '字段排序', keepAlive: true },
      name: 'FeatureColumnSort',
      path: 'column-sort',
      component: () => import('@/views/crud/feature/column-sort/index.vue'),
    },
    {
      meta: { title: 'ValueBuilder', keepAlive: true },
      name: 'FeatureValueBuilder',
      path: 'value-builder',
      component: () => import('@/views/crud/feature/value-builder/index.vue'),
    },
    {
      meta: { title: '列设置（简化模式）', keepAlive: true },
      name: 'FeatureColumnsSet',
      path: 'columns-set',
      component: () => import('@/views/crud/feature/columns-set/index.vue'),
    },
    {
      meta: { title: '本地编辑', keepAlive: true },
      name: 'FeatureLocal',
      path: 'local',
      component: () => import('@/views/crud/feature/local/index.vue'),
    },
    {
      meta: { title: 'v-model', keepAlive: true },
      name: 'FeatureLocalVModel',
      path: 'v-model',
      component: () => import('@/views/crud/feature/local-v-model/index.vue'),
    },
    {
      meta: { title: '导入', keepAlive: true },
      name: 'FeatureLocalImport',
      path: 'local-import',
      component: () => import('@/views/crud/feature/local-import/index.vue'),
    },
    {
      meta: { title: '导出', keepAlive: true },
      name: 'FeatureExport',
      path: 'export',
      component: () => import('@/views/crud/feature/export/index.vue'),
    },
    {
      meta: { title: '自定义删除', keepAlive: true },
      name: 'FeatureRemove',
      path: 'remove',
      component: () => import('@/views/crud/feature/remove/index.vue'),
    },
  ],
};

const editableRoute: RouteRecordRaw = {
  path: 'editable',
  name: 'Editable',
  redirect: '/crud/editable/free',
  meta: {
    title: '可编辑',
    icon: renderIcon(PencilOutline),
  },
  component: ParentLayout,
  children: [
    {
      name: 'EditableFree',
      path: 'free',
      meta: {
        title: '自由编辑',
        keepAlive: true,
      },
      component: () => import('@/views/crud/editable/free/index.vue'),
    },
    {
      name: 'EditableRow',
      path: 'row',
      meta: {
        title: '行编辑',
        keepAlive: true,
      },
      component: () => import('@/views/crud/editable/row/index.vue'),
    },

    {
      name: 'EditableCell',
      path: 'cell',
      meta: {
        title: '单元格编辑',
        keepAlive: true,
      },
      component: () => import('@/views/crud/editable/cell/index.vue'),
    },

    {
      name: 'EditableVModel',
      path: 'vmodel',
      meta: {
        title: '子表格编辑',
        keepAlive: true,
      },
      component: () => import('@/views/crud/editable/vmodel/index.vue'),
    },
    {
      name: 'EditableSubCrud',
      path: 'sub-crud',
      meta: {
        title: '子Crud',
        keepAlive: true,
      },
      component: () => import('@/views/crud/editable/sub-crud/index.vue'),
    },
  ],
};
const slotRoutes = {
  name: 'Slots',
  path: 'slots',
  redirect: '/crud/slots/layout',
  meta: {
    title: '插槽',
    keepAlive: true,
    icon: renderIcon(ExtensionPuzzleOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '页面占位插槽',
        keepAlive: true,
      },
      name: 'SlotsLayout',
      path: 'layout',
      component: () => import('@/views/crud/slots/layout/index.vue'),
    },
    {
      meta: { title: '表单占位插槽', keepAlive: true },
      name: 'SlotsForm',
      path: 'form',
      component: () => import('@/views/crud/slots/form/index.vue'),
    },
    {
      meta: { title: '查询字段插槽', keepAlive: true },
      name: 'SlotsSearch',
      path: 'search',
      component: () => import('@/views/crud/slots/search/index.vue'),
    },
    {
      meta: { title: '单元格插槽', keepAlive: true },
      name: 'SlotsCell',
      path: 'cell',
      component: () => import('@/views/crud/slots/cell/index.vue'),
    },
    {
      meta: { title: '表单字段插槽', keepAlive: true },
      name: 'SlotsFormItem',
      path: 'form-item',
      component: () => import('@/views/crud/slots/form-item/index.vue'),
    },
  ],
};
const advancedRoutes = {
  name: 'Advanced',
  path: 'advanced',
  redirect: '/crud/advanced/linkage',
  meta: {
    title: '复杂需求',
    keepAlive: true,
    icon: renderIcon(FlameOutline),
  },
  component: ParentLayout,
  children: [
    {
      meta: {
        title: '选择联动',
        keepAlive: true,
      },
      name: 'AdvancedLinkage',
      path: 'linkage',
      component: () => import('@/views/crud/advanced/linkage/index.vue'),
    },
    {
      meta: {
        title: '后台加载crud',
        keepAlive: true,
      },
      name: 'AdvancedFormBackend',
      path: 'from-backend',
      component: () => import('@/views/crud/advanced/from-backend/index.vue'),
    },
    {
      meta: {
        title: '本地分页',
        keepAlive: true,
      },
      name: 'AdvancedLocalPagination',
      path: 'local-pagination',
      component: () => import('@/views/crud/advanced/local-pagination/index.vue'),
    },
    {
      meta: {
        title: '嵌套子表格',
        keepAlive: true,
      },
      name: 'AdvancedNest',
      path: 'nest',
      component: () => import('@/views/crud/advanced/nest/index.vue'),
    },
    {
      meta: {
        title: '对话框中显示crud',
        keepAlive: true,
      },
      name: 'AdvancedInDialog',
      path: 'in-dialog',
      component: () => import('@/views/crud/advanced/in-dialog/index.vue'),
    },
    {
      meta: {
        title: '修改布局',
        keepAlive: true,
      },
      name: 'AdvancedLayout',
      path: 'layout',
      component: () => import('@/views/crud/advanced/layout/index.vue'),
    },
    {
      meta: {
        title: '自定义布局',
        keepAlive: true,
      },
      name: 'AdvancedCustomLayout',
      path: 'custom-layout',
      component: () => import('@/views/crud/advanced/custom-layout/index.vue'),
    },
    {
      meta: {
        title: '列表以card方式显示',
        keepAlive: true,
      },
      name: 'AdvancedCard',
      path: 'card',
      component: () => import('@/views/crud/advanced/card/index.vue'),
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
const routes = [
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
      rowHandleRoute,
      componentRoute,
      featureRoutes,
      editableRoute,
      formRoutes,
      slotRoutes,
      advancedRoutes,
    ],
  },
];

export default routes;

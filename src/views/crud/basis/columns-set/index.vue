<template>
  <fs-page>
    <template #header>
      <div class="title">
        列设置
        <span class="sub"
          >列设置可以禁用或者隐藏某字段勾选 ，-------> 点击右侧工具条最后一个按钮查看效果</span
        >
      </div>
      <div class="more">
        <a
          target="_blank"
          href="http://fast-crud.docmirror.cn/api/crud-options/toolbar.html#columnsfilter-mode"
          >文档</a
        >
      </div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding" />
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, Ref } from 'vue';
  import createCrudOptions from './crud.jsx';
  import { CrudBinding, useFs } from '@fast-crud/fast-crud';
  import { useMessage } from 'naive-ui';
  export default defineComponent({
    name: 'BasisColumnsSet',
    setup() {
      const { crudRef, crudBinding, crudExpose } = useFs({ createCrudOptions });

      // 页面打开后获取列表数据
      onMounted(() => {
        crudExpose.doRefresh();
      });
      return {
        crudBinding,
        crudRef,
      };
    },
  });
</script>

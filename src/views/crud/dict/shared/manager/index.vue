<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <span class="fs-desc">管理共享字典，此处添加和修改字典，使用页面会实时变化</span>
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useFs } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';

  export default defineComponent({
    name: 'DictSharedManager',
    setup() {
      // crud组件的ref
      const { crudBinding, crudRef, crudExpose } = useFs({ createCrudOptions });

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

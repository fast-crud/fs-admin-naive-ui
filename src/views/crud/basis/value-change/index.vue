<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <n-alert class="ml-1" type="warning" title="打开编辑对话框，然后输入数据查看效果" />
      </template>
    </fs-crud>
  </fs-page>
</template>

<script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { useCrud, useExpose } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';
  export default defineComponent({
    name: 'BasisValueChange',
    setup() {
      // crud组件的ref
      const crudRef = ref();
      // crud 配置的ref
      const crudBinding = ref();
      // 暴露的方法
      const { crudExpose } = useExpose({ crudRef, crudBinding });
      // 你的crud配置
      const { crudOptions, output } = createCrudOptions({ crudExpose });
      // 初始化crud配置
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const { resetCrudOptions } = useCrud({ crudExpose, crudOptions });
      // 你可以调用此方法，重新初始化crud配置
      // resetCrudOptions(options)

      // 页面打开后获取列表数据
      onMounted(() => {
        crudExpose.doRefresh();
      });

      return {
        crudBinding,
        crudRef,
        ...output,
      };
    },
  });
</script>

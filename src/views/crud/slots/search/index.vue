<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <n-alert class="ml-1" type="info" title=" ↑↑↑ 这里演示查询字段通过插槽自定义" />
      </template>
      <template #search_radio="scope">
        <n-input-number
          v-model="scope.form.radio"
          style="width: 200px"
          placeholder="字段插槽自定义"
        />
      </template>
      <template #search-middle="scope">
        <n-form-item label="自定义">
          <n-input v-model:value="scope.form.custom" title="注意：search-middle插槽自定义的内容，无法被重置" placeholder="search-middle插槽" />
        </n-form-item>
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useCrud } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';
  import { useExpose } from '@fast-crud/fast-crud';
  export default defineComponent({
    name: 'SlotsSearch',
    setup() {
      // crud组件的ref
      const crudRef = ref();
      // crud 配置的ref
      const crudBinding = ref();
      // 暴露的方法
      const { expose } = useExpose({ crudRef, crudBinding });
      // 你的crud配置
      const { crudOptions } = createCrudOptions({ expose });
      // 初始化crud配置
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const { resetCrudOptions } = useCrud({ expose, crudOptions });
      // 你可以调用此方法，重新初始化crud配置
      // resetCrudOptions(options)

      // 页面打开后获取列表数据
      onMounted(() => {
        expose.doRefresh();
      });

      return {
        crudBinding,
        crudRef,
      };
    },
  });
</script>

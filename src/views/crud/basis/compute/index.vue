<template>
  <fs-page>
    <template #header>
      <div class="title">
        动态计算
        <fs-icon icon="ion:apps-sharp" :spin="true" />
      </div>
      <div class="more">
        <a target="_blank" href="http://fast-crud.docmirror.cn/guide/advance/compute.html"
          >帮助说明</a
        >
      </div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <n-tooltip>
          我能控制表格显隐
          <template #trigger>
            <div class="ml-5" style="display: flex; width: 200px">
              表格显隐:<n-switch v-model:value="showTableRef" />
            </div>
          </template>
        </n-tooltip>
        <n-alert class="ml-1" type="info">点击下方右边的编辑按钮查看示例效果——————→ ↓↓↓↓↓</n-alert>
      </template>
      <template #form_refSwitch>
        <n-switch v-model:value="showRef" />
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useCrud, useExpose } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';
  export default defineComponent({
    name: 'BasisCompute',
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
      const { resetCrudOptions, appendCrudBinding } = useCrud({ crudExpose, crudOptions });
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

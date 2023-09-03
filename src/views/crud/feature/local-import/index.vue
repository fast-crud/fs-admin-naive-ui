<template>
  <fs-page>
    <template #header>
      <div class="title">将本地crud当做v-model,编辑好之后一并提交，本示例演示import导入</div>
    </template>
    <div style="padding: 30px">
      <n-form ref="formRef" :model="form" laba-width="120px">
        <n-form-item label="姓名">
          <n-input v-model="form.name" />
        </n-form-item>
        <n-form-item label="表格">
          <div style="min-height: 300px; width: 100%">
            <FeatureLocalImportValueInput v-model="form.data" />
          </div>
        </n-form-item>
        <n-form-item>
          <n-button @click="submit">提交</n-button>
        </n-form-item>
      </n-form>
    </div>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import FeatureLocalImportValueInput from './local.vue';
  import { useMessage } from 'naive-ui';

  export default defineComponent({
    name: 'FeatureLocalImport',
    components: { FeatureLocalImportValueInput },
    setup() {
      const form = reactive({
        name: 'test',
        data: [{ name: '初始数据' }],
      });

      const message = useMessage();
      function submit() {
        message.info('submit:' + JSON.stringify(form));
        console.log('submit:', form);
      }
      return {
        form,
        submit,
      };
    },
  });
</script>

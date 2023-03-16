<template>
  <fs-page>
    <template #header>
      <div class="title">
        将本地crud当做v-model,编辑好之后一并提交，你还可以使用行编辑模式，效果更好
      </div>
    </template>
    <div style="padding: 30px">
      <n-form ref="formRef" :model="form" label-width="120px">
        <n-form-item label="姓名">
          <n-input v-model:value="form.name" />
        </n-form-item>
        <n-form-item label="表格">
          <div style="width: 100%">
            <FeatureLocalModelValueInput v-model="form.data" />
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
  import { useMessage } from 'naive-ui';
  import FeatureLocalModelValueInput from './local.vue';
  export default defineComponent({
    name: 'FeatureLocalVModel',
    components: { FeatureLocalModelValueInput },
    setup() {
      const message = useMessage();
      const form = reactive({
        name: 'test',
        data: [{ name: '初始数据' }],
      });

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

<template>
  <fs-page>
    <template #header>
      <div class="title">新页面编辑</div>
    </template>
    <div class="p-5">
      <fs-form ref="formRef" v-bind="formOptions" />
      <div style="margin-top: 10px">
        <n-button v-if="formRef" @click="formRef.submit">保存</n-button>
      </div>
    </div>
  </fs-page>
</template>

<script lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { defineComponent, ref, onMounted } from 'vue';
  import { useCrud, useExpose, useColumns } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';
  import * as api from './api';
  import _ from 'lodash-es';
  import { useMessage } from 'naive-ui';
  import { useTabsViewStore } from '@/store/modules/tabsView';
  export default defineComponent({
    name: 'FormNewPageEdit',
    setup(props, ctx) {
      // crud组件的ref
      const crudRef = ref();
      // crud 配置的ref
      const crudBinding = ref();
      // 暴露的方法
      const { expose } = useExpose({ crudRef, crudBinding });
      // 你的crud配置
      const { crudOptions } = createCrudOptions({ expose });
      // 初始化crud配置
      const { resetCrudOptions } = useCrud({ expose, crudOptions });

      const formRef = ref();
      const formOptions = ref();

      const route = useRoute();
      const router = useRouter();
      const id = route.query.id;
      const message = useMessage();
      if (id) {
        //编辑表单
        formOptions.value = crudBinding.value.editForm;
      } else {
        formOptions.value = crudBinding.value.addForm;
      }
      const doSubmit = formOptions.value.doSubmit;
      const pageStore = useTabsViewStore();

      formOptions.value.doSubmit = (context) => {
        console.log('submit', context);
        doSubmit(context);
        //提交成功后，关闭本页面
        message.success('保存成功');

        pageStore.closeCurrentTab(route);
        router.go(-1);
      };

      const getDetail = async (id) => {
        return await api.GetObj(id);
      };

      onMounted(async () => {
        if (id) {
          //远程获取记录详情
          const detail = await getDetail(id);
          formRef.value.setFormData(detail);
        }
      });

      return {
        crudBinding,
        crudRef,
        formRef,
        formOptions,
      };
    },
  });
</script>

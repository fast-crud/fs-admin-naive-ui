<template>
  <fs-page>
    <template #header>
      <div class="title">独立使用表单</div>
      <div class="more">
        <a target="_blank" href="http://fast-crud.docmirror.cn/api/use.html#useformwrapper">文档</a>
      </div>
    </template>
    <div style="padding: 20px">
      <n-row :gutter="10">
        <n-col :span="12">
          <n-card class="mt-10" title="直接显示表单">
            <fs-form ref="formRef" v-bind="formOptions" />
            <div style="margin-top: 10px">
              <n-button @click="formSubmit">提交表单</n-button>
              <n-button @click="formReset">重置表单</n-button>
              <n-button class="ml-10" @click="setFormDataTest">setFormData</n-button>
            </div>
          </n-card>
        </n-col>
        <n-col span="12">
          <n-card class="mt-10" title="直接打开对话框,无需写 fs-form-wrapper 标签">
            <div style="margin-top: 10px">
              <n-button @click="openFormWrapperNoTag">打开对话框</n-button>
            </div>
          </n-card>
          <n-card class="mt-10" title="打开表单对话框">
            <n-button @click="openFormWrapper">打开表单对话框</n-button>
            <fs-form-wrapper ref="formWrapperRef" v-bind="formWrapperOptions" />
          </n-card>

          <n-card class="mt-10" title="打开表单对话框（复用crudOptions）">
            <n-button @click="openFormWrapper2">打开表单对话框</n-button>
            <fs-form-wrapper ref="formWrapper2Ref" v-bind="formWrapper2Options" />
          </n-card>

          <n-card class="mt-10" title="打开表单对话框【复用crudBinding】">
            <n-button @click="openFormWrapper2">打开表单对话框</n-button>
            <fs-form-wrapper ref="formWrapperRef2" v-bind="formWrapperOptions2" />
          </n-card>
        </n-col>
      </n-row>
    </div>
  </fs-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useMessage } from 'naive-ui';
  import { useColumns, useFormWrapper, useFs } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';

  function createFormOptionsFromCrudOptions(message: any) {
    const { buildFormOptions } = useColumns();
    //可以直接复用crud.js
    const { crudOptions } = createCrudOptions({ message });
    return buildFormOptions(crudOptions);
  }

  function createFormOptions(message: any) {
    // 自定义表单配置
    const { buildFormOptions } = useColumns();
    //使用crudOptions结构来构建自定义表单配置
    return buildFormOptions({
      columns: {
        customField: {
          title: '新表单字段',
          form: {
            component: {
              name: 'n-input',
              vModel: 'value',
              allowClear: true,
            },
            valueBuilder(context) {
              console.log('value builder :', context);
            },
            rules: [{ required: true, message: '此项必填' }],
          },
        },
        groupField: {
          title: '分组字段',
          form: {
            component: {
              name: 'n-input',
              vModel: 'value',
              allowClear: true,
            },
            rules: [{ required: true, message: '此项必填' }],
          },
        },
      },
      form: {
        wrapper: {
          title: '对话框',
        },
        labelCol: { span: 6 },
        group: {
          groups: {
            testGroupName: {
              title: '分组测试',
              columns: ['groupField'],
            },
          },
        },
        async doSubmit({ form }) {
          console.log('form submit:', form);
          message.info('自定义表单提交:' + JSON.stringify(form));
          message.success('保存成功');
        },
      },
    });
  }
  /**
   * 表单直接独立使用
   * */
  function useFormDirect(message: any) {
    const formRef = ref();
    const formOptions = ref();
    formOptions.value = createFormOptions(message);
    formOptions.value.initialForm = { customField: '初始值' };
    function formSubmit() {
      formRef.value.submit();
    }
    function setFormDataTest() {
      formRef.value.setFormData({
        customField: 'test',
      });
    }
    function formReset() {
      formRef.value.reset();
    }
    return {
      formOptions,
      formRef,
      formSubmit,
      formReset,
      setFormDataTest,
    };
  }

  /**
   * 表单对话框独立使用
   * @returns {{formWrapperRef, formWrapperOptions, openFormWrapper: openFormWrapper}}
   */
  function useFormWrapperUsingTag(message: any) {
    const formWrapperRef = ref();
    const formWrapperOptions = ref();
    formWrapperOptions.value = createFormOptions(message);
    formWrapperOptions.value.initialForm = { customField: '初始值' };
    function openFormWrapper() {
      formWrapperRef.value.open(formWrapperOptions.value);
    }
    return {
      formWrapperRef,
      openFormWrapper,
      formWrapperOptions,
    };
  }

  /**
   * 直接使用crudBinding的表单配置
   * @returns {{formWrapperRef2, openFormWrapper2: openFormWrapper2, formWrapperOptions2}}
   */
  function useCrudBindingForm(message: any) {
    const formWrapperRef2 = ref();

    const { crudBinding, crudRef, crudExpose } = useFs({ createCrudOptions });

    // 以下代码实际上== crudBinding.addForm 或者 crudBinding.editForm
    const formWrapperOptions2 = ref({
      ...crudBinding.value.addForm, // 你也可以用editForm
      doSubmit({ form }) {
        //覆盖提交方法
        console.log('form submit:', form);
        message.info('自定义表单提交:' + JSON.stringify(form));
        message.warning('抛出异常可以阻止表单关闭');
        throw new Error('抛出异常可以阻止表单关闭');
      },
      initialForm: { name: '初始值' },
    });
    function openFormWrapper2() {
      formWrapperRef2.value.open(formWrapperOptions2.value);
    }
    return {
      formWrapperRef2,
      openFormWrapper2,
      formWrapperOptions2,
    };
  }

  /**
   * 复用crudOptions 创建表单
   */
  function useCrudOptions(message: any) {
    const formWrapper2Ref = ref();
    const formWrapper2Options = ref();
    formWrapper2Options.value = createFormOptionsFromCrudOptions(message);
    function openFormWrapper2() {
      formWrapper2Ref.value.open(formWrapper2Options.value);
    }
    return {
      formWrapper2Ref,
      openFormWrapper2,
      formWrapper2Options,
    };
  }

  /**
   * 无需写 fs-form-wrapper标签，直接打开对话框
   * 此方式可以层叠打开多个对话框
   */
  function useFormProvider(message: any) {
    const { openDialog } = useFormWrapper();

    async function openFormWrapperNoTag() {
      const opts = createFormOptionsFromCrudOptions(message);
      const wrapperRef = await openDialog(opts);
      console.log('对话框已打开', wrapperRef);
    }
    return {
      openFormWrapperNoTag,
    };
  }

  export default defineComponent({
    name: 'FormIndependent',
    setup() {
      const message = useMessage();
      return {
        ...useFormDirect(message),
        ...useFormWrapperUsingTag(message),
        ...useCrudBindingForm(message),
        ...useCrudOptions(message),
        ...useFormProvider(message),
      };
    },
  });
</script>

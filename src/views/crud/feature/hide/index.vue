<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #header-top>
        <n-card title="部件显隐控制" style="margin-bottom: 20px">
          <div style="max-width: 900px">
            <n-row>
              <n-col :span="2"> 搜索框： </n-col>
              <n-col :span="2">
                <n-switch
                  v-model="crudBinding.search.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
            </n-row>
            <n-row>
              <n-col :span="2"> 动作条： </n-col>
              <n-col :span="2">
                <n-switch
                  v-model="crudBinding.actionbar.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                添加：
                <n-switch
                  v-model="crudBinding.actionbar.buttons.add.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                自定义：
                <n-switch
                  v-model="crudBinding.actionbar.buttons.test.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
            </n-row>
            <n-row>
              <n-col :span="2"> 工具条： </n-col>
              <n-col :span="2">
                <n-switch
                  v-model="crudBinding.toolbar.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                查询：
                <n-switch
                  v-model="crudBinding.toolbar.buttons.search.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                刷新：
                <n-switch
                  v-model="crudBinding.toolbar.buttons.refresh.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                紧凑：
                <n-switch
                  v-model="crudBinding.toolbar.buttons.compact.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                导出：
                <n-switch
                  v-model="crudBinding.toolbar.buttons.export.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                列设置：
                <n-switch
                  v-model="crudBinding.toolbar.buttons.columns.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
            </n-row>
            <n-row>
              <n-col :span="2"> 表格： </n-col>
              <n-col :span="2">
                <n-switch
                  v-model="crudBinding.table.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
            </n-row>
            <n-row>
              <n-col :span="2"> 操作列： </n-col>
              <n-col :span="2">
                <n-switch
                  v-model="crudBinding.rowHandle.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                查看：
                <n-switch
                  v-model="crudBinding.rowHandle.buttons.view.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                修改：
                <n-switch
                  v-model="crudBinding.rowHandle.buttons.edit.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                删除：
                <n-switch
                  v-model="crudBinding.rowHandle.buttons.remove.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
              <n-col :span="3">
                自定义：
                <n-switch
                  v-model="crudBinding.rowHandle.buttons.custom.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
            </n-row>
            <n-row>
              <n-col :span="2"> 翻页： </n-col>
              <n-col :span="2">
                <n-switch
                  v-model="crudBinding.pagination.show"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </n-col>
            </n-row>
          </div>
        </n-card>
      </template>
    </fs-crud>
  </fs-page>
</template>

<script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { useCrud } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';
  import { useExpose } from '@fast-crud/fast-crud';

  export default defineComponent({
    name: 'FeatureHide',
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

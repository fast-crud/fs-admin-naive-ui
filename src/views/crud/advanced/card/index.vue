<template>
  <fs-crud ref="crudRef" v-bind="crudBinding">
    <n-row
      v-if="crudBinding?.data?.length > 0"
      gutter="10"
      style="height: 100%; width: 100%; overflow: auto"
    >
      <n-col
        v-for="(item, index) of crudBinding.data"
        :key="item.id"
        :span="6"
        style="margin-bottom: 10px"
      >
        <n-card :title="item.title">
          {{ item.content }}
          <template #header-extra> 操作 </template>
          <template #action>
            <div style="display: flex; justify-content: space-evenly">
              <fs-icon icon="ion:eye-outline" @click="openView({ index: index, row: item })" />
              <fs-icon icon="ion:create-outline" @click="openEdit({ index: index, row: item })" />
              <fs-icon icon="ion:trash-outline" @click="doRemove({ index: index, row: item })" />
            </div>
          </template>
        </n-card>
      </n-col>
    </n-row>
  </fs-crud>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useFsAsync, useFsRef } from '@fast-crud/fast-crud';
  import createCrudOptions from './crud';

  const { crudRef, crudBinding, crudExpose, context } = useFsRef();

  // 页面打开后获取列表数据
  onMounted(async () => {
    await useFsAsync({ crudBinding, crudRef, crudExpose, context, createCrudOptions });

    await crudExpose.doRefresh();
  });

  function openView(opts: any) {
    crudExpose.openView(opts);
  }
  function openEdit(opts: any) {
    crudExpose.openEdit(opts);
  }
  function doRemove(opts: any) {
    crudExpose.doRemove(opts);
  }
</script>

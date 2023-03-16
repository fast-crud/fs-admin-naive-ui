<template>
  <fs-page>
    <template #header>
      <div class="title">
        对话框中显示crud
      </div>
    </template>
    <div style="padding:50px">
      <n-button type="primary" @click="openDialog">打开对话框</n-button>
    </div>

    <n-modal v-model:show="dialogShow" preset="dialog" style="width:80%" title="fs-crud in dialog">
      <div style="height: 400px;">
        <fs-in-dialog ></fs-in-dialog>
      </div>
      <template #footer>
        <n-button @click="dialogShow=false" type="primary">确定</n-button>
      </template>
    </n-modal>
  </fs-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FsInDialog from './crud/index.vue'
export default defineComponent({
  name: "InDialog",
  components:{FsInDialog},
  setup() {
    const dialogShow = ref(false)
    function openDialog(){
      dialogShow.value=true
    }
    return {
      dialogShow,
      openDialog
    };
  }
});
</script>

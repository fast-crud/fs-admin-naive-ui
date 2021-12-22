<template></template>
<script lang="ts">
  import { useMessage } from 'naive-ui';
  import UiNaive from '@fast-crud/ui-naive';
  export default {
    name: 'MessageContent',
    setup() {
      //挂载在 window 方便与在js中使用
      window['$message'] = useMessage();

      // add by fast-curd, 初始化ui，必须写在setup里面,获取message实例
      UiNaive.init();
    },
  };
</script>

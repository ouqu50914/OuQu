<template>
  <div id="nav">
    <mt-navbar class="page-part" :selected.sync="selected">
      <mt-tab-item id="1">图片新闻</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
      <mt-tab-item id="4">选项四</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>

</style>

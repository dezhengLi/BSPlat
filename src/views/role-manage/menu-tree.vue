<template lang="pug">
  div(class="menu-side--container")
    el-tree(:data="tree")
</template>

<script>
  export default {
    props: {
      tree: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style></style>

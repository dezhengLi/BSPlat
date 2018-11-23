<template lang="pug">
  section(class="app-main")
    transition(name="fade")
      router-view(class="container")
</template>

<style lang="scss">
  .app-main {
    min-height: calc(100vh - 50px);
    position: relative;
    overflow: hidden;
    .container {
      position: absolute;
      background: #fff;
      width: 100%;
    }
  }
</style>

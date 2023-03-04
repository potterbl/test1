<template>
  <div class="content__wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "content-block",
};
</script>

<style scoped>
.content__wrapper {
  position: relative;
  top: 0;
  left: 300px;
  width: calc(100vw - 300px);
  height: calc(100vh - 200px);
}

.content {
  width: calc(100% - 200px);
  height: calc(100% - 100px);
  margin: 100px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

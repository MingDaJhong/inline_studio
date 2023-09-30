<template>
  <div>
    <opening />
    <nav-bar />
    <div class="main-container">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  position: absolute;
  top: 80px;
  left: 0px;
  width: 100%;
  height: calc(100% - 80px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

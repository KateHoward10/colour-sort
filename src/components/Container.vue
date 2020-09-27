<template>
  <div class="container">
    <div class="ball" v-for="(ball, index) in contents" :key="index" :style="{ background: ball }"></div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    contents: Array
  }
}
</script>

<style scoped>
  .container {
    width: 40px;
    height: 160px;
    border: 2px solid #fff;
    border-top: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: 20px;
  }
  .ball {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid grey;
    margin: 1px;
  }
</style>

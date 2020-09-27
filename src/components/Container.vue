<template>
  <div class="container">
    <Ball v-for="(colour, index) in contents" :key="index" :colour="colour" />
  </div>
</template>

<script>
import Ball from './Ball.vue'

export default {
  name: 'Container',
  props: {
    contents: Array
  },
  components: {
    Ball
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
</style>

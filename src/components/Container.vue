<template>
  <div class="container" @click="onClick">
    <Ball
      v-for="(colour, index) in contents"
      :key="index"
      :colour="colour"
      :yOffset="isSelected && index === 0 ? (5 - contents.length) * 40 : 0"
    />
  </div>
</template>

<script>
import Ball from './Ball.vue'

export default {
  name: 'Container',
  props: {
    contents: Array,
    onClick: Function,
    isSelected: Boolean,
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
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
  }
</style>

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
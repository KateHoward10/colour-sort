<template>
  <wrapper @click="onClick">
    <Ball
      v-for="(colour, index) in contents"
      :key="index"
      :colour="colour"
      :yOffsetMultiplier="isSelected && index === 0 ? (5 - contents.length) : 0"
    />
  </wrapper>
</template>

<script>
import Ball from './Ball.vue'
import styled from "vue3-styled-components"

const Wrapper = styled('div')`
  width: 24px;
  height: 96px;
  border: 2px solid #fff;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 20px 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  @media screen and (min-width: 500px) {
    width: 40px;
    height: 160px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: 30px 20px;
  }
`

export default {
  name: 'Container',
  props: {
    contents: Array,
    onClick: Function,
    isSelected: Boolean,
  },
  components: {
    Wrapper,
    Ball
  }
}
</script>
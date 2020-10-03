<template>
  <div
    class="ball"
    :style="{
      background: `radial-gradient(circle at 10px 10px, ${colour}, #222)`,
      transform: `translateY(-${yOffset}px)`
    }"
  >
  </div>
</template>

<script>
export default {
  name: 'Ball',
  props: {
    colour: String,
    yOffset: Number
  }
}
</script>

<style scoped>
  .ball {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #222;
  }
</style>

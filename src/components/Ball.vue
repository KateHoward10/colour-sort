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
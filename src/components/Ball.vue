<template>
  <div class="ball" :style="{ background: colour }">
  </div>
</template>

<script>
export default {
  name: 'Ball',
  props: {
    colour: String
  }
}
</script>

<style scoped>
  .ball {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid grey;
    margin: 1px;
  }
</style>

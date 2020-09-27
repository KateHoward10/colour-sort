<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: { }
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

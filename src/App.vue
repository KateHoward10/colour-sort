<template>
  <div id="app">
    <Container />
    <Container />
    <Container />
    <Container />
  </div>
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #111;
  min-height: 100vh;
  text-align: center;
  padding: 60px;
  display: flex;
  justify-content: center;
}
</style>

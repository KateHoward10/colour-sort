<template>
  <div id="app">
    <Container v-for="(contents, index) in currentOrder" :key="index" :contents="contents" />
  </div>
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'App',
  data() {
    return {
      colours: ['red', 'blue', 'green'],
      currentOrder: [],
    }
  },
  created() {
    let allColours = this.colours;
    for (let i = 0; i < this.colours.length; i++) allColours = [...allColours, ...this.colours];
    const randomised = allColours.sort(() => Math.random() - 0.5);
    this.currentOrder = [...this.colours.map((c, i) => randomised.slice(i*4, i*4+4)), []];
  },
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

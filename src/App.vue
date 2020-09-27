<template>
  <div id="app">
    <Container
      v-for="(contents, index) in currentOrder"
      :key="index"
      :contents="contents"
      :onClick="() => selectContainer(index)"
      :isSelected="selected === index"
    />
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
      selected: null,
    }
  },
  methods: {
    selectContainer(index) {
      if (this.selected === null) {
        if (this.currentOrder[index].length) this.selected = index;
      } else {
        if (this.currentOrder[index].length < 4 && index !== this.selected) {
          const ballToMove = this.currentOrder[this.selected].shift();
          this.currentOrder[index] = [ballToMove, ...this.currentOrder[index]];
        }
        this.selected = null;
      }
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

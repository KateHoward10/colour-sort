<template>
  <div id="app">
    <button @click="start">Start</button>
    <div class="wrapper">
      <Container
        v-for="(contents, index) in currentOrder"
        :key="index"
        :contents="contents"
        :onClick="() => selectContainer(index)"
        :isSelected="selected === index"
      />
    </div>
    <h2 v-if="win">You win!</h2>
  </div>
</template>

<script>
import Container from './components/Container.vue'

export default {
  name: 'App',
  data() {
    return {
      colours: ['red', 'blue', 'green'],
      currentOrder: [[],[],[],[]],
      selected: null,
      win: false
    }
  },
  methods: {
    start() {
      this.win = false;
      this.selected = null;
      let allColours = this.colours;
      for (let i = 0; i < this.colours.length; i++) allColours = [...allColours, ...this.colours];
      const randomised = allColours.sort(() => Math.random() - 0.5);
      this.currentOrder = [...this.colours.map((c, i) => randomised.slice(i*4, i*4+4)), []];
    },
    selectContainer(index) {
      if (this.selected === null) {
        if (this.currentOrder[index].length) this.selected = index;
      } else {
        if (this.canMoveBall(index)) {
          const ballToMove = this.currentOrder[this.selected].shift();
          this.currentOrder[index] = [ballToMove, ...this.currentOrder[index]];
        }
        this.selected = null;
        if (this.hasWon()) this.win = true;
      }
    },
    canMoveBall(index) {
      return index !== this.selected &&
        this.currentOrder[index].length < 4 && (
          !this.currentOrder[index].length ||
          this.currentOrder[index][0] === this.currentOrder[this.selected][0]
        );
    },
    hasWon() {
      return this.currentOrder.every(contents => {
        return !contents.length || (contents.length === 4 && contents.every(colour => colour === contents[0]));
      });
    }
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
  color: #fff;
}
.wrapper {
  display: flex;
  justify-content: center;
}
button {
  font-size: 18px;
  text-transform: uppercase;
  background-color: #fff;
  border: none;
  margin: 30px;
}
</style>

<template>
  <div id="app">
    <select v-model="level">
      <option v-for="value in [3,4,5,6]" :key="value" :value="value">
        {{ value }} colours
      </option>
    </select>
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
      level: 3,
      colours: ['red', 'blue', 'green', 'yellow', 'violet', 'deepskyblue'],
      currentOrder: [],
      selected: null,
      win: false
    }
  },
  methods: {
    start() {
      this.win = false;
      this.selected = null;
      const levelColours = this.colours.slice(0, this.level);
      let allColours = levelColours;
      for (let i = 0; i < 3; i++) allColours = [...allColours, ...levelColours];
      const randomised = allColours.sort(() => Math.random() - 0.5);
      this.currentOrder = [
        ...levelColours.map((c, index) => randomised.slice(index*4, (index*4)+4)),
        ...Array.from(Array(Math.floor(this.level / 5)+1)).fill([])
      ];
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
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}
button, select {
  font-size: 18px;
  background-color: #fff;
  border: none;
  margin: 20px;
}
</style>

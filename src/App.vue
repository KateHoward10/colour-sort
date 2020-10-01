<template>
  <div id="app">
    <div>Score: {{ score }}</div>
    <select v-model="level">
      <option v-for="value in [3,4,5,6]" :key="value" :value="value">
        {{ value }} colours
      </option>
    </select>
    <button @click="start">Start</button>
    <button :disabled="cannotAddContainer()" @click="addContainer">Add container (-10)</button>
    <div class="wrapper">
      <Container
        v-for="(contents, index) in containers"
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
      containers: [[],[],[],[]],
      selected: null,
      win: false,
      score: +localStorage.getItem("score") || 0,
      hasAddedContainer: false
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
      this.containers = [
        ...levelColours.map((c, index) => randomised.slice(index*4, (index*4)+4)),
        ...Array.from(Array(Math.floor(this.level / 5)+1)).fill([])
      ];
    },
    selectContainer(index) {
      if (this.selected === null) {
        // Pick up ball
        if (this.containers[index].length) this.selected = index;
      } else {
        if (this.canMoveBall(index)) {
          // Remove ball from its current container...
          const ballToMove = this.containers[this.selected].shift();
          // ...and add it to the selected one
          this.containers[index] = [ballToMove, ...this.containers[index]];
        }
        this.selected = null;
        if (this.hasWon()) {
          this.win = true;
          this.score += 50;
          localStorage.setItem("score", this.score);
        }
      }
    },
    addContainer() {
      this.containers.push([]);
      this.score -= 10;
      this.hasAddedContainer = true;
    },
    canMoveBall(index) {
      // If it's not the same container that the ball came from...
      return index !== this.selected &&
        // ...and it's not full...
        this.containers[index].length < 4 && (
          // ...and it's either completely empty...
          !this.containers[index].length ||
          // ...or the top ball colour matches the selected ball
          this.containers[index][0] === this.containers[this.selected][0]
        );
    },
    hasWon() {
      return this.containers.every(contents => {
        return !contents.length || (contents.length === 4 && contents.every(colour => colour === contents[0]));
      });
    },
    cannotAddContainer() {
      return this.hasAddedContainer || this.win || !this.containers.toString().replace(/,/g,'') || this.score < 10;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  background-color: #111;
  border: 2px solid #fff;
  margin: 20px;
}
button {
  border-radius: 15px;
  padding: 2px 10px;
  cursor: pointer;
}
</style>

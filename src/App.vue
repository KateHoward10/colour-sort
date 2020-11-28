<template>
  <div id="app">
    <p>{{ win ? `Solved in ${totalMoves} moves` : `Total moves: ${totalMoves}`}}</p>
    <select v-model="level">
      <option v-for="value in [4, 5, 6, 7, 8, 9, 10]" :key="value" :value="value">
        {{ value }} colours
      </option>
    </select>
    <button v-if="notPlaying" @click="start" class="start-button">New game</button>
    <button v-else @click="restart" class="start-button">Restart</button>
    <button :disabled="!moves.length || win" @click="undo">Undo</button>
    <button :disabled="cannotAddContainer()" @click="addContainer">Add container</button>
    <Instructions />
    <div class="wrapper">
      <Container
        v-for="(contents, index) in containers"
        :key="index"
        :contents="contents"
        :onClick="() => selectContainer(index)"
        :isSelected="selected === index"
      />
    </div>
  </div>
</template>

<script>
import Instructions from './components/Instructions.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  data() {
    return {
      level: 4,
      colours: ['#FF0000', '#3BB9FF', '#FFFF00', '#00FF00', '#6C2DC7', '#2B60DE', '#F87217', '#008000', '#F660AB', '#808080'],
      containers: JSON.parse(localStorage.getItem('initial')) || [[],[],[],[], []],
      selected: null,
      win: false,
      hasAddedContainer: false,
      moves: [],
      totalMoves: 0
    }
  },
  mounted() {
    if (localStorage.level) this.level = localStorage.level;
  },
  watch: {
    level(newLevel) {
      localStorage.level = newLevel;
    }
  },
  computed: {
    notPlaying: function() {
      return this.win || !this.containers.toString().replace(/,/g,'');
    }
  },
  methods: {
    start() {
      this.win = false;
      this.selected = null;
      this.hasAddedContainer = false;
      this.moves = [];
      this.totalMoves = 0;
      const levelColours = this.colours.slice(0, this.level);
      let allColours = levelColours;
      for (let i = 0; i < 3; i++) allColours = [...allColours, ...levelColours];
      const randomised = allColours.sort(() => Math.random() - 0.5);
      this.containers = [
        ...levelColours.map((c, index) => randomised.slice(index * 4, (index * 4) + 4)),
        ...Array.from(Array(Math.floor(this.level / 5.5) + 1)).fill([])
      ];
      localStorage.setItem('initial', JSON.stringify(this.containers));
    },
    restart() {
      this.containers = JSON.parse(localStorage.getItem('initial'));
      this.selected = null;
      this.moves = [];
      this.totalMoves = 0;
    },
    selectContainer(index) {
      if (this.selected === null) {
        // Pick up ball
        if (this.containers[index].length) this.selected = index;
      } else {
        if (this.canMoveBall(index)) {
          const selected = this.selected;
          // Remove ball from its current container...
          const ballToMove = this.containers[selected].shift();
          // ...and add it to the selected one
          this.containers[index] = [ballToMove, ...this.containers[index]];
          this.moves.push({ from: selected, to: index });
          this.totalMoves++;
          this.selected = index;
        }
        setTimeout(() => this.selected = null, 100);
        if (this.hasWon()) this.win = true;
      }
    },
    addContainer() {
      this.containers.push([]);
      this.hasAddedContainer = true;
    },
    undo() {
      const { from, to } = this.moves[this.moves.length - 1];
      const ballToMove = this.containers[to].shift();
      this.containers[from] = [ballToMove, ...this.containers[from]];
      this.selected = null;
      this.moves.pop();
      this.totalMoves++;
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
      return this.hasAddedContainer || this.notPlaying;
    }
  },
  components: {
    Instructions,
    Container
  }
}
</script>
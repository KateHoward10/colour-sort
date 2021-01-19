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
    <button :disabled="cannotAddContainer" @click="addContainer">Add container</button>
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
import { ref, computed, onMounted, watch } from 'vue';
import Instructions from './components/Instructions.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  setup() {
    const level = ref(4);
    const colours = ref(['#FF0000', '#3BB9FF', '#FFFF00', '#00FF00', '#6C2DC7', '#2B60DE', '#F87217', '#008000', '#F660AB', '#808080']);
    const containers = ref(JSON.parse(localStorage.getItem('initial')) || [[],[],[],[], []]);
    const selected = ref(null);
    const win = ref(false);
    const hasAddedContainer = ref(false);
    const moves = ref([]);
    const totalMoves = ref(0);

    const notPlaying = computed(function() {
      return win.value || !containers.value.toString().replace(/,/g,'');
    })

    const hasWon = computed(function() {
      return containers.value.every(contents => {
        return !contents.length || (contents.length === 4 && contents.every(colour => colour === contents[0]));
      });
    })

    const cannotAddContainer = computed(function() {
      return hasAddedContainer.value || notPlaying.value;
    })

    function start() {
      win.value = false;
      selected.value = null;
      hasAddedContainer.value = false;
      moves.value = [];
      totalMoves.value = 0;
      const levelColours = colours.value.slice(0, level.value);
      let allColours = levelColours;
      for (let i = 0; i < 3; i++) allColours = [...allColours, ...levelColours];
      const randomised = allColours.sort(() => Math.random() - 0.5);
      containers.value = [
        ...levelColours.map((c, index) => randomised.slice(index * 4, (index * 4) + 4)),
        ...Array.from(Array(Math.floor(level.value / 5.5) + 1)).fill([])
      ];
      localStorage.setItem('initial', JSON.stringify(containers.value));
    }

    function restart() {
      containers.value = JSON.parse(localStorage.getItem('initial'));
      selected.value = null;
      moves.value = [];
      totalMoves.value = 0;
    }

    function selectContainer(index) {
      if (selected.value === null) {
        // Pick up ball
        if (containers.value[index].length) selected.value = index;
      } else {
        if (canMoveBall(index)) {
          const current = selected.value;
          // Remove ball from its current container...
          const ballToMove = containers.value[current].shift();
          // ...and add it to the selected one
          containers.value[index] = [ballToMove, ...containers.value[index]];
          moves.value.push({ from: current, to: index });
          totalMoves.value++;
          selected.value = index;
        }
        setTimeout(() => selected.value = null, 100);
        if (hasWon.value) win.value = true;
      }
    }

    function addContainer() {
      containers.value.push([]);
      hasAddedContainer.value = true;
    }

    function undo() {
      const { from, to } = moves.value[moves.value.length - 1];
      const ballToMove = containers.value[to].shift();
      containers.value[from] = [ballToMove, ...containers.value[from]];
      selected.value = null;
      moves.value.pop();
      totalMoves.value++;
    }

    function canMoveBall(index) {
      // If it's not the same container that the ball came from...
      return index !== selected.value &&
        // ...and it's not full...
        containers.value[index].length < 4 && (
          // ...and it's either completely empty...
          !containers.value[index].length ||
          // ...or the top ball colour matches the selected ball
          containers.value[index][0] === containers.value[selected.value][0]
        );
    }

    onMounted(() => {
      if (localStorage.getItem('level')) level.value = +localStorage.getItem('level');
    })

    watch(level, (level, prevLevel) => {
      if (level !== prevLevel) localStorage.setItem('level', level);
    })

    return {
      level,
      colours,
      containers,
      selected,
      win,
      hasAddedContainer,
      moves,
      totalMoves,
      notPlaying,
      hasWon,
      cannotAddContainer,
      start,
      restart,
      selectContainer,
      addContainer,
      undo,
      canMoveBall
    }
  },
  components: {
    Instructions,
    Container
  }
}
</script>
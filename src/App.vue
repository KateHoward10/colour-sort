<template>
  <theme-provider>
    <p>{{ hasSolved ? `Solved in ${totalMoves} moves` : `Total moves: ${totalMoves}`}}</p>
    <div class="wrapper">
      <select v-model="level" :disabled="!notPlaying">
        <option v-for="value in [4, 5, 6, 7, 8, 9, 10]" :key="value" :value="value">
          {{ value }} colours
        </option>
      </select>
      <Button v-if="notPlaying" @click="start" large :colour="colours[0]">New game</Button>
      <Button v-else @click="restart" large :colour="colours[0]">Restart</Button>
      <Button :disabled="!moves.length || hasSolved" @click="undo" :colour="colours[1]">Undo</Button>
      <Button :disabled="cannotAddContainer" @click="addContainer" :colour="colours[2]">Add container</Button>
      <Instructions :buttonColour="colours[3]" />
    </div>
    <div class="wrapper">
      <Container
        v-for="(contents, index) in containers"
        :key="index"
        :contents="contents"
        :onClick="() => selectContainer(index)"
        :isSelected="selected === index"
      />
    </div>
  </theme-provider>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { ThemeProvider } from 'vue3-styled-components'
import Instructions from './components/Instructions.vue'
import Container from './components/Container.vue'
import Button from './components/Button.vue'
import container_filled from './assets/container_filled.wav'
import solved from './assets/solved.wav'
const containerSound = new Audio(container_filled)
const solvedSound = new Audio(solved)

export default {
  name: 'App',
  setup() {
    const level = ref(4);
    const containers = ref(JSON.parse(localStorage.getItem('initial')) || []);
    const selected = ref(null);
    const hasAddedContainer = ref(false);
    const moves = ref([]);
    const totalMoves = ref(0);
    const colours = ['#00FF00', '#FF0000', '#3BB9FF', '#FFFF00', '#6C2DC7', '#2B60DE', '#F87217', '#008000', '#F660AB', '#808080'];

    const notPlaying = computed(function() {
      return hasSolved.value || !containers.value.toString().replace(/,/g,'');
    })

    const hasSolved = computed(function() {
      return containers.value.every(contents => {
        return !contents.length || isFilled(contents);
      });
    })

    const cannotAddContainer = computed(function() {
      return hasAddedContainer.value || notPlaying.value;
    })

    function start() {
      containers.value = [];
      selected.value = null;
      hasAddedContainer.value = false;
      moves.value = [];
      totalMoves.value = 0;
      const levelColours = colours.slice(0, level.value);
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
        if (hasSolved.value) {
          solvedSound.play();
        } else if (isFilled(containers.value[index])) {
          if (containerSound.currentTime > 0 && !containerSound.ended) {
            const newSound = new Audio(container_filled);
            newSound.play();
          } else {
            containerSound.play();
          }
        }
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

    function isFilled(container) {
      return container.length === 4 && container.every(colour => colour === container[0]);
    }

    onMounted(() => {
      if (localStorage.getItem('level')) level.value = +localStorage.getItem('level');
      start();
    })

    watch(level, (level, prevLevel) => {
      if (level !== prevLevel) localStorage.setItem('level', level);
    })

    return {
      level,
      colours,
      containers,
      selected,
      moves,
      totalMoves,
      notPlaying,
      hasSolved,
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
    Container,
    Button,
    ThemeProvider
  }
}
</script>
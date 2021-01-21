<template>
  <span>
    <button v-if="open" @click="open = false">Close</button>
    <button v-else @click="open = true">How to play</button>
    <div v-if="open">
      <p>The aim is to get all balls of each colour in their own container.</p>
      <p>A ball can only be moved into an empty container, or on top of another of the same colour.</p>
      <p>To pick up a ball, click on its container, and then click on the container you wish to move it to.</p>
    </div>
  </span>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Instructions',
  setup() {
    const open = ref(false);
    return { open };
  }
}
</script>
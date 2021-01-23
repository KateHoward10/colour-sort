<template>
  <span>
    <Button v-if="open" @click="open = false" :colour="buttonColour">Close</Button>
    <Button v-else @click="open = true" :colour="buttonColour">How to play</Button>
  </span>
  <div v-if="open">
    <p>The aim is to get all balls of each colour in their own container.</p>
    <p>A ball can only be moved into an empty container, or on top of another ball of the same colour.</p>
    <p>To pick up a ball, click on its container, and then click on the container you wish to move it to.</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import Button from './Button.vue'

export default {
  name: 'Instructions',
  props: {
    buttonColour: String,
  },
  setup() {
    const open = ref(false);
    return { open };
  },
  components: {
    Button
  }
}
</script>
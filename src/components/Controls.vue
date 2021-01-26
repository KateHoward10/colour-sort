<template>
  <Container>
    <label><input type="checkbox" :checked="soundOn" @change="toggleSound"> Sound</label>
    <StyledButton v-if="open" @click="open = false" :colour="buttonColour">Close</StyledButton>
    <StyledButton v-else @click="open = true" :colour="buttonColour">How to play</StyledButton>
  </Container>
  <div v-if="open">
    <p>The aim is to get all balls of each colour in their own container.</p>
    <p>A ball can only be moved into an empty container, or on top of another ball of the same colour.</p>
    <p>To pick up a ball, click on its container, and then click on the container you wish to move it to.</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import styled from "vue3-styled-components"
import Button from './Button.vue'

const Container = styled('div')`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  margin: 0;
`

export default {
  name: 'Controls',
  props: {
    buttonColour: String,
    soundOn: Boolean,
    toggleSound: Function
  },
  setup() {
    const open = ref(false);
    return { open };
  },
  components: {
    Container,
    StyledButton
  }
}
</script>
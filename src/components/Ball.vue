<script>
import styled from "vue3-styled-components";

const props = {
  colour: String,
  yOffsetMultiplier: Number
}

const Ball = styled('div', props)`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #222;
  background: radial-gradient(circle at 5px 5px, ${props => props.colour}, #222);
  transition: all 0.1s bounce;
  transform: translateY(-${props => props.yOffsetMultiplier * 24}px);
  @media screen and (min-width: 500px) {
    width: 38px;
    height: 38px;
    background: radial-gradient(circle at 10px 10px, ${props => props.colour}, #222);
    transform: translateY(-${props => props.yOffsetMultiplier * 40}px);
  }  
`;

export default Ball
</script>
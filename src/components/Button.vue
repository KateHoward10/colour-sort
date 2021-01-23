<script>
import styled from "vue3-styled-components"

const props = {
  large: Boolean,
  colour: String
}

const Button = styled('button', props)`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: ${props => props.large ? 14 : 12}px;
  font-weight: ${props => props.large ? 'bold' : 'normal'};
  color: #fff;
  background-color: #111;
  border: 2px solid ${props => props.colour || '#fff'};
  margin: 8px;
  border-radius: 15px;
  padding: 2px ${props => props.large ? 14 : 10}px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 500px) {
    font-size: ${props => props.large ? 18 : 16}px;
    margin: 16px;
  }  
`

export default Button
</script>
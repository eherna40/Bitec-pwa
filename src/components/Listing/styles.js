import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
opacity: 0;
    animation-duration: 0.3s;
  animation-delay: ${props => props.idx * 0.4+ 's'};
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`


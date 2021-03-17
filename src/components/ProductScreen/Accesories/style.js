import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: -10px;
  }
  100% {
    opacity: .1;
     left: 15px;
  }
`

export const Title = styled.div`
    opacity: 0;
    top: -40px;
    left: 15px;
     animation: 1s ${fadeIn} ease-out;
     animation-fill-mode: forwards;
`



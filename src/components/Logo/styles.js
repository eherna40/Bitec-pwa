import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
      transform: translateX(0px)
  }
`
export const Image = styled.img`
    width: ${props => props.size === 'small' ? '100px' : '400px'};
    animation-duration: 1s;
    animation-name: ${fadeIn};
`
import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {
    left: -60px;
  }
  100% {
    left: 0px;
  }
`

export const Container = styled.div`
    width: 65px;
          animation-duration: 0.3s;
  animation-name: ${fadeIn};
`

export const Content = styled.div`
    transform: rotate(-90deg);
`;



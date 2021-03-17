import styled, { keyframes } from 'styled-components'

const skBouncedelay = keyframes`
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const SpinnerLoader = styled.div`
  & {
    width: 70px;
    text-align: center;
  }

  & > div {
    width: ${(props) => (props.size === 'small' ? '10px' : '18px')};
    height: ${(props) => (props.size === 'small' ? '10px' : '18px')};
    background-color: ${(props) => props.color};

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
    animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`

export { SpinnerLoader }

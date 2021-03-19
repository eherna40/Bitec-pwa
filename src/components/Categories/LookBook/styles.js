import styled from "styled-components";

export const Content = styled.div`
    &::after{
        content: '';
    position: absolute;
    left: -20px;
    top: 5px;
    width: 1px;
    height: 100px;
    background-color: #e9a065;
    -moz-transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    }
`
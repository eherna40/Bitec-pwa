import styled from "styled-components";

export const Number = styled.div`
    &::before{
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 29px;
    height: 1px;
    background-color: #e9a065;
    }
`


export const Strip = styled.div`
    left: 0px;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
}
`
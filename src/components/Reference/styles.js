import styled from "styled-components";

export const Container = styled.div`
    position: ${props => props.absolute ? 'absolute' : 'relative'};
    bottom: ${props => props.absolute ? '10px' : '0px'};
    right: ${props => props.absolute ? '10px' : '0px'};

`

export const Line = styled.div`
    height: 2px;
    width: 20px;
        margin-right: 4;
    bottom: 3px;
`
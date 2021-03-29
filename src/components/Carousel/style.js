import styled from "styled-components";
import colors from'../../styles/colors'
export const Group = styled.div`
& .carousel__dot {
    width: 9px;
    height: 9px;
    background-color: ${colors.primary};
    margin: 0 5px;
    border-radius: 50%;
    transition: .2s linear all;
}

& .carousel__dot--selected{
    transform: scale(1.5)
}
`


export const Box = styled.div`
    height: 70px;
    width: 70px;
    background-image:${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    overflow: hidden;
    background-size: 100px;
    border-radius: 10px;
    border: 1px solid lightgrey;
`
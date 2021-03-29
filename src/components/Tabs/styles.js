import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
    position: relative;
    display: flex;
    vertical-align: top;    
    width: ${props => `calc((100% / ${props.col || 3}))`};
    border-bottom: ${props => !props.noBorder && '1px solid #efefef'} ;
    
    border-left: ${props => !props.noBorder && '1px solid #efefef'} ;
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
    height: calc((100%) / 3);
    align-items: center;
    justify-content: center;
        border-top: ${props => !props.noBorder && '1px solid #efefef'} ;
}

`

export const Container = styled.div`
    width: 70%;
    height: 80%;
    position: absolute;
    right: 0;
    top: 100px;
`;

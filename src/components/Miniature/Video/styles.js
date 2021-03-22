import { motion } from "framer-motion";
import styled from "styled-components";

export const Overload = styled.div`
background: rgba(0,0,0,.3);
z-index: 99;

`

export const Container = styled(motion.div)`
position: relative;
display: inline-block;
    vertical-align: top;
    width: ${props => `calc((100% / ${props.col || 3}))`};

    border-bottom: ${props => !props.noBorder && '1px solid #efefef' } ;
        border-left: ${props => !props.noBorder && '1px solid #efefef' } ;

    
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
}

`
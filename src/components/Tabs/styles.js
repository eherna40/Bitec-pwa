import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
    position: relative;
    display: flex;
    width: 300px;
    
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    overflow: hidden;
}

`

export const Container = styled.div`
    width: 70%;
    max-height: 80%;
    position: absolute;
    right: 0;
    top: 150px;
`;

export const ContentBox = styled.div`
    transform: skew(-10deg)

`
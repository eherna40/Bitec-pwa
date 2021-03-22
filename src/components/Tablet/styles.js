import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`

position: relative;
    vertical-align: top;
    width: calc((100% / 3) - 1px);
    border-bottom: 1px solid #efefef;
    border-left: 1px solid #efefef;
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
}
`

export const Button = styled.div`
    width: 40px;
    height: '100%';
`

export const Rounded = styled.div`
    border-radius:50%;
    height: 30px;
    width:30px;
    background-color: white;
    opacity: .3;
    margin: 18px 0
`

export const Round = styled.div`
    height: 15px;
    width: 30px;
    border-radius: 100px;
        background-color: white;
    opacity: .1;
    margin: 3px 0;
`
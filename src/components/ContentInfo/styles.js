import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
     height: calc(100vh - 70px - 70px);
         position: relative;
    z-index: 6;
`

export const Inner = styled(motion.div)`
    z-index: 6;
    box-shadow: 3px 6px 9px rgba(0,0,0,.3);
    background: #242424 url('texture-bg.jpg') repeat;
`
import React from "react";
import PropTypes from "prop-types";
import { Box, Container, ContentBox } from "./styles";
import Paragraphs from "../Paragraphs/Paragraphs";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

const Tabs = ({ categories }) => {
  const history = useHistory();
  const handleClick = (item) => {
    history.push("/listing", {
      data: item,
    });
  };

  return (
    <Container className="Tabs tw-flex tw-flex-wrap tw-flex-wrap tw-h-screen tw-items-center tw-justify-end tw-w-10/12 ">
      {categories.map((i, idx) => {
        return (
          <Box
            as={motion.div}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.5,
            }}
            onClick={() => handleClick(i)}
            className=" tw-w-3/12 tw-relative"
          >
            <ContentBox className="content-box tw-w-full tw-bg-orange tw-h-full tw-text-black-900  tw-cursor-pointer tw-py-10 tw-items-center tw-flex tw-flex-col tw-justify-center ">
              <img src={i.miniatura} />
              <Paragraphs size="xl" family="universe" uppercase>
                {i.name}
              </Paragraphs>
            </ContentBox>
          </Box>
        );
      })}
    </Container>
  );
};

Tabs.propTypes = {
  categories: PropTypes.array,
  onPress: PropTypes.func,
};

Tabs.defaultProps = {
  categories: [],
};

export default Tabs;

import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { selectTablet } from "../infraestructure/api/API";
import useFetch from "../infraestructure/hook/useFetch";
import useLocalData from "../infraestructure/hook/useLocalData";
import { motion } from "framer-motion";
import Logo from "../components/Logo/Logo";
import Spinner from "../components/Spinner/Spinner";
const TabletsScreen = () => {
  const history = useHistory();
  const { state } = useLocation();
  const { saveData } = useLocalData();
  const [doFetch, { data }] = useFetch("getTablets");
  const [onCompleteBackground, setOnCompleteBackground] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    handleSelect(state.tablet || 1);
  }, []);
  const handleSelect = async (id) => {
    try {
      setloading(true);
      const { status, data } = await selectTablet(id);
      if (status === "success") {
        const categories = await saveData(data);
        history.replace({
          pathname: "/campaing",
          data: categories,
        });
      }
    } catch (error) {}

    setloading(false);
  };
  return (
    <div className="TabletsScreen tw-flex tw-items-center tw-justify-center tw-h-screen tw-w-full">
      <motion.div
        initial={{
          left: "-100%",
        }}
        animate={{
          left: "100%",
        }}
        transition={{
          duration: 1,
        }}
        onAnimationComplete={() => setOnCompleteBackground(true)}
        className="tw-fixed tw-w-screen tw-h-screen tw-top-0 tw-left-0 tw-bg-white tw-z-50"
      />
      {/* {loading && (
        <motion.div
          initial={{
            left: "-100%",
          }}
          animate={{
            left: 0,
          }}
          className="tw-bg-white tw-bg-opacity-80 tw-fixed tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-z-50"
        ></motion.div>
      )} */}
      {onCompleteBackground && (
        <div className="Tablets-list tw-flex tw-flex-wrap">
          {data &&
            data.map((i, idx) => {
              const par = idx % 2 === 0;
              // return <Tablet image={par ? tablet1 : tablet2} {...i} idx={idx} key={i.id} onPress={handleSelect} />
              return null;
            })}
        </div>
      )}
      {/* <StripAnimation
        delay={1}
        // onAnimationComplete={() => setOnCompleteText(true)}
      > */}
      <div className="tw-flex tw-flex-col aling-items-center justify-content-center ">
        <Logo mode="dark" size="large" />
        <Spinner color="#333" />
      </div>

      {/* </StripAnimation> */}
    </div>
  );
};

export default TabletsScreen;

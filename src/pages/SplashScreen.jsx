import React, { useEffect, useState } from "react";
import Logo from "../components/Logo/Logo";
import Spinner from "../components/Spinner/Spinner";
import { useHistory, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import StripAnimation from "../components/StripAnimation";
import useFetch from "../infraestructure/hook/useFetch";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { useNetworkState } from "react-use";
import { useSelector } from "react-redux";
const SplashScreen = () => {
  const history = useHistory();
  const [doFetch, { data }] = useFetch("getTablets");
  const { hash } = useLocation();

  const [onCompleteBackground, setOnCompleteBackground] = useState(false);
  const [onCompleteText, setOnCompleteText] = useState(false);
  const { online } = useNetworkState();
  const categories = useSelector((state) => state.categoryReducer);
  useEffect(() => {
    if (data) {
      history.replace("/tablets", {
          tablet: hash.includes('#') ? hash.replace('#' , '') : 1
      });
        
    }
  }, [data]);

  useEffect(() => {
    if (onCompleteText && onCompleteBackground) {
      if (online && categories.data && categories.data.length === 0) {
        doFetch();
      } else {
        history.replace("/campaing");
      }
    }
  }, [onCompleteBackground, onCompleteText]);

  return (
    <Layout className="Splash tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full">
      <BackgroundAnimation
        onAnimtaionEnd={() => setOnCompleteBackground(true)}
      />
      <StripAnimation
        delay={.5}
        onAnimationComplete={() => setOnCompleteText(true)}
      >
        <Logo mode="light" size="large" />
      </StripAnimation>
      <Spinner />
    </Layout>
  );
};

export default SplashScreen;

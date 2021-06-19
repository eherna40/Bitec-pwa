import React, { useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import CategoriesScreen from './pages/CategoriesScreen';
import TabletsScreen from './pages/TabletsScreen';
import SplashScreen from './pages/SplashScreen';
import CategoryScreen from './pages/CategoryScreen';
import ProductScreen from './pages/ProductScreen';
import VideoScreen from './pages/VideoScreen';
import BtnChat from './components/chat/btn-chat';
import ContactPage from './pages/ContactPage';
import ListingScreen from './pages/ListingScreen';
import { useSelector } from 'react-redux';
import { useIdleTimer } from "react-idle-timer";

function AnimatedApp() {
  const history = useHistory()
  const location = useLocation();
  const { video } = useSelector(state => state.categoryReducer)
  const { onVideo } = useSelector(state => state.sessionReducer)
    const { pause, reset } = useIdleTimer({
      timeout: 300000,
      onIdle: () => {
        if (video)
          history.push("/video", {
            url: video,
            loop: true,
          });
      },
    });
  useEffect(() => {
    if(onVideo){
      pause()
    }
    if(video){
      if(!onVideo)
      reset();
    }

    if(!video){
      pause()
    }

    
  }, [onVideo, video])

  useEffect(() => {
    console.log('asdasd')
  }, [])

  return (
    <>

      <BtnChat />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={SplashScreen} />
          <Route path='/tablets' component={TabletsScreen} />
          <Route path='/campaing' component={CategoriesScreen} />
          <Route path='/category/:id' component={CategoryScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/video' component={VideoScreen} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/listing' component={ListingScreen} />
        </Switch>
      </AnimatePresence>
    </>

  );
}

export default AnimatedApp;

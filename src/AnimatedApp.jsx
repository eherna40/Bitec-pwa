import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import CategoriesScreen from './pages/CategoriesScreen';
import TabletsScreen from './pages/TabletsScreen';
import SplashScreen from './pages/SplashScreen';
import CategoryScreen from './pages/CategoryScreen';
import ProductScreen from './pages/ProductScreen';
import VideoScreen from './pages/VideoScreen';
import { useEffect } from 'react';

function AnimatedApp() {
  const location = useLocation();
  const history = useHistory()

  useEffect(() => {
    history.push('/aa')
  }, [])
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={SplashScreen} />
        <Route path='/tablets' component={TabletsScreen} />
        <Route path='/campaing' component={CategoriesScreen} />
        <Route path='/category/:id' component={CategoryScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/video' component={VideoScreen} />
      </Switch>
    </AnimatePresence>

  );
}

export default AnimatedApp;

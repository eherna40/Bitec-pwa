import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import CategoriesScreen from './pages/CategoriesScreen';
import TabletsScreen from './pages/TabletsScreen';
import SplashScreen from './pages/SplashScreen';

function AnimatedApp() {
  const location = useLocation();

  return (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={SplashScreen} />

        <Route path='/tablets' component={TabletsScreen} />
        <Route path='/campaing' component={CategoriesScreen} />

        </Switch>
      </AnimatePresence>

  );
}

export default AnimatedApp;

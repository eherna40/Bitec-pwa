import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import './styles/index.css';
import { publicRoutes } from './routes'
import AppRoute from './routes/route'

function App() {
  return (
    <Router basename='/webapp'>
      <Switch>
        {publicRoutes.map((route, idx) => {
          return (
            <AppRoute
              path={route.path}
              component={route.component}
              key={idx}
              exact={route.exact}
            />
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;

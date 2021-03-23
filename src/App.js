import {  BrowserRouter as Router } from 'react-router-dom'
import { ZendeskAPI } from "react-zendesk";

import './App.css';
import './styles/index.css';
import AnimatedApp from './AnimatedApp';
import { Provider } from 'react-redux';
import { persistor, store } from './infraestructure/redux/store';
import { PersistGate } from 'redux-persist/integration/react';



const onLoadZendesk = () => {
  ZendeskAPI('webWidget:on', 'chat:status', openchat)
}

const openchat = (e)=> {
  console.log(e)
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename='/webapp'>
          <AnimatedApp />
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;

import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// mandatory for react > 0.60+
// import AsyncStorage from '@react-native-community/async-storage';

// redux-logger
import { createLogger } from 'redux-logger'

// sagas
// import createSagaMiddleware from 'redux-saga'
// import saga from './saga'

// reducers
import Reducers from './reducers'

const logger = createLogger({
  collapsed: true,
})

const middlewares = []

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, Reducers)
// const sagaMiddleware = createSagaMiddleware()

middlewares.push(logger)

// saga init
// middlewares.push(sagaMiddleware)

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
)

const persistor = persistStore(store)

// sagaMiddleware.run(saga)

export { store, persistor }

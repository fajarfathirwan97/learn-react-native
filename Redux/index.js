/**
 * @providesModule localRedux
 */

import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'localSaga'

export default () => {
  
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('./Login').reducer,
    toast: require('./Toast').reducer,
  })

  const sagaMiddleware = createSagaMiddleware()
  // mount it on the Store
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )

  // then run the saga
  sagaMiddleware.run(rootSaga)
  // return rootReducer
  // return createStore(rootReducer, rootSaga)
  return store
}
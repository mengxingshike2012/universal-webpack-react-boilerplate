import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { router, reduxRouterMiddleware } from '../middlewares'
import rootReducer from '../redux/reducers'

export default function configure(initialState) {
  const create = global.IS_CLIENT && global.devToolsExtension
    ? global.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware,
    createLogger(),
    router,
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../redux/reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('../redux/reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
export const store = configure()

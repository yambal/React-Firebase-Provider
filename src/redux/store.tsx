import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { reducers } from './reducers'
import { initialState } from './rootState'
import { initial as CONFIG } from '../modules/configModule'

//import { createBrowserHistory } from 'history'
// export const history = createBrowserHistory()

/** enhancer */
const enhancers:any[] = []

/** Redux Dev Tool */
if(CONFIG.nodeEnv !== 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION__){
  enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__())
}

// export const history = createBrowserHistory()

/** middle ware */
const middlewares = [
  reduxThunk
]

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

const store = createStore(
  reducers,
  initialState,
  composedEnhancers
)
  
export default store
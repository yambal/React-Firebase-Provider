import { combineReducers, Reducer } from 'redux'
import { configModule } from '../modules/configModule'
import { counterModule } from '../modules/counterModule'

export const reducers = combineReducers<Reducer>({
  config: configModule.reducer,
  counter: counterModule.reducer
})

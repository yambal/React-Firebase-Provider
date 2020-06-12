import { configModule, iConfigState } from '../modules/configModule'
import { counterModule, iCounterState } from '../modules/counterModule'

export interface iRootState {
  config: iConfigState
  counter: iCounterState
}

export default iRootState

export const initialState: iRootState = {
  config: configModule.initial,
  counter: counterModule.initial
}
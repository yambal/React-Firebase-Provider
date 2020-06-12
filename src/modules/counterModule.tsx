import iRootState from "../redux/rootState"

const dotenv = require('dotenv')
dotenv.config({ debug: true })

export interface iCounterState {
    count: number
}

export const initial:iCounterState = {
    count: 0
}

/**
 * Reducer
 */

const COUNTER_ACTIONS = {
  ADD: 'counter_action_add'
}

interface iCounterAction {
  type: string,
  number: number
} 

const reducer = (state: iCounterState = initial, action: iCounterAction) => {
    switch (action.type) {
      case COUNTER_ACTIONS.ADD:
        return Object.assign({}, state, {count: state.count + action.number})
      
      default: return state
    }
}

const added = (add: number):iCounterAction => {
  return {
    type: COUNTER_ACTIONS.ADD,
    number: add
  }
}

const add = (add: number) => {
  return (dispatch: any, getState: () => iRootState) => {
    dispatch(added(add))
  }
}


export const counterModule = {
  initial,
  reducer,
  action: {
    add
  }
}

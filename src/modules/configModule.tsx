const dotenv = require('dotenv')
dotenv.config({ debug: true })

console.log(4, process.env.NODE_ENV)

export interface iConfigState {
    nodeEnv?: string
    copy_right?: string
    router_basename?: string
}

export const initial:iConfigState = {
    nodeEnv: process.env.NODE_ENV,
    copy_right: process.env.REACT_APP_COPY_RIGHT,
    router_basename: process.env.REACT_APP_ROUTER_BASENAME
}

/**
 * Reducer
 */
const reducer = (state: iConfigState = initial, action: any) => {
    switch (action.type) {
        default: return state
    }
}


export const configModule = {
    initial,
    reducer
}

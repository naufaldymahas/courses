import React, { useReducer } from 'react'
import authReducers from './authReducers'
import { authState } from './initialState'

export const Context = React.createContext()

const GlobalState = (props) => {

    const [auth, setAuth] = useReducer(authReducers, authState)

    return (
        <Context.Provider
        value={{auth, setAuth}}>
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState

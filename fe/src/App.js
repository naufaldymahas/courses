import React, { Fragment, useState, useEffect, useContext } from 'react'
import Home from './containers/Home'
import './App.css'
import cookies from './helpers/Cookies'
import { Context } from './context'
import { login } from './actions/authActions'

const App = () => {

  const [check , setCheck] = useState(false)

  const { setAuth } = useContext(Context)

  useEffect(() => {
    const user = cookies.get('user')
    if (user) setAuth(login(user))
    setCheck(true)
  }, [setAuth])


  if (!check) return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
  return (
    <Fragment>
      <Home/>
    </Fragment>
  )
}

export default App

import React, { useState, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import Input from '../helpers/Input'
import { Auth } from '../services'
import crypto from 'crypto'
import key from '../helpers/key'
import Swal from 'sweetalert2'
import { Context } from '../context'
import cookies from '../helpers/Cookies'
import { login } from '../actions/authActions'


const Login = ({ openLogin, setOpenLogin, setOpenRegister }) => {

    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const { setAuth } = useContext(Context)

    const registerHandler = () => {
        setOpenLogin(false)
        setOpenRegister(true)
    }

    const loginHandler = e => {
        setError('')
        const params = {
            email: input.email,
            password: crypto.createHmac('sha256', key).update(input.password).digest('base64')
        }
        e.preventDefault()
        if (!input.email && !input.password) setError('Please fill the form')
        else {
            Auth.login(params)
            .then(res => {
                if (res.data.status === 401) Swal.fire(res.data.message, '', 'error')
                else {
                    setAuth(login(res.data.results[0]))
                    cookies.set('user', res.data.results[0])
                    setInput({...input, email: '', password: ''})
                    Swal.fire('Login Success!', '', 'success')
                    setOpenLogin(false)
                }
            })
        }
    }

    return (
        <Modal show={openLogin} onHide={ () => setOpenLogin(false) } style={{ marginTop: "80px" }}>
            <Modal.Header closeButton>
                <h4 className="mb-0">Login</h4>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={loginHandler}>
                    <div style={{ fontSize: "15px" }}>
                        <label className="text-muted" htmlFor="email">Email</label>
                        <input className="form-control"
                        autoFocus={true}
                        type="text"
                        id="email"
                        onChange={ e => Input('email', setInput, input, e.target.value)}
                        value={ input.email }/>
                    </div>
                    <div style={{ fontSize: "15px", marginTop: "10px" }}>
                        <label className="text-muted" htmlFor="password">Password</label>
                        <input className="form-control"
                        type="password"
                        id="password"
                        onChange={ e => Input('password', setInput, input, e.target.value)}
                        value={ input.password }/>
                    </div>
                    <button className="btn btn-primary mt-3 form-control">Login</button>
                </form>
                {error ? <div className="alert alert-danger mt-3 text-center" role="alert">{error}</div> : null}
            </Modal.Body>
            <Modal.Footer style={{ display: "block", textAlign: "center" }}>
                <span>Don't have an account?
                    <button onClick={ registerHandler }  style={{ border: "none", backgroundColor: "transparent", color: "#b46646" }}>Register</button>
                </span>
            </Modal.Footer>
        </Modal>
    )
}

export default Login

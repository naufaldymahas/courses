import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Auth } from '../services'
import crypto from 'crypto'
import key from '../helpers/key'
import Swal from 'sweetalert2'
import Input from '../helpers/Input'

const Register = ({ setOpenRegister, openRegister, setOpenLogin }) => {

    const [input, setInput] = useState({
        fullName: '',
        email: '',
        password: '',
        retypePassword: ''
    })

    const [error, setError] = useState('')

    const loginHandler = () => {
        setOpenRegister(false)
        setOpenLogin(true)
    }

    const inputHandler = (cond, set, state, value) => {
        Input(cond, set, state, value)
        setError('')
    }

    const registerHandler = e => {
        e.preventDefault()
        const {
            fullName,
            email,
            password,
            retypePassword
        } = input
        if (!fullName && !email && !password && !retypePassword) setError('Please fill the form!')
        else {
            if (password !== retypePassword) setError("Password doesn't match!")
            else {
                const cryptPassword = crypto.createHmac('sha256', key).update(password).digest('base64')
                Auth.register({ fullName, email, cryptPassword })
                .then(res => {
                    console.log(res)
                    Swal.fire(res.data.message, '', 'success')
                    setInput({
                        ...input, fullName: '', email: '', password: '', retypePassword: ''
                    })
                })
                .catch(err => console.log(err))
            }
        }
    }

    return (
        <Modal show={openRegister} onHide={ () => setOpenRegister(false)} centered>
            <Modal.Header closeButton>
                <h4 className="mb-0">Register</h4>
            </Modal.Header>
            <Modal.Body>
                <form id="register" onSubmit={registerHandler}>
                    <div style={{ fontSize: "15px", marginBottom: "10px" }}>
                        <label htmlFor="fn">Full Name</label>
                        <input placeholder="John Doe" value={ input.fullName } onChange={ e => inputHandler('fullName', setInput, input, e.target.value)}
                        className="form-control" type="text" id="fn"/>
                    </div>
                    <div style={{ fontSize: "15px", marginBottom: "10px" }}>
                        <label htmlFor="email">Email</label>
                        <input placeholder="john@example.com" value={ input.email } onChange={ e => inputHandler('email', setInput, input, e.target.value)}
                        className="form-control" type="email" id="email"/>
                    </div>
                    <div className="row" style={{ fontSize: "15px", marginBottom: "10px" }}>
                        <div className="col-md-6">
                            <label htmlFor="password">Password</label>
                            <input value={ input.password } onChange={ e => inputHandler('password', setInput, input, e.target.value)}
                            className="form-control" type="password" id="password"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="rePassword">Retype Password</label>
                            <input value={ input.retypePassword } onChange={ e => inputHandler('retypePassword', setInput, input, e.target.value)}
                            className="form-control" type="password" id="rePassowrd"/>
                        </div>
                    </div>
                    <button form="register" type="submit" onClick={registerHandler} className="btn btn-primary form-control">Register</button>
                </form>
                {error ? <div className="alert alert-danger mt-3 text-center" role="alert">{error}</div> : null}
            </Modal.Body>
            <Modal.Footer style={{ display: "block", textAlign: "center" }}>
                <span>Already have an account?
                    <button onClick={ loginHandler }  style={{ border: "none", backgroundColor: "transparent", color: "#b46646" }}>Login</button>
                </span>
            </Modal.Footer>
        </Modal>
    )
}

export default Register

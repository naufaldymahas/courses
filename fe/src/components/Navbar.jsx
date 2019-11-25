import React, { useContext } from 'react'
import './style/Navbar.css'
import { Context } from '../context'

const Navbar = ({ setOpenLogin, setOpenRegister }) => {

    const { auth } = useContext(Context)

    return (
        <div className="d-flex py-3" style={{ boxShadow: "1px 1px #0000001c, 1px 1px #00000029", backgroundColor: "white" }}>
            <h6 className="col-1 my-auto text-center">Home</h6>
            <button className="btn-c col-md-1 r">Categories</button>
            <div className="col-md-10 my-auto r" style={{ textAlign: "right" }}>
                <button className="btn-c">About Us</button>
                <button className="btn-c">Become a Teacher</button>
                {
                    !auth.fullName ? 
                    (
                        <>
                        <button onClick={ () => setOpenLogin(true) } className="btn-c b-l mr-2">Login</button>
                        <button onClick={ () => setOpenRegister(true) } className="btn-c b-r">Register</button>
                        </>
                    )
                    :
                    (
                        <button className="btn-c" style={{ color: "#b46646" }}>Hello, {auth.fullName}!</button>
                    )
                }
            </div>
            <div className="b my-auto ml-auto mr-5" style={{ textAlign: "right", cursor: "pointer" }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar

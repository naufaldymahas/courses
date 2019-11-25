import React, { Fragment, useState } from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import LandingPage from '../components/LandingPage'
import ProductCard from '../components/ProductCard'
import Register from '../components/Register'

const Home = () => {

    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)

    return (
        <Fragment>
            <Login openLogin={openLogin} setOpenLogin={setOpenLogin} setOpenRegister={setOpenRegister}/>
            <Register openRegister={openRegister} setOpenRegister={setOpenRegister} setOpenLogin={setOpenLogin}/>
            <Navbar setOpenLogin={setOpenLogin} setOpenRegister={setOpenRegister}/>
            <LandingPage/>
            <div className="my-5">
                <h4 className="pl-5">Newest Course</h4>
                <div>
                    <ProductCard/>
                </div>
            </div>
        </Fragment>
    )
}

export default Home

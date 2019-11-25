import React from 'react'
import './style/ProductCard.css'

const ProductCard = () => {
    return (
        <div className="px-5 d-flex" style={{ paddingBottom: "10px", overflow: "auto", whiteSpace: "nowrap" }}>
            <div className="mr-3" style={{ boxShadow: "0 2px 8px 2px rgba(20,23,28,.15)", width: "260px" }}>
                <div className="img-c">
                    <img className="img-i" src={require('../assets/js.jpg')} alt="gambar"/>
                </div> 
                <div className="p-2">
                    <p>Javascript</p>
                    <span className="mt-2">John Doe</span>
                    <p>Rp 150.000</p>
                </div>
            </div>
            <div className="mr-3" style={{ boxShadow: "0 2px 8px 2px rgba(20,23,28,.15)", width: "260px" }}>
                <div className="img-c">
                    <img className="img-i" src={require('../assets/php.jpg')} alt="gambar"/>
                </div> 
                <div className="p-2">
                    <p>Javascript</p>
                    <span className="mt-2">John Doe</span>
                    <p>Rp 150.000</p>
                </div>
            </div>
            <div className="mr-3" style={{ boxShadow: "0 2px 8px 2px rgba(20,23,28,.15)", width: "260px" }}>
                <div className="img-c">
                    <img className="img-i" src={require('../assets/js.jpg')} alt="gambar"/>
                </div> 
                <div className="p-2">
                    <p>Javascript</p>
                    <span className="mt-2">John Doe</span>
                    <p>Rp 150.000</p>
                </div>
            </div>
            <div className="mr-3" style={{ boxShadow: "0 2px 8px 2px rgba(20,23,28,.15)", width: "260px" }}>
                <div className="img-c">
                    <img className="img-i" src={require('../assets/js.jpg')} alt="gambar"/>
                </div> 
                <div className="p-2">
                    <p>Javascript</p>
                    <span className="mt-2">John Doe</span>
                    <p>Rp 150.000</p>
                </div>
            </div>
            <div style={{ boxShadow: "0 2px 8px 2px rgba(20,23,28,.15)", width: "260px" }}>
                <div className="img-c">
                    <img className="img-i" src={require('../assets/js.jpg')} alt="gambar"/>
                </div> 
                <div className="p-2">
                    <p>Javascript</p>
                    <span className="mt-2">John Doe</span>
                    <p>Rp 150.000</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

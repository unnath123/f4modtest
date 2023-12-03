import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () =>{
    const navigate = useNavigate()
    function handleCLick1(){
        navigate("/")
    }
    function handleCLick2(){
        navigate("/history")
    }

    return (
        <div >
            <div className="navbar">
                <div className="left"><h1>Dictionary App</h1></div>
                <div className="right">
                    <ul>
                        <li onClick={handleCLick1}>Home</li>
                        <li onClick={handleCLick2}ick>History</li>
                    </ul>

                    </div>
            </div>
        </div>
    )
}

export default Navbar
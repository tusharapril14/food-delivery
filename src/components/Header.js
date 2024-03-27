import { useState } from "react"
import { Link } from "react-router-dom";

const Header = ()=>{
    const [authBtn,setAuthBtn] = useState("Login")
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src='https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg'/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <button onClick={()=>{
                            setAuthBtn(authBtn=='Login'?'Logout':'Login');
                        }}>{authBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header
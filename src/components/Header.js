import { useState } from "react"
import { Link } from "react-router-dom";

const Header = ()=>{
    const [authBtn,setAuthBtn] = useState("Login")
    return (
        <header className="bg-white ">
            <nav className="flex justify-between px-5" aria-label="Global">
                <div className="flex justify-between w-full">
                <div>
                    <Link to="/" >
                        <span className="sr-only">Your Company</span>
                        <img  className="h-24 w-auto" src='https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg'/>
                    </Link>
                </div>
                <div className="my-8 mx-16">
                <ul className='flex'>
                    <li className="mx-5"><Link to="/">Home</Link></li>
                    <li className="mx-5"><Link to="/about">About</Link></li>
                    <li className="mx-5"><Link to="/contact">Contact</Link></li>
                    <li className="mx-5">
                        <button onClick={()=>{
                            setAuthBtn(authBtn=='Login'?'Logout':'Login');
                        }}>{authBtn}</button>
                    </li>
                </ul>
                </div>
                </div>

            </nav>
        </header>

    )
}
export default Header
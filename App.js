import  React from 'react';
import ReactDOM from 'react-dom/client';


// const element = <h1 id='heading' className='test'>Hello React Js using jsx.</h1>

// react component 
const Header = ()=>{
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src='https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg'/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const SearchBar = () =>{
    return (
        <input type="text" placeholder='search restaurants' />
    )
}
const ResCard=()=>{
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg" alt="" />
            </div>
            <div>
                Bikanervala
            </div>
            <div>
                4*
            </div>
            <div>
                22 mnts
            </div>
        </div>
    )
}

const Body = ()=>{
  return (<div className='body'>
        <div className='body-container'>
            <div className='search-bar'>
                <SearchBar/>
            </div>
            <div className='res-container'>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>

                <ResCard/>
                <ResCard/>
                <ResCard/>

            </div>
        </div>
    </div>)
}

const AppLayout = ()=>{
return (
        <div className='app-layout'>
            <Header/>
            <Body/>
        </div>
        )

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
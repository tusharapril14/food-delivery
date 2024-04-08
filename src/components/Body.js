import ResCard , {withPromotedLabel} from "./ResCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
const Body = ()=>{
    const [resData,setResData] = useState([])
    const [resDummyData,setDummyResData] = useState([])
    const ResPromotedCard = withPromotedLabel()
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async ()=>{
        try{
            const json = await fetch('https://run.mocky.io/v3/9a7d31b3-1ce1-409e-91ad-eaab9c6dc74d');
            const data = await json.json();
            setResData(data?.data?.cards[2].data?.data?.cards)
            setDummyResData(data?.data?.cards[2].data?.data?.cards)
        }
        catch (e) {
            console.log(e)
        }

    }
    const filterTopRestaurant=()=>{
        let filteredRes = resData.filter(res=>res.data.avgRating>=4)
        setResData(filteredRes)
    }  
   const searchRes = (event)=>{
        let target = event.target.value?.toLowerCase();
        let filterData = resDummyData.filter(res=>res.data.name.toLowerCase().includes(target));
        setResData(filterData)
    }

    
    return (
    
    
    <div className='body'>
          <div className='body-container'>
              <div className='search-bar'>
                  <input type="text" placeholder="Search for restaurant" onChange={(e)=>{searchRes(e)}} />
              </div>
              <button onClick={()=>{filterTopRestaurant()}} >Filter Restaurant</button>
              <div className='res-container'>
                {
                    resData.length===0 ? 
                    <ShimmerCard/> : resData.map(res=>
                        <Link to={'restaurants/'+res.data.id} key={res.data.uuid}>
                            {
                                res.data.promoted? <ResPromotedCard resData={res}/> : <ResCard resData={res}  />
                            }
                        </Link>)
                }
              </div>
          </div>
      </div>)
  }
  export default Body
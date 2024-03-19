import SearchBar from "./SearchBar";
import ResCard from "./ResCard";
import { RES_DATA } from "../Utils/mock/data";
import { useState } from "react";
const Body = ()=>{
    const [resData,setResData] = useState(RES_DATA)
    let dummyData = RES_DATA;
    const filterTopRestaurant=()=>{
        let filteredRes = resData.filter(res=>res.data.avgRating>=4)
        setResData(filteredRes)
    }  
   const searchRes = (event)=>{
        let target = event.target.value;
        let filterData = dummyData.filter(res=>res.data.name.toLowerCase().includes(target));

        setResData(filterData)
    }

    return (<div className='body'>
          <div className='body-container'>
              <div className='search-bar'>
                  {/* <SearchBar/> */}
                  <input type="text" onChange={(e)=>{searchRes(e)}} />
              </div>
              <button onClick={()=>{filterTopRestaurant()}} >Filter Restaurant</button>
              <div className='res-container'>
                {
                resData.map(res=><ResCard key={res.data.uuid} resData={res} />)
                }
              </div>
          </div>
      </div>)
  }
  export default Body
import SearchBar from "./SearchBar";
import ResCard from "./ResCard";
const Body = ()=>{
    return (<div className='body'>
          <div className='body-container'>
              <div className='search-bar'>
                  <SearchBar/>
              </div>
              <div className='res-container'>
                  <ResCard/>
              </div>
          </div>
      </div>)
  }
  export default Body
import { useParams } from "react-router-dom";

const Restaurants = ()=>{
    const router =  useParams();
    let {id} = router
    return (
        <div>
            Restaurant : {id}
        </div>
    )
}
export default Restaurants;
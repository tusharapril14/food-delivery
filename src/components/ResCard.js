import { IMG_URL } from "../Utils/mock/config"
const ResCard=({resData})=>{
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img src={IMG_URL+resData.data.cloudinaryImageId} alt="" />
            </div>
            <div>
                {resData.data.name}
            </div>
            <div>
                {resData.data.cuisines.toString()}
            </div>
            <div>
                ₹{resData.data.costForTwo/100 + ' For Two' }
            </div>
            <div>
                {resData.data.deliveryTime + ' min'}
            </div>
            <div>
                {resData.data.avgRating}*
            </div>

        </div>
    )
    
}
export const  withPromotedLabel = () =>{
    return (props)=>{
        return (
            <div>
                <label>Promoted</label>
                <ResCard resData={props.resData}/>
            </div>
        )
    }
}
export default ResCard
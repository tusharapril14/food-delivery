import { IMG_URL } from "../Utils/mock/config"
const ResCard=({resData})=>{
    return (
<div class="w-full m-3 max-w-64  min-w-64 min-h-96 h-80 border border-gray-200 rounded-lg shadow ">
    <div className="">
        <img class="w-full min-h-48 max-h-48 rounded-t-lg" src={IMG_URL+resData.data.cloudinaryImageId} alt="product image" />
    </div>
    <div class="px-3 ">
        <div>
            <h5 class="text-xl font-semibold  text-black"> {resData.data.name}</h5>
        </div>
        <div class="flex mt-2.5 mb-5 justify-between">
                <div className="flex">
                    <div class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ">{resData.data.avgRating}  
                </div> 
                <div className="mt-1">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
            </div>
            
            <div className="mx-2 text-sm mt-1"> {resData.data.deliveryTime + ' min'}</div>
        </div>
        <div class="text-base  text-gray-600 w-54 break-words "> {resData.data.cuisines.toString()}</div>

    </div>
</div>



    )
    
}
export const  withPromotedLabel = () =>{
    return (props)=>{
        return (
            <div className="relative">
                <label className="absolute left-5 mt-2  bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-800 "> Promoted</label>
                <ResCard resData={props.resData}/>
            </div>
        )
    }
}
export default ResCard
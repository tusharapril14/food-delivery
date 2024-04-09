// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../Utils/mock/config";
import {MENU_DATA} from "../Utils/mock/data";
const Restaurants = ()=>{
    const router =  useParams();
    let {id} = router;
    const menuData = MENU_DATA;
    console.log(menuData)
    // const [menu,setMenu]= useState({})
    // useEffect(()=>{
    //     fetchMenu(id);
    // },[])

    // const  fetchMenu = async ()=>{
    //     try{
    //         const json = await fetch(MENU_URL+id);
    //         const data = await json.json();
    //         console.log(data)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }
    return (
        <div>
            <div class="w-full p-4 text-center bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Meghna foods</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"></p>
                <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <div class="flex mt-2.5 mb-5 justify-between">
        </div>
                </div>
            </div>
        </div>
    )
}
export default Restaurants;
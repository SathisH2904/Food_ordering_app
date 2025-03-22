import RestaurantMenuListItems from './RestaurantMenuListItems';
import { SlArrowDown } from "react-icons/sl";
import { useState } from 'react';

let RestaurantMenuList=({list})=>{
    let [show,setShow]=useState(false);
    let arr=list.card.card.itemCards==undefined?(list.card.card.carousel==undefined?list.card.card.categories:list.card.card.carousel):list.card.card.itemCards;
    let toggleMenu=()=>{
        setShow(!show);
    }
    return(<div className="w-3/5">
        <div className=" bg-slate-50 hover:bg-slate-200 flex justify-between px-5 p-4 border-collapse shadow-xl" onClick={toggleMenu}>
            <div className="flex font-serif text-xl">{String(list.card.card.title).toUpperCase()}</div>
            <div className="w-12"><SlArrowDown className='h-8'/></div>
        </div>
        <div className=" flex flex-col gap-4 ">
            {
                arr.map((x,y,z)=>{
                    return show && <RestaurantMenuListItems key={y} item={x}/>
                })
            }
        </div>
    </div>)
}
export default RestaurantMenuList;

import React, { useEffect, useState } from "react"
import { useParams } from "react-router" 
import RestaurantMenuList from "./RestaurantMenuList";
import { MdStars } from "react-icons/md";
// import { CgArrowLongDownR } from "react-icons/cg";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import BottomLine from "./BottomLine"
import Playstore from "../image/Google_play.png"
import Appstore from "../image/App_Store.png"

const RestaurantMenu = () =>{
    console.log()
    let [useData,setUseData]=useState([]);
    let [resInfo,setResInfo]=useState(null);
    // let [resAdd,setResAdd]=useState([]);
    let {RestaurentMenu}=useParams();
    // let img_link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
     function getUseData(){
        fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0224581&lng=76.9565196&restaurantId="+RestaurentMenu)
        .then((data)=>{
           return data.json()
        })
        .then((val)=>{
            let result=val.data.cards[5]==undefined?val.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards:val.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
            let filterResult=result.filter((x,y,z)=>{
                return x.card.card.title!=undefined;
            })
            let address=result.filter((x,y,z)=>{
                return x.card.card.text!=undefined || x.card.card.completeAddress!=undefined;
            })
            setResInfo(val.data.cards[2].card.card.info);
            console.log(val.data.cards[2].card.card.info)
            setUseData(filterResult);
            setResAdd(address);
        })
    }
    useEffect(()=>getUseData(),[])
   if(useData.length==0)
   {
     return <BottomLine/>
   }
   else{
    return(<div className="flex flex-col items-center">
        <div  className="w-3/5 py-10">
            <div className=" text-2xl font-serif flex justify-center mr-[600px] mb-5 font-semibold gap-y-7">{resInfo.name}</div>
            <div className="bg-slate-50 p-7 gap-x-4 rounded-2xl shadow-lg shadow-slate-500 border-4">
              <div className="flex flex-row gap-x-1 font-semibold">
                < MdStars  className=" h-7 w-5 ml-2 text-green-600"/>
                <p className="text-lg font-bold ">{resInfo.avgRatingString}</p>
                <p className="ml-3 text-sm my-1 font-sans font-semibold">({resInfo.totalRatingsString})</p>
                <span className="text-sm my-1 ml-3 ">{resInfo.costForTwoMessage}</span>
              </div>
                <div className="flex gap-y-2 mt-2">
                    <div className="flex flex-col">
                        <RiArrowDropUpLine  className="w-9 h-7"/>
                        <RiArrowDropDownLine className="w-9 h-7"/>
                    </div>
                    <div className="flex flex-col font-semibold text-sm  gap-2">
                        <p className="mt-1">{resInfo.areaName}</p>
                        <p>{resInfo.sla.slaString}</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-xl flex font-serif justify-center font-bold mb-3">MENU ITEMS</p>
        <div  className="flex flex-col items-center gap-5 w-full mb-10">
            {
                useData.map((x,y,z)=>{
                    return(<RestaurantMenuList key={y} list={x}/>)
                })
            }
        </div>
        {/* <div id="about-line" className="flex flex-wrap justify-evenly items-center bg-red-100 w-3/5 mt-10 p-3">
         <img className="flex w-52 h-32 " src={img_link+resAdd[0].card.card.imageId}/>
            <div className="w-44 items-center text-lg px-6">
                <p className="">{resAdd[0].card.card.text}</p>
            </div>
            <div id="about-line" className=" flex flex-col items-start text-base w-64">
                <div>{resAdd[1].card.card.name}</div>
                <div>{resAdd[1].card.card.area}</div>
                <div id="about-line">{resAdd[1].card.card.completeAddress}</div>
            </div>
        </div> */}
        {/* <div className="flex justify-around bg-slate-200 w-full h-20 mt-10 ">
            <h2 className="text-xl font-serif ml-44 mt-4 ">For Better Experience Download <br></br> Our App Now </h2>
            <div className="flex items-center">
                <img className="h-36" src={Playstore} alt="playstore"></img>
                <img className="h-32 right-10 " src={Appstore} alt="Appstore"></img>
            </div>  
        </div>
        <div className="flex w-full h-44 bg-slate-400 justify-between px-3 py-3 ">
            <div className="flex items-center justify-between gap-10 ml-80">   
                <div className=" w-64">
                    <h1 className="text-2xl ml-16 font-serif text-orange-500">About us</h1>
                    <p className="font-serif">Welcome to Delicious, your go-to place for delicious food delivered right to your doorstep. We are passionate about bringing you the best culinary experiences.</p>
                </div>
                <div className="mb-16">
                    <h1 className="text-xl ml-10 font-serif text-orange-500">Contact us</h1>
                    <p>Email: info@Delicious.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="flex flex-col mb-10">
                    <h1 className="text-xl ml-10 font-serif text-orange-500">Follow us</h1>
                    <a href="#">Facebook/@Delicious</a>
                    <a href="#">Twitter/@Delicious</a>
                    <a href="#">Instagram/@Delicious</a>
                </div>
            </div>
        </div> */}
    </div>)
   }
    
   
}
export default RestaurantMenu;   
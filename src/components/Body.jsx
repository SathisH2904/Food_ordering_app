import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Card from "./Card.jsx";
import Shimmer from "./Shimmer.jsx";
import banner from "../image/pngwing.com.png"
import Playstore from "../image/Google_play.png"
import Appstore from "../image/App_Store.png"
import { DiscountCard } from "./Card.jsx";

function Body(){
    let [data,setData]=useState([]);
    let [searchData,setSearchData]=useState([]);
    // let data=[];
    function getData()
    {
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0224581&lng=76.9565196&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((x)=>{
             return x.json()}
            )
        .then((y)=>{
            let result=y.data.cards[2].card.card.gridElements===undefined?y.data.cards[1].card.card.gridElements.infoWithStyle.restaurants:y.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
            console.log(result)
            setData(result);
            setSearchData(result);
        });
    }
    useEffect(()=> getData(),[]);
    let filterRestaurant=()=>{
        let x=data.filter((x,y,z)=>
            x.info.avgRating>=4.5)
        setSearchData(x)
    }
    let searchRestaurant=()=>{
        let value=document.getElementById("search").value;
        let y=data.filter((x,y,z)=>x.info.name.toUpperCase().includes(value.toUpperCase()));
        setSearchData(y);
       
    }
    if(data.length==0)
    {
       return <Shimmer/>
    }
    else{
        return(
            <div className="mt-10">
                <div className="flex justify-between">
                    <h1 className="text-6xl font-bold font-serif w-72 ml-56 mt-24">Restuarant <span className="text-5xl">Near Me</span></h1>
                    <img className="w-96 mr-44 " src={banner} alt="banner" />
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-4 justify-end items-center my-6 mx-40">
                        <button onClick={filterRestaurant} className="bg-orange-400 w-32 h-10 font-serif border-2 border-solid border-black border-b-slate-500 border-l-slate-400 text-black text-sm rounded-3xl hover:bg-orange-500">Top Resturent</button>
                        <div className="w-80 h-10 flex justify-start items-center ">
                            <input className="w-full h-full rounded-3xl px-4 bg-slate-100 border-solid border-black border-b-slate-300 border-l-slate-300 border-2"id="search" onChange={searchRestaurant} placeholder="Search"></input>
                            <IoSearch className="relative right-8"/>
                        </div>
                    </div>
                  
                </div>
                <div className="">
                    <h1  className="text-2xl ml-40 mt-1 font-serif font-bold">Top Restaurants Chains In <span className="text-orange-600 font-bold">Coimbatore</span></h1>
                    <div className="flex flex-wrap justify-evenly items-center gap-[5px] gap-y-10 mx-32 mb-20 mt-4">
                        {
                            searchData.map((x,y)=>{
                                return(
                                <Card key={y} val={x}></Card>
                            
                                        // x.info?.aggregatedDiscountInfoV2?.header?<DiscountCard key={y} val={x}></DiscountCard>:<Card key={y} val={x}></Card>
                                
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-around bg-slate-200 w-full h-20 ">
                            <h2 className="text-2xl font-serif ml-40 mt-4 font-bold">For Better Experience, Download <br></br> the<span className="text-orange-600 m-1 ">Delicious</span>  App Now </h2>
                            <div className="flex items-center ">
                                <img className="h-36 w-52" src={Playstore} alt="playstore"></img>
                                <img className="h-32 w-52 " src={Appstore} alt="Appstore"></img>
                            </div>  
                </div>
                    <div id="about-line" className="flex w-full h-44 bg-slate-400 justify-between px-3 py-3 ">
                            <div className="flex items-center justify-between gap-10 ml-[550px]">   
                                <div className=" w-64">
                                    <h1 className="text-2xl ml-16 font-serif text-orange-500">About us</h1>
                                    <p id="about-line" className="font-serif">Welcome to Delicious, your go-to place for delicious food delivered right to your doorstep. We are passionate about bringing you the best culinary experiences.</p>
                                </div>
                                <div className="mb-16">
                                    <h1 className="text-xl ml-10 font-serif text-orange-500">Contact us</h1>
                                    <p>Email: info@Delicious.com</p>
                                    <p>Phone: +1 (123) 456-7890</p>
                                </div>
                                <div className="flex flex-col mb-10">
                                    <h1 className="text-xl ml-10 font-serif text-orange-500">Follow us</h1>
                                    <a className="text-lg" href="#">Facebook/@Delicious</a>
                                    <a className="text-lg" href="#">Twitter/@Delicious</a>
                                    <a className="text-lg" href="#">Instagram/@Delicious</a>
                                </div>
                            </div>
                    </div>
                    <div className="flex justify-center items-end bg-slate-400 mb-2">
                         <p id="about-line" className="text-base">2025 Delicious - Food Order Website</p>
                    </div>  
                      
            </div>
        )
    }
    
    
}
export default Body
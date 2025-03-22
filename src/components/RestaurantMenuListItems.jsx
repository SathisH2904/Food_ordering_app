import { useDispatch } from "react-redux";
import { additems } from "../constants/cartSlice";

let RestaurantMenuListItems=({item})=>{
    // console.log(item);
    let dispatch=useDispatch();
    let dishInfo=item.itemCards==undefined?item.card==undefined?item.dish.info:item.card.info:item.itemCards;
    let {name,price,description,imageId,defaultPrice}=dishInfo;
    let img_link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    let handleClick=(i)=>{
      dispatch(additems(i));
    }

    return Array.isArray(dishInfo)?  
    <div>
        {
            dishInfo.map((x,y)=>{
                return(<div className="flex justify-between bg-slate-50 items-center rounded-2xl p-5" key={y}>           
                            <div className="w-10/12 text-justify">
                                <div className="text-base font-semibold ">{x.card.info.name}</div>
                                <div className="text-lg font-sans font-semibold ">₹{(x.card.info.price) ? x.card.info.price / 100 : x.card.info.defaultPrice / 100}</div> 
                                <div id="about-line" className="text-base font-normal mt-2 w-3/4 text-slate-600">{x.card.info.description}</div> 
                            </div>
                            <div className="w-32 h-28 flex justify-center items-end ">
                                <img className="w-full h-full rounded-2xl" src={img_link+x.card.info.imageId}></img>
                                <button className="h-8 w-24 absolute rounded-lg bg-slate-100 hover:bg-green-300 text-base font-sans font-bold text-green-600  " onClick={()=>handleClick(x)}>ADD</button>
                            </div>
                        </div>)
            })
        }
                        </div> :  
                        <div className="flex justify-between bg-gray-100 border border-spacing-7 items-center rounded-2xl p-5">           
                            <div className="w-10/12 text-justify">
                                <div className="text-lg font-semibold ">{name}</div>
                                <div className="text-lg font-sans font-semibold ">₹{(price /100)? price /100 : defaultPrice /100}</div> 
                                <div id="about-line" className="text-base font-normal mt-2 w-3/4 text-slate-600">{description}</div> 
                            </div>
                            <div className="w-32 h-28 flex justify-center items-end ">
                                <img className="w-full h-full rounded-2xl" src={img_link+imageId}></img>
                                <button className="h-8 w-24 absolute rounded-lg bg-slate-100 hover:bg-green-300 text-base font-sans font-bold text-green-600" onClick={()=>handleClick(item)}>ADD</button>
                            </div>
                        </div>
}
export default RestaurantMenuListItems;
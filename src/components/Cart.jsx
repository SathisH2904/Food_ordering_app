 import React from "react";
 import {useSelector} from "react-redux";
 
 function Cart()
 {
    let cartDetails=useSelector((store)=> store.cart.items);
    let img_link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    console.log(cartDetails)
    let handleClick=(x)=>
    {
      removeitems(x);
    }
    // let {name,price,description,imageId}=x.card==undefined?x.card.info:x.dish.info;
    return(
      <div>
        <div className="text-3xl flex justify-center font-serif mt-32 w-full">Cart Items</div>
        <div className="mx-[15vw] mt-[2vh] flex flex-col gap-4">
          {
              cartDetails.map((x,y)=>{
                return (  <div className="flex justify-between bg-slate-50 items-center rounded-2xl p-5 " key={y}>           
                  <div className="w-3/5 text-justify">
                      <div className="text-base font-serif font-semibold ">{x.card!=undefined?x.card.info.name:x.dish.info.name}</div>
                      <div className="text-lg font-sans font-semibold ">₹{(x.card!=undefined) ? x.card.info.price / 100 : x.dish.info.price / 100}</div> 
                      <div id="about-line" className="text-base font-normal indent-5 w-3/4 text-slate-600">{x.card!=undefined?x.card.info.description:x.dish.info.description}</div> 
                  </div>
                  <div className="w-32 h-28 flex justify-center items-end ">
                      <img className="w-full h-full rounded-2xl" src={img_link+(x.card!=undefined?x.card.info.imageId:x.dish.info.imageId)}></img>
                      {/* <button className="h-8 w-24 absolute rounded-lg bg-slate-100 hover:bg-green-300 text-base font-sans font-bold text-green-600  " onClick={()=>handleClick(x)}></button> */}
                  </div>
              </div>)
              })
          }
        </div>
      </div>
    )
 }

 export default Cart;
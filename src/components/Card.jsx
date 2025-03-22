import { Link } from "react-router"
import { MdStars } from "react-icons/md";

let Card=(x)=>{
    console.log(x)
    let img_link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return(
        <Link className="w-80 bg-zinc-400 hover:shadow-slate-800 shadow-lg bg-opacity-30 border-solid rounded-lg border-neutral-900 px-4 py-4" to={x.val.info.id} >
            <img className="w-72 h-48 rounded-2xl" src={img_link + x.val.info.cloudinaryImageId}></img>
                <div className="font-semibold font-serif text-xl my-1">{x.val.info.name}</div>
                <div className="font-medium font-serif text-base my-1">{x.val.info.areaName}</div>
                <div className="flex justify-between my-1">
                    <div className="flex flex-row font-semibold text-lg">< MdStars className="h-7 text-green-800"/>{x.val.info.avgRating}</div>
                    <div className="font-semibold">{x.val.info.costForTwo}</div>
                </div>
        </Link>   
    )
}

export let DiscountCard=(y)=>{
     let img_link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (<div>
        <div>discount</div>
        <Link className="w-80 bg-zinc-400 hover:shadow-slate-800 shadow-lg bg-opacity-30 border-solid rounded-lg border-neutral-900 px-4 py-4" to={y.val.info.id} >
            <img className="w-72 h-48 rounded-2xl" src={img_link + y.val.info.cloudinaryImageId}></img>
                <div className="font-semibold font-serif text-xl my-1">{y.val.info.name}</div>
                <div className="font-medium font-serif text-base my-1">{y.val.info.areaName}</div>
                <div className="flex justify-between my-1">
                    <div className="flex flex-row font-semibold text-lg">< MdStars className="h-7 text-green-800"/>{y.val.info.avgRating}</div>
                    <div className="font-semibold">{y.val.info.costForTwo}</div>
                </div>
        </Link>   
    </div>)
}


export default Card
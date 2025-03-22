
import Playstore from "../image/Google_Play.png"
import Appstore from "../image/App_Store.png"

const BottomLine= ()=>{
    return(
    <div>
        <div className="flex justify-around bg-slate-200 w-full h-20">
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
                </div>
    </div>
)}

export default BottomLine;
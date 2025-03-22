import logo from "../image/delicious.jpg"
import { Link } from "react-router";
import { MdPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { useSelector } from "react-redux";


function Header(){
    let cartlength=useSelector((store)=> store.cart.items);

    return(
        <div className="flex justify-between bg-zinc-200 px-10 shadow-lg shadow-slate-500 sticky top-0 z-10 ">
            <div className="flex gap-3 items-center ml-7">
                <img className="h-16" src={logo}></img>
                <h1 className="text-4xl text-orange-600 font-black font-serif">Delicious</h1>
            </div>
            
            <div className="flex gap-5 items-center text-stone-900 font-medium font-serif text-lg hover:shadow-orange-400 mr-10">
                <Link to="/"><div className="flex items-center hover:text-orange-400"><FaHome className="w-5"/>Home</div></Link>
                <Link to="/contact"><div className="flex items-center hover:text-orange-400"><MdPhone  className="w-5" />Contact</div></Link>
                <Link to="/about"><div className="flex items-center hover:text-orange-400"><FaBookOpenReader  className="w-5" />About</div></Link>
                <Link to="/cart"><div className="flex items-center hover:text-orange-400"><FaCartPlus className="w-5"/>cart<span className="text-orange-600 ml-1 font-mono"> {cartlength.length==0?"":cartlength.length}</span></div></Link>
            </div>
        </div>
    )
}
export default Header;



import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Header from "./src/components/Header.jsx";
import About from "./src/components/About.jsx";
import Body from "./src/components/Body.jsx";
import Contact from "./src/components/Contact.jsx";
import RestaurantMenu from "./src/components/RestaurantMenu.jsx";
import Error from "./src/components/Error.jsx";
import Cart from "./src/components/Cart.jsx";
import {Provider} from "react-redux";
import appStore from "./src/constants/appStore.jsx";


let App=()=>{
    return(
        <div>
            <Provider store={appStore}>
                <Header></Header>
                <Outlet></Outlet>
            </Provider>
        </div>
    )
}
let x=createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            },
            {
                path:"cart",
                element:<Cart></Cart>
            },
            {
                path:"/:RestaurentMenu",
                element:<RestaurantMenu></RestaurantMenu>
            },
        ],
    errorElement:<Error></Error>

    },
])

let b=ReactDom.createRoot(document.getElementById("root"))
b.render(<RouterProvider router={x}></RouterProvider>)
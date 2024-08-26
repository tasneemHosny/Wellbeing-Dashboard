import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

function Layout() {
    return ( 
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div className="p-5 text-white bg-black text-center">
            <h2 className="text-4xl">footer</h2>
        </div>
        </>
     );
}

export default Layout;
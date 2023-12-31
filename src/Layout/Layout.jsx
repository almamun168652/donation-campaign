import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const Layout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Layout;
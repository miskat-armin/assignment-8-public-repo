import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[85%] mx-auto">
            <Navbar></Navbar>

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;
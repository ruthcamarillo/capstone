import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// add footer here and set it under outlet

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />

        </>
    );
};

export default Layout;
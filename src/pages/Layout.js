import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import TheNav from "../components/TheNav";
import Footer from "../components/Footer";
// add footer here and set it under outlet

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* <TheNav /> */}
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
import React from "react";
import Header from "../Header/Header.jsx"; // Corrected the import path
import Footer from "../Footer/Footer.jsx";
import Home from "../Home/Home.jsx";
// import Contact from "../Contact/Contact.jsx";
import About from "../About/About.jsx";
import Github from "../Github/Github.jsx";
import User from "../User/User.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>   
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;

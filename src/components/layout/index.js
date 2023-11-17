import React, {useState, useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import {ROUTER} from "../../utils/constants";
import {useLocation} from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {

    //Back-to-top function
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    //display and hide scroll to top button
    const [appear, setAppear] = useState(false);

    const controlBtn = () => {
        if (window.scrollY > 600 ) {
            setAppear(true)
        }else{
            setAppear(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlBtn)
        return () => {
            window.removeEventListener('scroll', controlBtn)
        }
    }, [])

    //hide header and footer from page layout
    const discardElement = [ROUTER.ADCATEGORY, ROUTER.ADPOST, ROUTER.ADLOGIN, ROUTER.ADDASHBOARD];
    const { pathname } = useLocation();

    const [show, setShow] = useState(false)
    //Change width of main page body
    const adminWrap = () => {
        if (discardElement.some((route) => pathname.includes(route))) {
            setShow(true)
        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        adminWrap();
    }, [pathname]);

    //hide header and footer from page layout
    if (discardElement.some((route) => pathname.includes(route))) {
        return (
            <div className="page">
                <Sidebar/>
                <div className={`page-body-wrapper`}>
                    {children}
                </div>
            </div>
        );
    }

    return(
        <div className="page">
            <Header />
            <div className={`page-body-wrapper ${show && 'admin-wrapper'}`}>
                {children}
            </div>
            <Footer />
            <div className={`back-to-top ${appear && 'back-show'}`} onClick={() => { scrollToTop() }}>
                <img className="icon-sm" src="/img/icon/chevron-up-black.svg" alt="smile" loading="lazy"/>
            </div>
        </div>
    )
}
export default Layout;
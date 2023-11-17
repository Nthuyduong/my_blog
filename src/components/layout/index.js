import React, {useState, useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import {ROUTER} from "../../utils/constants";
import {useLocation} from "react-router-dom";
import Sidebar from "./sidebar";
import { getLanguage, getTheme } from "../../utils/local-store";


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
                {/*<div className={`page-body-wrapper ${show && 'admin-wrapper'}`}>*/}
                <div className={`page-body-wrapper admin-wrapper`}>
                    {children}
                </div>
            </div>
        );
    }

    return(
        // Ví dụ về cách sử dụng biến css trong trường hợp thay đổi font-family theo ngôn ngữ
        // có thể áp dụng cách này cho trường hợp muốn làm chức năng theme dark/light
        // theme dark/light color: --primary, --secondary, --tertiary, --white, --black
        <div 
            className="page"
            style={{
                "--font-family": getLanguage() == 'vn' ? 'serif' : '',
                "--text-primary": getTheme() == 'light' ? 'black' : 'white',
                "--background-primary": getTheme() == 'light' ? 'white' : 'black',
            }}
        >
            <Header />
            <div className={`page-body-wrapper test`}>
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
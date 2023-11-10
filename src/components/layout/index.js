import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    //Back-to-top function
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return(
        <div className="page">
            <Header />
            <div className={`page-body-wrapper`}>
                {children}
            </div>
            <Footer />
            <div className="back-to-top" onClick={() => { scrollToTop() }}>
                <img className="icon-sm" src="/img/icon/chevron-up-black.svg" alt="smile" loading="lazy"/>
            </div>
        </div>
    )
}
export default Layout;
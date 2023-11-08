import React from "react";
import Header from "./header";
import Footer from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
import {faArrowDown, faArrowRight, faArrowUp} from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon className="icon-up" icon={faArrowUp}/>
            </div>
        </div>
    )
}
export default Layout;
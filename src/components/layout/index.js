import React, {useState, useEffect} from "react";
import Header from "./header";
import Footer from "./footer";

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

    return(
        <div className="page">
            <Header />
            <div className={`page-body-wrapper`}>
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
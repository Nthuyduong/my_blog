import React from "react";

const Layout = ({ children }) => {
    return(
        <div className="page">
            <Header />
            <div className={`page-body-wrapper`}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;
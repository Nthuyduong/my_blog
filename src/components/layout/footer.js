import React from "react";
import {ROUTER} from "../../utils/constants";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="blog-footer" id="blog-footer">
            <div className="blog-footer-inner">
                <div className="grid grid-cols-6 footer-popular">
                    <div className="">
                        <div className="mb-3">Popular</div>
                        <div>
                            <Link to={ROUTER.HOME} className="nav-link">Weading Photo Spots</Link>
                        </div>
                        <div>
                            <Link to={ROUTER.HOME} className="nav-link">Ceramic Handmade Shop</Link>
                        </div>
                        <div>
                            <Link to={ROUTER.HOME} className="nav-link">National Library</Link>
                        </div>
                        <div>
                            <Link to={ROUTER.HOME} className="nav-link">Gusto Chela Coffee</Link>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div>
                            <div className="mb-3">Infor</div>
                            <div>
                                <Link to={ROUTER.HOME} className="nav-link">About us</Link>
                            </div>
                            <div>
                                <Link to={ROUTER.HOME} className="nav-link">Destinations</Link>
                            </div>
                            <div>
                                <Link to={ROUTER.HOME} className="nav-link">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div>
                            <div className="mb-3">Connect</div>
                            <div>
                                <Link to={ROUTER.HOME} className="nav-link">Contact me</Link>
                            </div>
                            <div>
                                <Link to={ROUTER.HOME} className="nav-link">Work with me</Link>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2">
                        <div className="mb-2">Enter your email address to receive new posts in your inbox and seasonal newsletters with
                            extra goodies!</div>
                        <div>
                            <div>
                                <div className="my-input mb-3">
                                    <input className="w-full p-1" placeholder="Email address"/>
                                </div>
                                <button className="w-full my-btn-pr" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-sub">
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <div>COPYRIGHT © 2023 · Nthduong Blog. ALL RIGHTS RESERVED</div>
                    </div>
                    <div className="col-span-3">
                        <div className="my-social flex w-full">
                            <div>Instagram</div>
                            <div className="mx-3">Pinterest</div>
                            <div>Behance</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
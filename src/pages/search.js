import React, { useState } from "react";
import {Link} from "react-router-dom";
import {ROUTER} from "../utils/constants";

const Search = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="heading_2 text-center mb-4 pt-4">Search Results for: Vietnam</div>
                <div className="grid grid-cols-12">
                    <div className="col-span-3"></div>
                    <div className="col-span-6">
                        <div className="">
                            {/*<div className="flex align-middle mr-2">*/}
                            {/*    <img className="icon-ssm" src="./img/icon/search.svg" alt="smile" loading="lazy"/>*/}
                            {/*</div>*/}
                            <div className="my-search-bar">
                                <input className="w-full p-1" placeholder="Where you want to go?"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3"></div>
                </div>
                {/*RESULTS HERE*/}
                <div className="search-result mt-6">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-8">
                            <div className="search-result">
                                <div className="">Drink & Coffee</div>
                                <div className="heading_5 my-1">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</div>
                                <div className="flex mb-1">
                                    <div>By Nthduong</div>
                                    <div className="flex ml-3">
                                        <div className="mr-1">
                                            <img className="icon-sm" src="./img/icon/clock.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div>November 6, 2023</div>
                                    </div>
                                </div>
                                <div className="search-result-content mb-2">
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                    quisque vitae, Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                    Blandit consequat quisque vitae
                                </div>
                                <div>
                                    <Link to={ROUTER.ARTICLE}>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                            <div className="search-decor my-4"></div>
                            <div className="search-result">
                                <div className="">Drink & Coffee</div>
                                <div className="heading_5 my-1">Vietnam With Kids: 6 Best Vietnam Family Holiday Destinations + Travel Tips</div>
                                <div className="flex mb-1">
                                    <div>By Nthduong</div>
                                    <div className="flex ml-3">
                                        <div className="mr-1">
                                            <img className="icon-sm" src="./img/icon/clock.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div>November 6, 2023</div>
                                    </div>
                                </div>
                                <div className="search-result-content mb-2">
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                    quisque vitae, Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                    Blandit consequat quisque vitae
                                </div>
                                <div>
                                    <Link to={ROUTER.ARTICLE}>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

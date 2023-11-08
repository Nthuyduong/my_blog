import React from "react";

const Sub_destination = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="destination-banner relative">
                    <div className="banner-img">
                        <img className="w-full" src="./img/subdes/banner.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="text-center absolute destination-content text-white">
                        <div>
                            <div className="heading_2">Welcome to Hanoi, Vietnam!</div>
                            <div className="flex justify-center mt-3">
                                <div className="flex des-count pr-3">
                                    <div className="pr-1">icon</div>
                                    <div>5 Destinations</div>
                                </div>
                                <div className="flex location-count pl-3">
                                    <div className="pr-1">icon</div>
                                    <div>400 Locations</div>
                                </div>
                            </div>
                        </div>
                        <div className="show-all-btn">
                            <button className="scroll-down">Explore All Destinations</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-2 top-sub-destination">
                <div className="grid grid-cols-12 gap-2 top-sub-inner">
                    <div className="col-span-3 relative top-main">
                        <img className="w-full" src="./img/subdes/sub-top.jpg" alt="smile" loading="lazy"/>
                        <div className="absolute top-content text-center">
                            <div className="heading_6 mb-1">Sorenta Coffee</div>
                            <div className="">10 images</div>
                        </div>
                    </div>
                    <div className="col-span-3 relative top-main">
                        <img className="w-full" src="./img/subdes/sub-top.jpg" alt="smile" loading="lazy"/>
                        <div className="absolute top-content text-center">
                            <div className="heading_6 mb-1">Sorenta Coffee</div>
                            <div className="">10 images</div>
                        </div>
                    </div>
                    <div className="col-span-3 relative top-main">
                        <img className="w-full" src="./img/subdes/sub-top.jpg" alt="smile" loading="lazy"/>
                        <div className="absolute top-content text-center">
                            <div className="heading_6 mb-1">Sorenta Coffee</div>
                            <div className="">10 images</div>
                        </div>
                    </div>
                    <div className="col-span-3 relative top-main">
                        <img className="w-full" src="./img/subdes/sub-top.jpg" alt="smile" loading="lazy"/>
                        <div className="absolute top-content text-center">
                            <div className="heading_6 mb-1">Sorenta Coffee</div>
                            <div className="">10 images</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-60">
                <div className="sub-destination-title">
                    <div className="flex justify-center">
                        {/*breadcrumb*/}
                        <div className="flex self-center">
                            <ul className="flex">
                                <li><a href="#">Home</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Destination</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Drink & Coffee</a></li>
                            </ul>
                        </div>
                        <div className="heading_3 mx-auto">All Destinations</div>
                        {/*Change layout*/}
                        <div className="self-center flex">
                            Change layout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sub_destination;
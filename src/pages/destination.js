import React from "react";

const Destination = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="destination-banner relative">
                    <div className="banner-img">
                        <img className="w-full" src="./img/destination/banner.jpg" alt="smile" loading="lazy"/>
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
            <div className="container-fluid p-60">
                <div className="destination-title">
                    <div className="flex justify-center">
                        {/*breadcrumb*/}
                        <div className="flex self-center">
                            <ul className="flex">
                                <li><a href="#">Home</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Destination</a></li>
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
            <div className=""></div>
        </div>
    )
}

export default Destination;
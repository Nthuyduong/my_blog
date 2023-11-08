import React from "react";

const Gallery = () => {
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
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        {/*Sort blog by*/}
                        <div className="self-center flex ml-auto">
                            <select>
                                <option value="">Recently update</option>
                                <option value="">Oldest article</option>
                                <option value="">Popular article</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 row-span-2 test">
                        <img className="w-full" src="./img/gallery/rowspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-6 test">
                        <img className="w-full" src="./img/gallery/colspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-6 test">
                        <img className="w-full" src="./img/gallery/colspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-6 test">
                        <img className="w-full" src="./img/gallery/colspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 row-span-2 test">
                        <img className="w-full" src="./img/gallery/rowspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 test">
                        <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
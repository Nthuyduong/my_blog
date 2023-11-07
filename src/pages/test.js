import React from "react";

const Test = () => {
    return(
        <div id="main" className="m-[30px]">
            <div className=" bg-black rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="">
                        <img className="h-60 w-full object-cover md:h-full md:w-80" src="./img/test/test2.jpg"
                             alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="text-white font-semibold">This is title</div>
                        <div className="font-light text-white mt-2">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
                            We have a list of places to do just that.</div>
                        <div className="mt-2 text-white">Read more</div>
                    </div>
                </div>
            </div>
            <div className="mt-8 md:columns-2 lg:columns-4 gap-8">
                <div className="mb-8 bg-black rounded-xl overflow-hidden">
                    <div>
                        <div className="relative">
                            <img className="h-50 md:w-full w-full object-cover md:h-full" src="./img/test/test2.jpg"
                                 alt="Modern building architecture"/>
                            <div className="absolute top-4 right-4 bg-white p-2 rounded-3xl">Love</div>
                        </div>
                        <div className="p-4">
                            <div className="text-white">This is title</div>
                            <div className="font-light text-white mt-2">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
                                We have a list of places to do just that.</div>
                        </div>
                    </div>
                </div>
                <div className="mb-8 bg-black rounded-xl overflow-hidden">
                    <div>
                        <div className="relative">
                            <img className="h-60 md:w-full w-full object-cover md:h-full" src="./img/test/test2.jpg"
                                 alt="Modern building architecture"/>
                            <div className="absolute top-4 right-4 bg-white p-2 rounded-3xl">Love</div>
                        </div>
                        <div className="p-4">
                            <div className="text-white">This is title</div>
                            <div className="font-light text-white mt-2">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
                                We have a list of places to do just that.</div>
                        </div>
                    </div>
                </div>
                <div className="mb-8 bg-black rounded-xl overflow-hidden">
                    <div>
                        <div className="relative">
                            <img className="md:h-40 h-60 md:w-full w-full object-cover lg:h-full" src="./img/test/test2.jpg"
                                 alt="Modern building architecture"/>
                            <div className="absolute top-4 right-4 bg-white p-2 rounded-3xl">Love</div>
                        </div>
                        <div className="p-4">
                            <div className="text-white">This is title</div>
                            <div className="font-light text-white mt-2">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
                                We have a list of places to do just that.</div>
                        </div>
                    </div>
                </div>
                <div className="bg-black rounded-xl overflow-hidden">
                    <div>
                        <div className="relative">
                            <img className="h-60 md:w-full w-full object-cover md:h-full" src="./img/test/test2.jpg"
                                 alt="Modern building architecture"/>
                            <div className="absolute top-4 right-4 bg-white p-2 rounded-3xl">Love</div>
                        </div>
                        <div className="p-4">
                            <div className="text-white">This is title</div>
                            <div className="font-light text-white mt-2">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
                                We have a list of places to do just that.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="lg:columns-3 md:columns-2">
                    <div className="h-12 md:h-12 mb-4 bg-gradient-to-r from-green to-blue rounded-xl"></div>
                    <div className="h-12 md:h-12 mb-4 bg-gradient-to-r from-green to-blue rounded-xl"></div>
                    <div className="h-12 md:h-24 mb-4 bg-gradient-to-r from-green to-blue rounded-xl"></div>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img src="./facebook.svg" alt="Facebook"/>
                    </li>
                    <li>
                        <img src="./disney.svg" alt="Disney"/>
                    </li>
                    <li>
                        <img src="./airbnb.svg" alt="Airbnb"/>
                    </li>
                    <li>
                        <img src="./apple.svg" alt="Apple"/>
                    </li>
                    <li>
                        <img src="./spark.svg" alt="Spark"/>
                    </li>
                    <li>
                        <img src="./samsung.svg" alt="Samsung"/>
                    </li>
                    <li>
                        <img src="./quora.svg" alt="Quora"/>
                    </li>
                    <li>
                        <img src="./sass.svg" alt="Sass"/>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true">
                    <li>
                        <img src="./facebook.svg" alt="Facebook"/>
                    </li>
                    <li>
                        <img src="./disney.svg" alt="Disney"/>
                    </li>
                    <li>
                        <img src="./airbnb.svg" alt="Airbnb"/>
                    </li>
                    <li>
                        <img src="./apple.svg" alt="Apple"/>
                    </li>
                    <li>
                        <img src="./spark.svg" alt="Spark"/>
                    </li>
                    <li>
                        <img src="./samsung.svg" alt="Samsung"/>
                    </li>
                    <li>
                        <img src="./quora.svg" alt="Quora"/>
                    </li>
                    <li>
                        <img src="./sass.svg" alt="Sass"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Test;
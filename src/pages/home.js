import React from "react";

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="home-banner">
                    <img className="w-full" src="./img/home/banner.jpg" alt="smile" loading="lazy"/>
                </div>
                {/*Lastest on this blog*/}
                <div className="recently-update">
                    <div className="heading_3 mb-4">Recently Update</div>
                    <div className="grid grid-cols-12 gap-4 recently-update-blog">
                        <div className="col-span-12 md:col-span-4">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small-text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small-text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small-text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-destination">
                    <div className="heading_3 mb-5 text-center">Popular Destinations</div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-2 relative h-popular-des-ct">
                            <div className="des-ct-img">
                                <img className="w-full" src="./img/home/category.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div className="absolute text-white category-des-content">
                                <div className="heading_4 text-center">Drink & Coffee</div>
                                <div className="flex justify-center mt-2">
                                    <div className="flex article-count pr-3">
                                        <div className="pr-1">icon</div>
                                        <div>10 Blogs Article</div>
                                    </div>
                                    <div className="flex location-count pl-3">
                                        <div className="pr-1">
                                            <img className="icon-sm" src="./img/icon/map-pin.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div>20 Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 relative h-popular-des-ct">
                            <div className="des-ct-img">
                                <img className="w-full" src="./img/home/category.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div className="absolute text-white category-des-content">
                                <div className="heading_4 text-center">Drink & Coffee</div>
                                <div className="flex justify-center mt-2">
                                    <div className="flex article-count pr-3">
                                        <div className="pr-1">
                                            icon
                                        </div>
                                        <div>10 Blogs Article</div>
                                    </div>
                                    <div className="flex location-count pl-3">
                                        <div className="pr-1">
                                            <img className="icon-sm" src="./img/icon/map-pin.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div>20 Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 relative h-popular-des-ct">
                            <div className="des-ct-img">
                                <img className="w-full" src="./img/home/category.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div className="absolute text-white category-des-content">
                                <div className="heading_4 text-center">Drink & Coffee</div>
                                <div className="flex justify-center mt-2">
                                    <div className="flex article-count pr-3">
                                        <div className="pr-1">
                                            icon
                                        </div>
                                        <div>10 Blogs Article</div>
                                    </div>
                                    <div className="flex location-count pl-3">
                                        <div className="pr-1">
                                            <img className="icon-sm" src="./img/icon/map-pin.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div>20 Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 relative h-popular-des-ct">
                            <div className="des-ct-img">
                                <img className="w-full" src="./img/home/category.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div className="absolute text-white category-des-content">
                                <div className="heading_4 text-center">Drink & Coffee</div>
                                <div className="flex justify-center mt-2">
                                    <div className="flex article-count pr-3">
                                        <div className="pr-1"></div>
                                        <div>10 Blogs Article</div>
                                    </div>
                                    <div className="flex location-count pl-3">
                                        <div className="pr-1">
                                            <img className="icon-sm" src="./img/icon/map-pin.svg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div>20 Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-100">
                    <div className="heading_3 mb-4">Reader's Favorite</div>
                    <div className="grid grid-cols-12 gap-4 recently-update-blog">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small_text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_6">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small_text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small_text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div>
                                <img className="w-100" src="./img/home/article.jpg" alt="smile" loading="lazy"/>
                            </div>
                            <div>
                                <div className="article-info py-1 mb-1">
                                    <div className="flex mb-1">
                                        <div className="mr-auto small_text">Drink & Coffee</div>
                                        <div className="small_text">November 8, 2023</div>
                                    </div>
                                    <div className="heading_5">Top 5 beautiful Coffee Shop in HaNoi</div>
                                </div>
                                <div className="flex">
                                    <div className="mr-auto"><a href="#">Read more</a></div>
                                    <div>Share</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-contact-me">
                    <div className="contact-inner">
                        <div className="">
                            <div className="heading_3 mb-3">Connect with me</div>
                            <div className=""><a href="#">Nthduong898@gmail.com</a></div>
                            <div><a href="#">https://nthuyduong.github.io</a></div>
                        </div>
                    </div>
                </div>
                <div className="subscribe-blog">
                    <div className="grid grid-cols-6">
                        <div className="col-span-2"></div>
                        <div className="col-span-2">
                            <div className="">
                                <div className="heading_3 text-center mb-5">Sign Up For Newsletters</div>
                                <div>
                                    <div className="email-signup my-input mb-3">
                                        <input className="w-full" placeholder="Email address"/>
                                    </div>
                                    <button className="w-full my-btn-pr" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
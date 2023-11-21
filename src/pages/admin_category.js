import React from "react";

const Admincategory = () => {
    return(
        <div>
            <div className="category-page">
                <div className="heading_1 mb-6">Destination page</div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <div className="search-bar-box flex">
                            <input name="findOrder" id="findOrder" className="search-input w-100" type="text"
                                   placeholder="Enter name/id post..."/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <select className="sl-box">
                            <option value="" selected hidden>Status</option>
                            <option value="">Published</option>
                            <option value="">Draft</option>
                            <option value="">New</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">New Category</button>
                    </div>
                    <div className="col-span-1">
                        <button className="my-btn-pr w-full">Delete category</button>
                    </div>
                </div>
                <div className="my-line my-4"></div>
                <div className="admin-tbl">
                    <div className="flex tbl-row admin-tbl-title">
                        <div className="cell-ssm">ID</div>
                        <div className="cell">Date & Time</div>
                        <div className="cell">Feature image</div>
                        <div className="cell">Post title</div>
                        <div className="cell">Author</div>
                        <div className="cell">Status</div>
                        <div className="cell">Action</div>
                        <div className="cell">Action</div>
                    </div>
                    <div className="post-list">
                        <div className="flex tbl-row">
                            <div className="cell-ssm">ID</div>
                            <div className="cell">Date & Time</div>
                            <div className="cell">Feature image</div>
                            <div className="cell">Post title</div>
                            <div className="cell">Author</div>
                            <div className="cell">Status</div>
                            <div className="cell">
                                <select className="sl-box">
                                    <option value="" selected hidden>Choose status</option>
                                    <option value="">Published</option>
                                    <option value="">Draft</option>
                                    <option value="">New</option>
                                </select>
                            </div>
                            <div className="cell">Action</div>
                        </div>
                        <div className="flex tbl-row">
                            <div className="cell-ssm">ID</div>
                            <div className="cell">Date & Time</div>
                            <div className="cell">Feature image</div>
                            <div className="cell">Post title</div>
                            <div className="cell">Author</div>
                            <div className="cell">

                            </div>
                            <div className="cell">
                                <select className="sl-box">
                                    <option value="" selected hidden>Choose status</option>
                                    <option value="">Published</option>
                                    <option value="">Draft</option>
                                    <option value="">New</option>
                                </select>
                            </div>
                            <div className="cell">Action</div>
                        </div>
                        <div className="flex tbl-row">
                            <div className="cell-ssm">ID</div>
                            <div className="cell">Date & Time</div>
                            <div className="cell">Feature image</div>
                            <div className="cell">Post title</div>
                            <div className="cell">Author</div>
                            <div className="cell">

                            </div>
                            <div className="cell">
                                <select className="sl-box">
                                    <option value="" selected hidden>Choose status</option>
                                    <option value="">Published</option>
                                    <option value="">Draft</option>
                                    <option value="">New</option>
                                </select>
                            </div>
                            <div className="cell">Action</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admincategory;
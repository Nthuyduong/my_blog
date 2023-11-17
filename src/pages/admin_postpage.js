import React from "react";

const admin_postpage = () => {
    return(
        <div>
            <div className="container-fluid">
                {/*POST TABLE*/}
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
export default admin_postpage;
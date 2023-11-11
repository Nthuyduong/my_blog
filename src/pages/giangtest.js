import React from "react";
import Slider from "../components/common/slider";

const GiangTest = () => {

    const configs = {
        sliderPerRow: 3,
    }

    return (
        <div className="giang-test">
            <Slider 
                configs={configs}
            >
                <div className="flex justify-center">
                    gio
                </div>
                <div className="flex justify-center">
                    dua
                </div>
                <div className="flex justify-center">
                    cay
                </div>
                <div className="flex justify-center">
                    cai
                </div>
                <div className="flex justify-center">
                    ve
                </div>
                <div className="flex justify-center">
                    troi
                </div>
            </Slider>
        </div>
    )
}

export default GiangTest;
import React, { useState, Children, cloneElement, useEffect, useRef } from "react";

const Slider = ({ 
    configs,
    children 
}) => {
    
    const ref = useRef(null);

    const defaultConfigs = {
        sliderPerRow: 1,
        allowDrag: true,
        duration: 400,
    }

    configs = { ...defaultConfigs, ...configs }

    const [active, setActive] = useState(0);
    const [dragX, setDragX] = useState(0);
    const [disableNext, setDisableNext] = useState(false);
    const [disablePrev, setDisablePrev] = useState(true);

    const countChildren = Children.count(children);

    const maxSlide = countChildren - configs.sliderPerRow;

    useEffect(() => {
        runSlider();
    }, [active, dragX])
    
    const runSlider = () => {
        setDisableNext(false);
        setDisablePrev(false);
        if (active === 0) {
            setDisablePrev(true);
        }
        if (active >= maxSlide) {
            setDisableNext(true);
        }
        
        let transformX = active * 100 / countChildren;
        if (transformX > (100 / countChildren) * maxSlide) {
            transformX = (100 / countChildren) * maxSlide
        }
        ref.current.style.transition = `transform var(--transition-duration) cubic-bezier(0.645, 0.045, 0.355, 1) 0s${
            dragX
              ? ""
              : ", margin var(--transition-duration) cubic-bezier(0.645, 0.045, 0.355, 1) 0s"
          }`
        ref.current.style.transform = `translateX(-${transformX}%)`;
        if (configs.allowDrag) {
            ref.current.style.marginLeft = dragX + 'px';
        }
    }

    const nextSlide = () => {
        if (active < maxSlide) {
            setActive(active + 1);
        }
    }

    const prevSlide = () => {
        console.log(active)
        if (active > 0) {
            setActive(active - 1);
        }
    }

    const changeSlide = (target) => {
        if (target >= 0 && target <= maxSlide + 1) {
            setActive(target);
        } else if (target < 0) {
            setActive(0);
        } else {
            setActive(children.length - 1);
        }
    }

    const startDrag = (e) => {
        let clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
        let draxTemp = dragX;

        let onMoving = (e) => {
            draxTemp = (e instanceof TouchEvent ? e.touches[0].clientX : e.clientX) - clientX;
            setDragX(draxTemp)
        }
        let onEnd = (e) => {
            if (
                Math.abs(draxTemp) > window.innerWidth * 0.1
            ) {
                let step = ref.current.offsetWidth / Math.abs(draxTemp) * maxSlide;
                console.log(draxTemp, ref.current.offsetWidth, step)
                if (step > 0.5 && step < 1) {
                    step = 1;
                } else if (step > countChildren + configs.sliderPerRow - 0.5) {
                    step = 1;
                } else if (step < 0.5) {
                    step = 0;
                } else {
                    step = Math.round(step);
                }
                if (draxTemp > 0) {
                    changeSlide(active - (step));
                } else {
                    changeSlide(active + (step));
                }
                
            }
            setDragX(0);
            document.removeEventListener('mousemove', onMoving);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMoving);
            document.removeEventListener('touchend', onEnd);
        }
        document.addEventListener('mousemove', onMoving);
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchmove', onMoving);
        document.addEventListener('touchend', onEnd);
    }

    return (
        <div 
            className="slider-wrp"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
        >
            {maxSlide}
            <div 
                className="slider-items"
                ref={ref}
                style={{ width: `${(countChildren / configs.sliderPerRow) * 100}%`, "--transition-duration": `${configs.duration ?? 400}ms` }}
            >
                {Children.map(children, (child, index) => {
                    return cloneElement(child, {
                        className: `slider-item ${child.props.className} ${active === index ? 'slide-active' : ''}`
                    })
                })}
            </div>
            <div className="slider-control">
                <div className={`prev-button ${ disablePrev ? 'btn-disable': '' }`}>
                    <button className="my-prev-btn" onClick={prevSlide}>
                        <img className="icon-sm" src="./img/icon/chevron-left-black.svg" alt="smile" loading="lazy"/>
                    </button>
                </div>
                <div className={`next-button ${ disableNext ? 'btn-disable': ''}`}>
                    <button className="my-next-btn" onClick={nextSlide}>
                        <img className="icon-sm" src="./img/icon/chevron-right-black.svg" alt="smile" loading="lazy"/>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Slider;
import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideModalLoading } from "../../store/modal/modal.action";

const ModalLoading = () => {

    const dispatch = useDispatch();

    // lấy giá trị của state modal từ store modal
    const { show } = useSelector(state => state.modal.modalLoading);

    const handleHide = () => {
        dispatch(hideModalLoading());
    }

    if (!show) {
        return <></>;
    }
    return (
        <div className="modal-backdrop">
            <div className="modal modal-open">
                <div className="modal-dialog">
                    <div className="modal-header">
                        <button className="close" onClick={handleHide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        loading...
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default ModalLoading;
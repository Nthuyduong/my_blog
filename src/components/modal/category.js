import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideCategory} from "../../store/newcategory/category.action";

const ModalCategory = () => {

    const dispatch = useDispatch();

    // lấy giá trị của state modal từ store modal
    const { show } = useSelector(state => state.category.modalCategory);

    const handleHide = () => {
        dispatch(hideCategory());
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
                        modal category
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ModalCategory;
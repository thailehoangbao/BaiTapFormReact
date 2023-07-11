import {DELETE_SV, EDIT_SV ,SUBMIT_SV} from './types/sinhVienType';



export const deleteSVAction = (id) => {
    return {
        type: DELETE_SV,
        payload: id
    }
}


export const editSVAction = (sv) => {
    return {
        type: EDIT_SV,
        payload: sv,
        isSubmit: false
    }
}


export const actSubmitSV = (sv) => {
    return {
        type: SUBMIT_SV,
        payload: sv
    }
}
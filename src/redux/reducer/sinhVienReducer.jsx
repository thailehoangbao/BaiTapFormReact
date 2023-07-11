import { DELETE_SV, EDIT_SV, SEARCH_SV, SUBMIT_SV } from "../action/types/sinhVienType"

const stataDefault = {
    dataSinhVien : [
        {
        maSV: "1",
        tenSV: 'Thái Bảo',
        email: "thaibao@gmail.com",
        sdt: '0931888303'
        },
        {
        maSV: "2",
        tenSV: 'Minh Như',
        email: "minhnhu@gmail.com",
        sdt: '012345678'
        },
    ],
    svEdit : null,
    isSubmitBtn: true,
    keyword: ""
}


export const sinhVienReducer = (state = stataDefault, action) => {
    switch (action.type) {
        case DELETE_SV: {
            const dataSVClone = [...state.dataSinhVien]
            const index = dataSVClone.findIndex(sv => sv.maSV === action.payload);
            if (index !== -1) {
                dataSVClone.splice(index,1);
            }
            state.dataSinhVien = dataSVClone;
            return {...state};
        }

        case EDIT_SV: {
            state.isSubmitBtn = action.isSubmit;
            let svEditClone = {...state.svEdit};
            svEditClone = action.payload;
            state.svEdit = svEditClone;

            return {...state }
        }


        case SUBMIT_SV : {
            let dataSVClone =[...state.dataSinhVien];
            const index = dataSVClone.findIndex(sv => sv.maSV === action.payload.maSV);
            if (index !== -1) { 
                dataSVClone[index] = action.payload;
                state.dataSinhVien = dataSVClone;
            } else {
                dataSVClone.push(action.payload);
                state.dataSinhVien = dataSVClone;
            }

            return {...state};
        }

        case SEARCH_SV: {
            state.keyword = action.payload;
            return {...state};
        }
        
        default: return {...state}
    }
}
import React, { Component } from 'react';
import { deleteSVAction, editSVAction } from '../redux/action/sinhVienAction';
import { connect } from 'react-redux';
class ItemSinhVien extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let { sv, deleteSV,editSV } = this.props;

        return (
            <tr>
                <td>{sv.maSV}</td>
                <td>{sv.tenSV}</td>
                <td>{sv.email}</td>
                <td>{sv.sdt}</td>
                <td>
                    <button className='btn btn-danger mr-2' onClick={() => {
                        deleteSV(sv.maSV);
                    }}>Delete</button>
                    <button className='btn btn-info' data-toggle="modal" data-target="#modelIdUser"  onClick={()=> {
                        editSV(sv);
                    }}>Edit</button>
                </td>
            </tr>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteSV: (id) => {
            dispatch(deleteSVAction(id));
        },
        editSV: (sv) => {
            dispatch(editSVAction(sv));
        }
    }
}

export default connect(null,mapDispatchToProps)(ItemSinhVien);
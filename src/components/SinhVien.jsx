import React, { Component } from 'react'
import Modal from './Modal';
import DSSV from './DSSV';
import { EDIT_SV } from '../redux/action/types/sinhVienType';
import { connect } from 'react-redux';
import Search from './Search';

class SinhVien extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        let {addSV} = this.props;
        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">Quản Lý Sinh Viên</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelIdUser" onClick={() => {
                        addSV()
                    }}>Add User
                    </button>
                </div>
                <Search />
                <DSSV />
                <Modal />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSV : () => {
            dispatch({
                type: EDIT_SV,
                isSubmit: true
            })
        }

    }
}

export default connect(null, mapDispatchToProps)(SinhVien);
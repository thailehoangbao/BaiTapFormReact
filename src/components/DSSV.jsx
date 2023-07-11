import React, { Component } from 'react'
import ItemSinhVien from './ItemSinhVien'
import { connect } from 'react-redux';

class DSSV extends Component {

    constructor(props) {
        super(props);


    }

    renderDSSV = () => {
        let { listSinhVien, keyword } = this.props;
        //filter dựa vào keyword
        listSinhVien = listSinhVien.filter((sv) => sv.tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
        return listSinhVien?.map((sv, index) => {
            return <ItemSinhVien sv={sv} key={index} />
        })
    }



    render() {
        return (
            <table className='table' style={{ width: "100%" }}>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Mã SV</th>
                        <th>Tên SV</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderDSSV()}
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        listSinhVien: state.sinhVienReducer.dataSinhVien,
        keyword: state.sinhVienReducer.keyword
    }

}

export default connect(mapStateToProps, null)(DSSV)
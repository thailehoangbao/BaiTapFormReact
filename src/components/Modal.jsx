import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actSubmitSV } from '../redux/action/sinhVienAction';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ttsv: {
                maSV: '',
                tenSV: '',
                email: '',
                sdt: '',
            },
            errors: {
                maSV: '',
                tenSV: '',
                email: '',
                sdt: '',
            },
            maSVValid: false,
            tenSVValid: false,
            emailValid: false,
            sdtValid: false,
            formValid: false,
        }
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
        //Cập nhật lại state
        if (nextProps && nextProps.thongTinSV) {
            this.setState({
                ttsv: {
                    maSV: nextProps.thongTinSV.maSV,
                    tenSV: nextProps.thongTinSV.tenSV,
                    email: nextProps.thongTinSV.email,
                    sdt: nextProps.thongTinSV.sdt,
                }
            })

        } else {
            this.setState({
                ttsv: {
                    maSV: "",
                    tenSV: "",
                    email: "",
                    sdt: "",
                }
            });

        }
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ttsv: {
                ...prevState.ttsv,
                [name]: value,
            }
        }));
    };


    handleOnBlur = (event) => {
        const { name, value } = event.target;
        let mess = value.trim() ? '' : `Vui Lòng Nhập Trường ${name} Này`;


        let { maSVValid, tenSVValid, emailValid, sdtValid } = this.state;

        switch (name) {
            case 'maSV': {
                maSVValid = mess === '' ? true : false;
                if (value && value.trim().length > 4) {
                    mess = 'Vui lòng nhập dưới 5 ký tự số!';
                    maSVValid = false;
                }
            }
                break;
            case 'tenSV': {
                tenSVValid = mess === '' ? true : false;
                if (value && !isNaN(value)) {
                    mess = 'Vui lòng nhập chuỗi ký tự !';
                    tenSVValid = false;
                }
            }
                break;
            case 'email': {
                emailValid = mess === '' ? true : false;
                if (value && !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                    mess = 'Vui lòng nhập đúng định dạng email';
                    emailValid = false;
                }
            }
                break;
            case 'sdt': {
                sdtValid = mess === '' ? true : false;
                if (value && !value.match(/^0[1-9]\d{8}$/)) {
                    mess = 'Vui lòng nhập đúng định dạng số điện thoại ở Việt Nam';
                    sdtValid = false;
                }
            }
                break;

            default:
                break;
        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: mess
            },
            maSVValid,
            tenSVValid,
            emailValid,
            sdtValid,
            formValid: maSVValid && tenSVValid && emailValid && sdtValid
        })
    };


    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        const { submitSV, thongTinSV, isSubmit } = this.props;
        return (
            <div className="modal fade" id="modelIdUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{thongTinSV ? 'EDIT_SV' : "ADD_SV"}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Mã Sinh Viên</label>
                                    
                                    <input disabled={!isSubmit}  name="maSV" type="text" className="form-control" value={this.state.ttsv.maSV} onBlur={this.handleOnBlur}
                                        onChange={this.handleChange} />
                                    {this.state.errors.maSV && <div className='text-danger'>{this.state.errors.maSV}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Tên Sinh Viên</label>
                                    <input name="tenSV" type="text" className="form-control" onChange={this.handleChange} value={this.state.ttsv.tenSV} onBlur={this.handleOnBlur} />
                                    {this.state.errors.tenSV && <div className='text-danger'>{this.state.errors.tenSV}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" type="text" className="form-control" onChange={this.handleChange} value={this.state.ttsv.email} onBlur={this.handleOnBlur} />
                                    {this.state.errors.email && <div className='text-danger'>{this.state.errors.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Số Điện Thoại</label>
                                    <input name="sdt" type="text" className="form-control" onChange={this.handleChange} value={this.state.ttsv.sdt} onBlur={this.handleOnBlur} />
                                    {this.state.errors.sdt && <div className='text-danger'>{this.state.errors.sdt}</div>}
                                </div>
                                <button disabled={!this.state.formValid && isSubmit} type="submit" className="btn btn-success" onClick={() => {
                                    submitSV(this.state.ttsv)
                                }}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        thongTinSV: state.sinhVienReducer.svEdit,
        isSubmit: state.sinhVienReducer.isSubmitBtn
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        //key là props cho component Useritems
        submitSV: (user) => {
            // dispatch gửi action len reducers
            dispatch(actSubmitSV(user));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
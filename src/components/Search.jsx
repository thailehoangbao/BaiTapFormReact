import React, { Component } from 'react'
import { SEARCH_SV } from '../redux/action/types/sinhVienType';
import { connect } from 'react-redux';

class Search extends Component {

    constructor(props) {
        super(props);

    }

    handleChangeSearch = (e) => {
        const {searchSV } = this.props;
        let keyword = e.target.value;
        searchSV(keyword);
    }


    render() {
        return (
            <div>
                <div className="input-group mb-3 mt-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Search</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search Name" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleChangeSearch}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchSV : (keyword) => {
            dispatch({
                type: SEARCH_SV,
                payload: keyword
            })
        }

    }
}

export default connect(null, mapDispatchToProps)(Search);

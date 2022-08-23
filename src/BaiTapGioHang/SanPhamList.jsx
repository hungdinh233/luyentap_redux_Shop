import React, { Component } from "react";
import { connect } from "react-redux";
import SanPham from "./SanPham";

class SanPhamList extends Component {
  renderShanPham = () => {
    let { arrSanPham } = this.props;

    return arrSanPham.map((sp, index) => {
      return (
        <div className="col-3" key = {index}>
          <SanPham sp={sp} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className=" text-center">Sản phẩm đang bán</h3>
        <div className="row">
            {this.renderShanPham()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSanPham: state.giohangReducer.arrSanPham,
});

export default connect(mapStateToProps)(SanPhamList);

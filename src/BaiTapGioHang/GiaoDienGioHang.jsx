import React, { Component } from "react";
import { connect } from "react-redux";
import GioHang from "./GioHang";
import SanPhamList from "./SanPhamList";

class GiaoDienGioHang extends Component {
  render() {
    return (
      <div className="container">
        <img src="./img/logo.png" alt="logo" style={{ height: 100 }} />      
        <GioHang />
        <SanPhamList />       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(GiaoDienGioHang);

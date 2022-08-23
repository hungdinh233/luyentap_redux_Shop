import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card mb-4">
        <img
          className="card-img-top"
          src={sp.hinhAnh}
          style={{ height: 250 }}
          alt="Title"
        />
        <div className="card-body bg-dark text-warning">
          <h4 className="card-title" style={{ fontSize: 20 }}>
            {sp.tenSP}
          </h4>
          <p className="card-text">{sp.giaBan.toLocaleString()} đ</p>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
            onClick={() => {
              const action = {
                type: "THEM_VAO_GIO",
                payload: {
                  spChon: sp,
                },
              };
              this.props.dispatch(action);
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SanPham);

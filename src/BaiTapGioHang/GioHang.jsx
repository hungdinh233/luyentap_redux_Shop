import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  tongTien = () => {};
  render() {
    let { spGH } = this.props;
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-end align-items-center">
          <span
            style={{ color: "orange", cursor: "pointer" }}
            className="mx-2"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Số hàng trong giỏ  {spGH.reduce((totalProd, prod, index) => {
              return (totalProd += prod.soLuong);
            },0)}
          </span>
        

          <i
            className="fa fa-shopping-cart"
            style={{ color: "orange", fontSize: 40, cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          ></i>
        </div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "orange" }}
                >
                  <h5 className="modal-title"> Giỏ hàng của bạn</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>
                          <i className="fa fa-gear"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {spGH.map((sp, index) => {
                        if (sp.maSP === "") {
                          return;
                        } else {
                          return (
                            <tr key={index}>
                              <td>{sp.maSP}</td>
                              <td>{sp.tenSP}</td>
                              <td>
                                <img
                                  src={sp.hinhAnh}
                                  alt=""
                                  style={{ height: 60 }}
                                />
                              </td>
                              <td>{sp.giaBan.toLocaleString()}</td>
                              <td>
                                <button
                                  className="btn btn-primary mx-2"
                                  onClick={() => {
                                    const action = {
                                      type: "TANG_GIAM_SO_LUONG",
                                      payload: {
                                        soLuong: 1,
                                        sanPham: sp,
                                        maSP: sp.maSP,
                                      },
                                    };
                                    this.props.dispatch(action);
                                  }}
                                >
                                  +
                                </button>
                                {sp.soLuong}
                                <button
                                  className="btn btn-primary mx-2"
                                  onClick={() => {
                                    const action = {
                                      type: "TANG_GIAM_SO_LUONG",
                                      payload: {
                                        soLuong: -1,
                                        sanPham: sp,
                                        maSP: sp.maSP,
                                      },
                                    };
                                    this.props.dispatch(action);
                                  }}
                                >
                                  -
                                </button>
                              </td>

                              <td>
                                {(sp.giaBan * sp.soLuong).toLocaleString()} đ{" "}
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    const action = {
                                      type: "XOA_SAN_PHAM",
                                      payload: {
                                        sanPham: sp,
                                        maSP: sp.maSP,
                                      },
                                    };
                                    this.props.dispatch(action);
                                  }}
                                >
                                  Bỏ khỏi giỏ
                                </button>
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={5}
                          align="right"
                          className="pe-5"
                          style={{ fontWeight: "bolder", border: "none" }}
                        >
                          Tổng tiền:
                        </td>
                        <td style={{ border: "none" }}>
                          {spGH
                            .reduce((tongtien, sp, index) => {
                              return (tongtien += sp.giaBan * sp.soLuong);
                            }, 0)
                            .toLocaleString()}{" "}
                          đ
                        </td>
                        <td style={{ border: "none" }}></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  spGH: state.giohangReducer.spGioHang,
});

export default connect(mapStateToProps)(GioHang);

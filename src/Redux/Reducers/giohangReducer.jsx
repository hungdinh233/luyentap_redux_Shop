const stateDefault = {
  spGioHang: [
    {
      maSP: "",
      tenSP: "",
      manHinh: "",
      heDieuHanh: "",
      cameraSau: "",
      cameraTruoc: "",
      ram: "",
      rom: "",
      giaBan: "",
      hinhAnh: "",
      soLuong: "",
    },
  ],
  arrSanPham: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
    {
      maSP: 4,
      tenSP: "Macbook Pro 2021",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 37000000,
      hinhAnh: "./img/lt_macbook.png",
    },
    {
      maSP: 5,
      tenSP: "Laptop HP Omen",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/lt_hp.png",
    },
    {
      maSP: 6,
      tenSP: "Laptop ROG",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 19700000,
      hinhAnh: "./img/lt_rog.png",
    },
    {
      maSP: 7,
      tenSP: "Laptop Lenovo Thinkpad",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 23000000,
      hinhAnh: "./img/lt_lenovo.png",
    },
    {
      maSP: 8,
      tenSP: "Vivo 850",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 8000000,
      hinhAnh: "./img/sp_vivo850.png",
    },
    {
      maSP: 9,
      tenSP: "Blackberry Z19",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 12000000,
      hinhAnh: "./img/sp_blackberry.png",
    },
    {
      maSP: 10,
      tenSP: "Iphone X",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 16000000,
      hinhAnh: "./img/sp_iphoneX.png",
    },
  ],
};

export const giohangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_VAO_GIO": {
      //b1: lấy thuộc tính đã đc gửi lên từ component
      let { spChon } = action.payload;
      //b2: clone các state và các object nhận vào (không chỉnh sửa gì trên state chính)
      let gioHangUpdate = [...state.spGioHang];
      spChon = { ...spChon, soLuong: 1 };
      //b3: xử lý logic
      let prodClicked = gioHangUpdate.find((sp) => sp.maSP === spChon.maSP);
      if (prodClicked) {
        prodClicked.soLuong += 1;
      } else {
        gioHangUpdate.push(spChon);
      }
      //b4: set lại state cho chương trình
      state.spGioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      //b1: lấy giá trị đc gửi lên
      let { soLuong, sanPham, maSP } = action.payload;
      //b2: clone các state liên quan
      let gioHangUpdate = [...state.spGioHang];
      //b3: xử lý logic
      let prodClicked = gioHangUpdate.find((sp) => sp.maSP === sanPham.maSP);
      if (prodClicked) {
        prodClicked.soLuong += soLuong;
      }
      if (prodClicked.soLuong < 1) {
        if (window.confirm("Bạn muốn xóa sp này khỏi giỏ hàng không?")) {
          gioHangUpdate = gioHangUpdate.filter((sp) => sp.maSP !== maSP);
        } else {
          prodClicked.soLuong = 1;
        }
      }
      //b4: clone và return state
      state.spGioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_SAN_PHAM": {
      //b1: lấy các thuộc tính được gửi lên
      let { sanPham, maSP } = action.payload;
      //b2: clone state liên quan để copy toàn bộ các obj bên trong (nếu có) và tránh trực tiếp đụng tới state default
      let gioHangUpdate = [...state.spGioHang];
      //b3: xử lý logic
      let arrGioHangSauKhiXoa = gioHangUpdate.filter(
        (sp) => sp.maSP !== sanPham.maSP
      );
      //gioHangUpdate.splice(spClickedIndex, 1);
      //b4: cập nhật lại state
      state.spGioHang = arrGioHangSauKhiXoa;
      return { ...state };
    }
    default:
      return state;
  }
};

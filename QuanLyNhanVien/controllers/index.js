
// var arrNhanVien = [];
// var kiemTra = new Validation();
// document.querySelector('btnThemNhanVien').onclick = function() {
//     nhanVien = new NhanVien();
//     nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
//     nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
//     nhanVien.chucVu = document.querySelector('#chucVu').value;
//     nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
//     nhanVien.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;

//     //đưa dữ liệu nhân viên vào mảng
//     var valid = true;
//     valid &= kiemTra.kiemTraRong(nhanVien.maNhanVien,'#error_required_maNhanVien','Mã Nhân Viên') & kiemTra.kiemTraRong(nhanVien.tenNhanVien,'#error_required_tenNhanVien','Tên Nhân Viên');

//     valid &= kiemTra.kiemTraKyTu(nhanVien.tenNhanVien,'#error_allLetter_tenNhanVien','Tên Nhân Viên');

//     valid &= kiemTra.tatCaSo(nhanVien.maNhanVien,'#error_number_maNhanVien','Mã Nhân Viên');

//     valid &= kiemTra.kiemTraDoDai(nhanVien.maNhanVien,'#error_min_max_length_maNhanVien',4,6,'Mã Nhân Viên');

//     valid &= kiemTra.kiemTraLuong(nhanVien.luongCoBan,'#error_min_max_salary_luongCoBan',1000000,20000000,'Lương Cơ Bản');

//     if (!valid)
//     return;

//     arrNhanVien.push(nhanVien);
//     renderTableNhanVien(arrNhanVien);
// }



// function renderTableNhanVien(arrNV) {
//     var content = '';
//     for(var i = 0; i < arrNV.length; i ++) {
//         var NV = arrNV[i];
//         var nhanVien = new NhanVien();
//         nhanVien.maNhanVien = NV.maNhanVien;
//         nhanVien.tenNhanVien = NV.tenNhanVien;
//         nhanVien.chucVu = NV.chucVu;
//         nhanVien.tinhTongLuong = NV.tinhTongLuong
//         nhanVien.luongCoBan = NV.luongCoBan;
//         nhanVien.soGioLamTrongThang = NV.soGioLamTrongThang;
//         nhanVien.xepLoaiNhanVien = NV.xepLoaiNhanVien
//         var trNhanVien = `
//         <tr>
//             <td>${nhanVien.maNhanVien}</td>
//             <td>${nhanVien.tenNhanVien}</td>
//             <td>${nhanVien.chucVu}</td>
//             <td>${nhanVien.luongCoBan}</td>
//             <td>${nhanVien.tinhTongLuong}</td>
//             <td>${nhanVien.soGioLamTrongThang}</td>
//             <td>${nhanVien.xepLoaiNhanVien()}</td>
//             <td><button onclick="xoaNhanVien('${nhanVien.maNhanVien}')" class="btn btn-danger">Xoá</button></td>
//             <td><button onclick="chinhSua('${nhanVien.maNhanVien}')" class="btn btn-danger">Chỉnh Sửa</button></td>
//         </tr>
//         `;
//         content += trNhanVien;
//     }
//     document.querySelector('#tblNhanVien').innerHTML = content;
// }
// function chinhSua(maNhanVienClick) {
    // document.querySelector('#maNhanVien').disabled = true;
    // document.querySelector('#btnThemNhanVien').disabled = true;
    // document.querySelector('#btnCapNhat').disabled = false;

//     for (var i = 0; i < arrNhanVien.length; i ++) {
//         var nv = arrNhanVien[i];
//         if (nv.maNhanVien === maNhanVienClick) {
//             document.querySelector('#maNhanVien').value = nv.maNhanVien;
//             document.querySelector('#tenNhanVien').value = nv.tenNhanVien;
//             document.querySelector('#chucVu').value = nv.chucVu;
//             document.querySelector('#luongCoBan').value = nv.luongCoBan;
//             document.querySelector('#soGioLamTrongThang').value = nv.soGioLamTrongThang;
//         }
//     }
//     renderTableNhanVien(arrNhanVien);
// }
// function xoaNhanVien(maNVClick) {
//     for(var i = arrNhanVien.length - 1; i >= 0; i --) {
//         var nhanVien = arrNhanVien[i];
//         if(nhanVien.maNhanVien === maNVClick) {
//             arrNhanVien.splice(i,1)
//         }
//     }
//     renderTableNhanVien(arrNhanVien);
// }
// document.querySelector('#btnCapNhat').onclick = function() {
//     var nhanVienCapNhat = new NhanVien();
//     nhanVienCapNhat.maNhanVien = document.querySelector('#maNhanVien').value;
//     nhanVienCapNhat.tenNhanVien = document.querySelector('#tenNhanVien').value;
//     nhanVienCapNhat.chucVu = document.querySelector('#chucVu').value;
//     nhanVienCapNhat.luongCoBan = document.querySelector('#luongCoBan').value;
//     nhanVienCapNhat.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;

//     for(var i = 0; i < arrNhanVien.length; i ++) {
//         var nhanVienTrongMang = arrNhanVien[i];
//         if(nhanVienTrongMang.maNhanVien === nhanVienCapNhat.maNhanVien) {
//             nhanVienTrongMang.tenNhanVien = nhanVienCapNhat.tenNhanVien;
//             nhanVienTrongMang.chucVu = nhanVienCapNhat.chucVu;
//             nhanVienTrongMang.luongCoBan = nhanVienCapNhat.luongCoBan;
//             nhanVienTrongMang.soGioLamTrongThang = nhanVienCapNhat.soGioLamTrongThang;
//         }
//     }
    // renderTableNhanVien(arrNhanVien);
    // document.querySelector('#maNhanVien').disabled = false;
    // document.querySelector('#btnThemNhanVien').disabled = false;
    // document.querySelector('#btnCapNhat').disabled = true;

// }


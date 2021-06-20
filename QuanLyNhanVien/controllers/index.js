var arrNhanVien = [];
// var kiemTra = new Validation();
document.querySelector('#btnThemNhanVien').onclick = function() {
    nhanVien = new NhanVien();
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.chucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVien.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;

    //đưa dữ liệu nhân viên vào mảng
    arrNhanVien.push(nhanVien);
    renderTableNhanVien(arrNhanVien);

    // var valid = true;
    // valid &= kiemTra.kiemTraRong(nhanvien.maNhanVien,'#error_required_maNhanVien','Mã Nhân Viên') & kiemTra.kiemTraRong(nhanVien.tenNhanVien,'#error_required_tenNhanVien','Tên Nhân Viên');
    // if (!valid)
    // return;
}



function renderTableNhanVien(arrNV) {
    var content = '';
    for(var i = 0; i < arrNV.length; i ++) {
        var NV = arrNV[i];
        var nhanVien = new NhanVien();
        nhanVien.maNhanVien = NV.maNhanVien;
        nhanVien.tenNhanVien = NV.tenNhanVien;
        nhanVien.chucVu = NV.chucVu;
        nhanVien.tinhTongLuong = NV.tinhTongLuong
        nhanVien.luongCoBan = NV.luongCoBan;
        nhanVien.soGioLamTrongThang = NV.soGioLamTrongThang;
        nhanVien.xepLoaiNhanVien = NV.xepLoaiNhanVien
        var trNhanVien = `
        <tr>
            <td>${nhanVien.maNhanVien}</td>
            <td>${nhanVien.tenNhanVien}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.luongCoBan}</td>
            <td>${nhanVien.tinhTongLuong}</td>
            <td>${nhanVien.soGioLamTrongThang}</td>
            <td>${nhanVien.xepLoaiNhanVien()}</td>
            <td><button onclick="xoaNhanVien('${nhanVien.maNhanVien}')" class="btn btn-danger">Xoá</button></td>
        </tr>
        `;
        content += trNhanVien;
    }
    document.querySelector('#tblNhanVien').innerHTML = content;
}
function xoaNhanVien(maNVClick) {
    for(var i = arrNhanVien.length - 1; i >= 0; i --) {
        var nhanVien = arrNhanVien[i];
        if(nhanVien.maNhanVien === maNVClick) {
            arrNhanVien.splice(i,1)
        }
    }
    renderTableNhanVien(arrNhanVien);
}
function layDanhSachNhanVienApi() {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien',
        method: 'GET',
        responseType: 'json',
    })
    promise.then(function(result){
        console.log('result',result.data);
        renderTableNhanVien(result.data);
    });
    promise.catch(function(error){
        console.log('error',error);
    })
}
layDanhSachNhanVienApi();
function renderTableNhanVien(arrNV) {
    var content = '';
    for (var i = 0; i < arrNV.length; i ++) {
        var nv = arrNV[i];
        var nhanVien = new NhanVien();
        nhanVien.maNhanVien = nv.maNhanVien;
        nhanVien.tenNhanVien = nv.tenNhanVien;
        nhanVien.chucVu = nv.chucVu;
        nhanVien.luongCoBan = nv.luongCoBan;
        nhanVien.soGioLamTrongThang = nv.soGioLamTrongThang;

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
            <td><button onclick="chinhSua('${nhanVien.maNhanVien}')" class="btn btn-danger">Chỉnh Sửa</button></td>
        </tr>
        `;
        content += trNhanVien;
    }
    document.querySelector('#tblNhanVien').innerHTML = content;
}
var arrNhanVien = [];
var kiemTra = new Validation()

document.querySelector('#btnThemNhanVien').onclick = function() {
    nhanVien = new NhanVien();
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    console.log(nhanVien.maNhanVien.length)
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.chucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVien.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;

    var valid = true;
    valid &= kiemTra.kiemTraRong(nhanVien.maNhanVien,'#error_required_maNhanVien','Mã Nhân Viên') & kiemTra.kiemTraRong(nhanVien.tenNhanVien,'#error_required_tenNhanVien','Tên Nhân Viên');

    valid &= kiemTra.kiemTraKyTu(nhanVien.tenNhanVien,'#error_allLetter_tenNhanVien','Tên Nhân Viên');

    valid &= kiemTra.tatCaSo(nhanVien.maNhanVien,'#error_number_maNhanVien','Mã Nhân Viên');

    valid &= kiemTra.kiemTraDoDai(nhanVien.maNhanVien,'#error_min_max_length_maNhanVien',4,6,'Mã Nhân Viên');

    valid &= kiemTra.kiemTraLuong(nhanVien.luongCoBan,'#error_min_max_salary_luongCoBan',1000000,20000000,'Lương Cơ Bản');

    if (!valid)
    return;

    arrNhanVien.push(nhanVien);
    renderTableNhanVien(arrNhanVien);

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien',
        method:'post',
        data: nhanVien,
    });
    promise.then(function(result) {
        console.log('result',result.data);
        layDanhSachNhanVienApi();
    })
    promise.catch(function(error) {
        console.log('error',error.response.data);
    })
}
function xoaNhanVien(maNhanVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
        method: 'DELETE',
    });
    promise.then(function(result){
        console.log('result',result.data)
        layDanhSachNhanVienApi();
    })
    promise.catch(function(error) {
        console.log(error.response.data);
    })
}
function chinhSua(maNhanVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
        method: 'GET',
    })
    promise.then(function(result){
        var nhanVien = result.data;
        document.querySelector('#maNhanVien').disabled = true;
        document.querySelector('#btnThemNhanVien').disabled = true;
        document.querySelector('#btnCapNhat').disabled = false;

        document.querySelector('#maNhanVien').value = nhanVien.maNhanVien;
        document.querySelector('#tenNhanVien').value = nhanVien.tenNhanVien;
        document.querySelector('#chucVu').value = nhanVien.chucVu;
        document.querySelector('#luongCoBan').value = nhanVien.luongCoBan;
        document.querySelector('#soGioLamTrongThang').value = nhanVien.soGioLamTrongThang;
    })
    promise.catch(function(error){
        console.log('error',error.response.data)
    })
}
document.querySelector('#btnCapNhat').onclick = function(){
    var nhanVienUpdate = new NhanVien();
    nhanVienUpdate.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVienUpdate.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVienUpdate.chucVu = document.querySelector('#chucVu').value;
    nhanVienUpdate.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVienUpdate.soGioLamTrongThang = document.querySelector('#soGioLamTrongThang').value;

    renderTableNhanVien(arrNhanVien);
    document.querySelector('#maNhanVien').disabled = false;
    document.querySelector('#btnThemNhanVien').disabled = false;
    document.querySelector('#btnCapNhat').disabled = true;

    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nhanVienUpdate.maNhanVien}`,
        method: 'PUT',
        data: nhanVienUpdate,
    })
    promise.then(function(result){
        console.log(result.data);
        layDanhSachNhanVienApi();
    })
    promise.catch(function(error){
        console.log(error.response.data);
    })
}
function NhanVien(){
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.chucVu = '';
    this.heSoChucVu = '';
    this.luongCoBan = '';
    this.soGioLamTrongThang = '';
    this.tinhTongLuong = '';
    this.xepLoaiNhanVien = function() {
        var ketQua = '';
        if (this.soGioLamTrongThang >= 150) {
            ketQua = 'Giỏi';
        } else if (this.soGioLamTrongThang >= 100 && this.soGioLamTrongThang < 150) {
            ketQua = 'Khá';
        } else {
            ketQua = 'Trung Bình';
        }
        return ketQua;
    }
}

// function Validation() {
//     this.kiemTraRong = function(value,selectorError,name) {
//         if (value.trim() === '') {
//             document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống';
//             return false
//         }
//         document.querySelector(selectorError).innerHTML = '';
//         return true;
//     }
//     this.kiemTraKyTu = function(value,selectorError,name) {
//         var regexAllLetter = /^[A-z a-z]+$/;
//         if (regexAllLetter.test(value)) {
//             document.querySelector(selectorError).innerHTML = '';
//             return true;
//         }
//         document.querySelector(selectorError).innerHTML = name + ' Tất cả phải là ký tự!';
//         return false;
//     }
// }
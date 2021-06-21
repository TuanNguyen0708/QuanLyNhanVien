 function Validation() {
    this.kiemTraRong = function(value,selectorError,name) {
        if (value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống';
            return false
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraKyTu = function(value,selectorError,name) {
        var regexAllLetter = /^[A-z a-z]+$/;
        if (regexAllLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' Tất cả phải là ký tự!';
        return false;
    }
    this.tatCaSo = function(value,selectorError,name) {
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' Tất cả phải là số!'
        return false;
    }
    this.kiemTraDoDai = function(value,selectorError,minLength,maxLength,name) {
        if(value.length < minLength || value.length > maxLength) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} kí tự`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraLuong = function(value,selectorError,minSalary,maxSalary,name) {
        if (value < minSalary || value > maxSalary) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minSalary} đến ${maxSalary}`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}
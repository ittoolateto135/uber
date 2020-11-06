function UberX (_soKm,_waitTime){
    var km1Ub = 8000;
    this.soKm = _soKm;
    this.waitTime = _waitTime;
    this.thanhToan = ()=>{
        var tongTien;
        if (this.soKm <= 1) {
            tongTien = parseFloat(this.soKm) * (km1Ub + (parseFloat(this.waitTime) * 2000));
        }
        else if (this.soKm > 1 && this.soKm <= 20) {
            tongTien = (km1Ub + ((this.soKm - 1) * 12000) + (parseFloat(this.waitTime) * 2000));
        }
        else {
            tongTien = (km1Ub + 20 * 12000 + ((parseFloat(this.soKm) - 21) * 10000) + (parseFloat(this.waitTime) * 2000));
        }
        return tongTien;
    }
}
function UberV(_soKm,_waitTime){
    var km1UV = 9000;
    this.soKm = _soKm;
    this.waitTime = _waitTime;
    this.thanhToan =  () =>{
        var tongTien = 0;
        if (this.soKm <= 1) {
            tongTien += parseFloat(this.soKm) * (km1UV + (parseFloat(this.waitTime) * 3000));
        }
        else if (this.soKm > 1 && this.soKm <= 20) {
            tongTien += (km1UV + ((this.soKm - 1) * 14000) + (parseFloat(this.waitTime) * 3000));
        }
        else {
            tongTien += (km1UV + 20 * 14000 + ((parseFloat(this.soKm) - 21) * 12000) + (parseFloat(this.waitTime) * 3000));
        }
      return tongTien;
    }
}
function UberBl(_soKm,_waitTime){
    var km1UBl = 10000;
    this.soKm = _soKm;
    this.waitTime = _waitTime;
    this.thanhToan = () =>{
        var tongTien = 0;
        if (this.soKm <= 1) {
            tongTien += parseFloat(this.soKm) * (km1UBl + (parseFloat(this.waitTime) * 4000));
        }
        else if (this.soKm > 1 && this.soKm <= 20) {
            tongTien += (km1UBl + ((this.soKm - 1) * 16000) + (parseFloat(this.waitTime) * 4000));
        }
        else {
            tongTien += (km1UBl + 20 * 16000 + ((parseFloat(this.soKm) - 21) * 14000) + (parseFloat(this.waitTime) * 4000));
        }
        return tongTien;
    }
   
}
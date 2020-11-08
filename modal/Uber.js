function Uber(soKm, waitTime,nameUber,donGia,tongTien) {
    this.soKm = soKm;
    this.waitTime = waitTime;
    this.nameUber = nameUber;
    this.donGia = donGia;
    this.tongTien = tongTien;
    // this.money1km = money1km;
    // this.money20km = money20km;
    // this.moneyMax = moneyMax;
    // this.moneyWaittime = moneyWait;
    // this.tongTien =  () => {
    //     var tienThanhToan;
    //     if(this.soKm <=1){
    //         tienThanhToan = parseFloat(this.soKm)*(this.money1km+(parseFloat(this.waitTime*this.moneyWaittime)));
    //     }
    //     else if(this.soKm > 1 && this.soKm<=20){
    //         tienThanhToan = (this.money1km + ((this.soKm - 1) * this.money20km) + (parseFloat(this.waitTime) * this.moneyWaittime));
    //     }
    //     else{
    //         tienThanhToan = (this.money1km + 20 * this.money20km + ((parseFloat(this.soKm) - 21) * this.moneyMax) + (parseFloat(this.waitTime) * this.moneyWaittime));
    //         }
    //     return tienThanhToan;
    // }
}

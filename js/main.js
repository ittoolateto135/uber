danhSachBook = [];
function loaiXe() {
    var checkUx = document.getElementById('uberX').checked;
    var checkUSuv = document.getElementById('uberSUV').checked;
    var checkBl = document.getElementById('uberBlack').checked;
    var loaiXe = '';
    if (checkUx == true) {
        loaiXe = 'uberX';
    }
    else if (checkUSuv == true) {
        loaiXe = 'uberSuV';
    }
    else if (checkBl == true) {
        loaiXe = 'uberBl';
    }
    return loaiXe;
}
function tinhTien() {
    var spanTien = document.getElementById('xuatTien');
    var soKm = document.getElementById('soKm').value;
    var waitTime = document.getElementById('waitTime').value;
    var uberX = new UberX(soKm,waitTime);
    var uberV = new UberV(soKm,waitTime);
    var uberBl = new UberBl(soKm,waitTime);
    var tongTien = 0;
    switch (loaiXe()) {
        case 'uberX':
            if(soKm && waitTime){
                tongTien = uberX.thanhToan();
                spanTien.innerHTML = tongTien;
                danhSachBook.push(uberX);
            }
                spanTien.innerHTML = tongTien;
            break;
        case 'uberSuV':
            if(soKm && waitTime){
                tongTien = uberV.thanhToan();
                spanTien.innerHTML = tongTien;
                danhSachBook.push(uberV);
            }
                spanTien.innerHTML = tongTien;
            break;
          
        case 'uberBl':
            if(soKm && waitTime){
                tongTien = uberBl.thanhToan();
                spanTien.innerHTML = tongTien;
                danhSachBook.push(uberBl);
            }
                spanTien.innerHTML = tongTien;
            break;
        default:
            document.getElementById('divThanhTien').style.display = 'none';
            if (loaiXe() === '' || tongTien == '') {
                alert('Vui long chon loại Xe');
            }
            break;
    } 
}
function inBills() {

    document.getElementById('btn-inHoaDon').addEventListener('click', function showBills() {
        // var close = document.getElementById('closeModal');
        // var modal = document.getElementById('myModal').style.display = 'block';
        // var tbody = document.getElementById('tbodyModal') = '';
        console.log("ChicKenForMe");
    })

}
document.getElementById('bt-thanhToan').addEventListener("click", () => {
    document.getElementById('divThanhTien').style.display = 'block';
    tinhTien();
    inBills();

})
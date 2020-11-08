var danhSachUber = new DanhSachUber();

// return a DOM ID
function getEle(n){
    return document.getElementById(n);
}

// the function choose
function truongHop(){
   var checkUx = getEle('uberX').checked;
   var checkUSuv = getEle('uberSUV').checked;
   var checkBl = getEle('uberBlack').checked;
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

// the function return name of Uber
function checkNameUber(){
    var nameUx = $('#valueUx').text();
    var nameUsV = $('#valueSUV').text();
    var nameBl = $('#valueUbl').text();
    var nameUber = '';
    if(truongHop() == 'uberX'){
        nameUber = nameUx;
    }
    else if(truongHop() == 'uberSuV'){
        nameUber = nameUsV;
    }
    else{
        nameUber = nameBl;
    }
    return nameUber;
}
// the function getPrice
function getPrice(_soKm){
    var price;
    if(truongHop() == 'uberX'){
        if(_soKm<=1){
            price = 8000;
        }
        else if(_soKm > 1 && _soKm<=20){
            price = 12000;
        }
        else price = 10000;
    }
    else if(truongHop() == 'uberSuV'){
        if(_soKm<=1){
            price = 9000;
        }
        else if(_soKm > 1 && _soKm<=20){
            price = 14000;
        }
        else price = 12000;
    }
    else{
        if(_soKm<=1){
            price = 10000;
        }
        else if(_soKm > 1 && _soKm<=20){
            price = 16000;
        }
        else price = 14000;
    }
    return parseFloat(price);
}
// the function get moneyPayWaitTime
function getMoneyPayWaitTime(waitTime){
    var moneyPayWaitTime;
    if(truongHop() == 'uberX'){
        moneyPayWaitTime = 2000 *waitTime;
    }
    else if(truongHop() == 'uberSuV'){
        moneyPayWaitTime = 3000 *waitTime;
    }
    else moneyPayWaitTime = 4000 *waitTime;
    return parseFloat(moneyPayWaitTime);
}
// the function pay money 
function tinhTien(soKm,waitTime){
    var money;
    var donGia = getPrice(soKm);
    var moneyPayWaitTime = getMoneyPayWaitTime(waitTime);
    if(truongHop() == 'uberX'){
        if(soKm <=1){
            money = soKm*donGia+moneyPayWaitTime;
        }
        else if(soKm> 1 && soKm <=20){
            money = (soKm-1)*donGia+moneyPayWaitTime+8000;
        }
        else{
            money =(20*12000+((soKm-21)(donGia)+moneyPayWaitTime));
        }
    }
    else if(truongHop() == 'uberSuV'){
        if(soKm <=1){
            money = soKm*donGia+moneyPayWaitTime;
        }
        else if(soKm> 1 && soKm <=20){
            money = (soKm-1)*donGia+moneyPayWaitTime+9000;
        }
        else{
            money =(20*14000+((soKm-21)(donGia)+moneyPayWaitTime));
        }
    }
    else{
        if(soKm <=1){
            money = soKm*donGia+moneyPayWaitTime;
        }
        else if(soKm> 1 && soKm <=20){
            money = (soKm-1)*donGia+moneyPayWaitTime+10000;
        }
        else {
            money =(20*16000+((soKm-21)(donGia)+moneyPayWaitTime));
        }
    }
    return money;
}
//the function show span money
function thanhTien(soKm, waitTime){
    getEle('divThanhTien').style.display = 'block';
   var spanTien = getEle('xuatTien');
   var tongTien = tinhTien(soKm, waitTime)
   spanTien.innerHTML = tongTien;
}

// the function close modal 
function closeMd(){
     getEle('myModal').style.display = 'none';
}
// the function open modal
function openMd(){
    getEle('myModal').style.display = 'block';
}
//the function event show bill
function showBill(){
    getEle('btn-inHoaDon').addEventListener('click',()=>{
        openMd();
        getEle('closeModal').addEventListener('click',()=>{
            closeMd();
        })
        getEle('buttonClose').addEventListener('click',()=>{
            closeMd();
        })
    })
}
// function create Table()
function createTable() {
    var contentTbody = '';
    var contentBd1 = '';
    danhSachUber.arr.forEach(function (uberHienTai){
        contentTbody += `
        <tr>
            <td>${uberHienTai.nameUber}</td>
            <td>${uberHienTai.soKm} km</td>
            <td>${uberHienTai.donGia} vnd</td>
            <td>${uberHienTai.tongTien} vnd</td>
        </tr>
    ` 
    });
    getEle('tbodyModal').innerHTML = contentTbody;
    showBill();
}
 // get data object
    getEle('bt-thanhToan').addEventListener('click',()=>{
        var _soKm = getEle('soKm').value;
        var _waitTime = getEle('waitTime').value;
        var _nameUber = checkNameUber();
        var _donGia = getPrice(_soKm);
        var _tongTien = tinhTien(_soKm, _waitTime);
        var uber = new Uber(_soKm,_waitTime,_nameUber,_donGia,_tongTien)
            
        danhSachUber.arr.push(uber);
        // tinhTien(_soKm,_waitTime);
        createTable();
        thanhTien(_soKm,_waitTime);
        
    })

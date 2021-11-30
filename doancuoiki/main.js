var opendk = document.querySelector('.register')
var opendn = document.querySelector('.log-in')
var closedk = document.querySelector('close-btn')
var closedn = document.querySelector('close-btn1')
var dangky = document.querySelector('.dangky')
var dangnhap = document.querySelector('.dangnhap')
var signout = document.querySelector('.outacc')
var nameview = document.querySelector('.name')
var buyitems = document.querySelector('.buy')
function showdiv() {
    dangky.classList.toggle('toggle')
}
function showdiv1() {
    dangnhap.classList.toggle('toggle')
}

// lay gia tri tai khoan mat khau div dang ky
var name1 = document.querySelector('#namedk')
name1.addEventListener('input', (e) => {
    name1.setAttribute('value', e.target.value)
})
var passw = document.querySelector('#password')
passw.addEventListener('input', (e) => {
    passw.setAttribute('value', e.target.value)
})
// tao form tu gia tri div dang ky post len api
var x = document.querySelector('.btdk')
x.addEventListener('click', function () {
    var name2 = name1.getAttribute('value')
    var passw2 = passw.getAttribute('value')
    var data = {
        taikhoan: name2,
        matkhau: passw2
    }
    testthem(data)
})
// lay gia tri tai khoan, mat khau div dang nhap
var namelog = document.querySelector('#namelog')
namelog.addEventListener('input', (e) => {
    namelog.setAttribute('value', e.target.value)
})
var passlog = document.querySelector('#passwordlog')
passlog.addEventListener('input', (e) => {
    passlog.setAttribute('value', e.target.value)
})
// khai bao bien thong bao loi
var ermessage = document.querySelector('.error')
// kiem tra tai khoan, mat khau tu div dang nhap co trong api khong?
var check = document.querySelector('.btdn')
check.addEventListener('click', function () {
    getacc(checklg)
})
var accapi = 'http://localhost:3000/accs'
function testthem(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(accapi, options)
        .then(response => response.json())
}
// lay list acc tu api
function getacc(callback) {
    fetch(accapi)
        .then(response => response.json())
        .then(callback)
}
// check va thong bao dang nhap
function checklg(listacc) {
    var namelog1 = namelog.getAttribute('value')
    var passlog1 = passlog.getAttribute('value')
    for (i = 0; i < listacc.length; i++) {
        if (listacc[i].taikhoan == namelog1 && listacc[i].matkhau == passlog1) {
            ermessage.innerText = 'Đăng nhập thành công'
            nameview.innerHTML = namelog1
            opendk.classList.toggle('toggle')
            opendn.classList.toggle('toggle')
            signout.classList.toggle('toggle')
            break
        }
        else {
            ermessage.innerText = 'Tài khoản hoặc mật khẩu sai'
        }
    }
}
// tao chuc nang dang xuat tai khoan
signout.addEventListener('click',()=>{
    nameview.innerHTML = 'Guest'
    opendk.classList.toggle('toggle')
    opendn.classList.toggle('toggle')
    signout.classList.toggle('toggle')
})
// chuc nang mua hang
buyitems.addEventListener('click',()=>{
    alert('Mua hàng thành công')
    var gh = document.getElementById('giohang')
    gh.innerHTML = ''
    tongdonhang()
})
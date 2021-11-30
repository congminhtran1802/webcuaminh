// 1. thêm items
// 1.1 tạo bảng chứa các items cần thêm
var items = [
    {'name':'Phở gà','img':'https://toplist.vn/images/800px/pho-275256.jpg','dongia':'1000'},
    {'name':'Bánh cuốn','img':'https://toplist.vn/images/800px/banh-cuon-274178.jpg','dongia':'1000'},
    {'name':'Bún','img':'https://toplist.vn/images/800px/bun-512816.jpg','dongia':'1000'},
    {'name':'Gà nướng KonPlông','img':'https://toplist.vn/images/800px/ga-nuong-konplong-507267.jpg','dongia':'1000'},
    {'name':'Bánh khọt','img':'https://toplist.vn/images/800px/banh-khot-507261.jpg','dongia':'1000'},
    {'name':'Bánh mì','img':'https://toplist.vn/images/800px/ba-le-banh-mi-tho-nhi-ky-665399.jpg','dongia':'1000'},
    {'name':'Cơm tấm','img':'https://toplist.vn/images/800px/com-tam-507259.jpg','dongia':'1000'}
]
// 1.2 tạo hàm tạo bảng chứa items
function tablesp(data) {
    var table = document.querySelector('#sanpham')
    table.innerHTML =''
    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
        <td>${data[i].name}</td>
        <td><img src="${data[i].img}"></td>
        <td>${data[i].dongia}</td>
        <td><input type="button" value="Thêm" onclick="them(this)"></td>
    </tr>`
        table.innerHTML += row
    }
}
tablesp(items)

// 2. chức năng tìm kiếm
var timkieminput = document.querySelector('.timkiem')
timkieminput.addEventListener('keyup',(e)=>{
    timkieminput.setAttribute('value',e.target.value)
    var valuetk = timkieminput.value
    var data = timkiemdata(valuetk,items) // hàm tìm kiếm được gọi từ dưới lên
    tablesp(data)
    if(valuetk==''){
        tablesp(items)
    }

})
// 3. hàm tìm giá trị ở thanh tìm kiếm có trong danh sách items không
function timkiemdata(value,data) {
    var locdata = []
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase() 
        var name = data[i].name.toLowerCase()
        if(name.includes(value)){
            locdata.push(data[i])
        }
    }
    return locdata
}
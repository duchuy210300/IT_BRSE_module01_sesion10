const math = +prompt("Nhập số điểm của môm Toán")
const physics = +prompt("Nhập số điểm của môm Vật Lý")
const chemistry = +prompt("Nhập số điểm của môm Hóa Học")
const average = (math + physics + chemistry) / 3 ;
alert(average.toFixed(2));
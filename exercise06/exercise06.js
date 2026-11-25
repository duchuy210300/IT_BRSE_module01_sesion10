const math = +prompt("Nhập số điểm của môm Toán")
const physics = +prompt("Nhập số điểm của môm Vật Lý")
const chemistry = +prompt("Nhập số điểm của môm Hóa Học")
const average = (math + physics + chemistry) / 3 ;
alert(`Điểm trung bình 3 môn học là : ${average.toFixed(2)}`);
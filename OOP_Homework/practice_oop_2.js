/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 200cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
    constructor(tenChuXe, loaiXe, dungTich, triGia) { 
        this.tenChuXe = tenChuXe;
        this.loaiXe = loaiXe;
        this.dungTich = dungTich;
        this.triGia = triGia;
    }

    moveForward(){
        if (this.dungTich < 100) {
            this.thue = (this.triGia / 100) * 1;
        } else if (this.dungTich < 200) {
            this.thue = (this.triGia / 100) * 3;
        } else {
            this.thue = (this.triGia / 100) * 5;
        }

        console.log(`Thuế trước bạ cần đóng là: ${this.thue}`)
    }

    introduce() {
        console.log(`Tên Chủ Xe: ${this.tenChuXe}`);
        console.log(`Loại xe: ${this.loaiXe}`);
        console.log(`Dung Tích: ${this.dungTich}cc`);
        console.log(`Giá Trị Xe: ${this.triGia}VND`);
        this.moveForward();
    }
}

Vehicle1 = new Vehicle("Hung", "wave", 100, 10000000);
Vehicle1.introduce();
/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */

class Rectangle {
    constructor(chieuDai, chieuRong) {
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }

    moveForward() {
        this.dienTich = this.chieuDai * this.chieuRong;
        console.log(`Diện tích của hình là: ${this.dienTich}`);
        
        this.chuVi = (this.chieuDai + this.chieuRong) * 2;
        console.log(`Chu vi của hình là: ${this.chuVi}`);
    }

    introduce() {
        console.log(`Chiều Dài: ${this.chieuDai}`);
        console.log(`Chiều Rộng: ${this.chieuRong}`);
        this.moveForward();
    }
}

Rectangle1 = new Rectangle(8, 6);
Rectangle1.introduce();

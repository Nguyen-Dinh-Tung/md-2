"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuAdminEdit = exports.menuAdmin = exports.menuCustomer = exports.menu = void 0;
function menu() {
    console.log('1.-- Đăng nhập Admin --\n');
    console.log('2.-- Đăng nhập tài khoản cá nhân --\n');
    console.log('0 hoặc Enter . -- Thoát');
}
exports.menu = menu;
function menuCustomer() {
    console.log('1.-- Hiển thị thông tin cá nhân --\n');
    console.log('0 hoặc Enter . -- Thoát');
}
exports.menuCustomer = menuCustomer;
function menuAdmin() {
    console.log('1.-- Hiển thị danh sách khách hàng --\n');
    console.log('2.-- Tạo tài khoản cá nhân --\n');
    console.log('3. -- Xóa tài khoản khách hàng --\n');
    console.log('4. -- Chỉnh sửa tài khoản khách hàng --\n');
    console.log('5. -- Nạp tiền vào tài khoản --\n');
    console.log('6. -- Sắp xếp khách hàng theo độ tuổi --\n');
    console.log('0 hoặc Enter . -- Thoát');
}
exports.menuAdmin = menuAdmin;
function menuAdminEdit() {
    console.log('1.-- Chỉnh sửa tên khách hàng --\n');
    console.log('2.-- Chỉnh sửa tuổi khách hàng --\n');
    console.log('3. -- Chỉnh sửa email khách hàng --\n');
    console.log('4. -- Chỉnh sửa số điện thoại khách hàng --\n');
    console.log('5. -- Chỉnh sửa số căn cước khách hàng --\n');
    console.log('6. -- Chỉnh sửa mật khẩu đăng nhập --\n');
    console.log('7. -- Chỉnh sửa tên đăng nhập --\n');
    console.log('0 hoặc Enter . -- Thoát');
}
exports.menuAdminEdit = menuAdminEdit;

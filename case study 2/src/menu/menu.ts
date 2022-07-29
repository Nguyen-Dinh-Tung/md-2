export function menuMain(): void {
  console.log('1.-- Đăng nhập Admin --\n');
  console.log('2.-- Đăng nhập tài khoản cá nhân --\n');
  console.log('0 hoặc Enter . -- Thoát');
}
export function menuAdmin(): void{
  console.log('1.-- Tạo tài khoản cá nhân --\n');
  console.log('2.-- Hiển thị danh sách khách hàng --\n');
  console.log('3.-- Xóa thông tin khách hàng --\n');
  console.log('4.-- Sửa thông tin khách hàng --\n');
  console.log('5.-- Nạp tiền vào tài khoản khách hàng --\n');
  console.log('6.-- Rút tiền từ tài khoản khách hàng --\n');
  console.log('7.-- Tìm tài khoản khách hàng --\n');
  console.log('8.-- Sắp xếp tài khoản khách hàng theo tuổi --\n');
  console.log('9.-- Kiểm tra lịch sử giao dịch --\n');

}
export function menuAdminExtra(): void{
  console.log('1.-- Sửa tên --\n');
  console.log('2.-- Sửa số điện thoại --\n');
  console.log('3.-- Sửa tuổi --\n');
  console.log('4.-- Sửa email --\n');
  console.log('5.-- Sửa căn cước --\n');
  console.log('6.-- Mật khẩu --\n');
}

export function menuUser(): void{
  console.log('1.-- Hiển thị thông tin --\n');
  console.log('2.-- Rút tiền mặt --\n');
  console.log('3.-- Chuyển khoản --\n');
  console.log('4.-- Đổi mật khẩu --\n');
  console.log('5.-- Tính lãi --\n');
  console.log('6.-- Mua bảo hiểm --\n');
  console.log('7.-- Hiển thị lịch sử giao dịch --\n');
}
export function menuUserExtra(): void{
  console.log('1.-- Mua bảo hiểm y tế --\n');
  console.log('2.-- Mua bảo hiểm nhân thọ --\n');
  console.log('3.-- Mua bảo hiểm thân thể --\n');
}
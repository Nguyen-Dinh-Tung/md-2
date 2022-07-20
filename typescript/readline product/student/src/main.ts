import { Student } from './student';
import { StudentManager } from './StudentManager';
import * as rl from 'readline-sync'
import { group } from 'console';

//  create
let choice = - 1 ;
let listStudent = new StudentManager() ;
let app = rl.question

enum OptionNumber{
  OPTION_SHOWLISTSTUDENT_ = 1 ,
  OPTION_CREATESTUDENT_ = 2,
  OPTION_ADDSTUDENT_ = 3,
  OPTION_FINDSTUDENT_ = 4,
  OPTION_EXIST_ = 0,
}



do{

  menu();

  choice = +app('Nhập lựa chọn của bạn : ')

  switch(choice){
    case OptionNumber.OPTION_SHOWLISTSTUDENT_ :
      showListStudent();
      break ;
    case OptionNumber.OPTION_CREATESTUDENT_ :
      createStudent();
      break ;
    case OptionNumber.OPTION_ADDSTUDENT_ :
      deleteStudent();
      break ;
    case OptionNumber.OPTION_FINDSTUDENT_ :
      findStudentByName();
      break ;
    default:
      // console.log('')
      console.log('\nVui lòng nhập lại lựa chọn\n')
  }

}while(choice != OptionNumber.OPTION_EXIST_ )


// handle manager
function findStudentByName() {
  console.log('-- Tìm sinh viên');
  let name = app('Nhập tên để tìm sinh viên');
  listStudent.findStudentByName(name);
}

function deleteStudent() {
  console.log('-- Xóa sinh viên');
  let name = app('Nhập vào tên để xóa sinh viên');
  listStudent.deleteStudent(name);
}

function createStudent() {
  console.log('-- Tạo sinh viên mới');
  let name = app('Nhập tên sinh viên');
  let age = +app('Nhập tuổi');
  let date = app('Nhập ngày sinh');
  let email = app('Nhập email');
  let group = app('Nhập group');
  let student = new Student(name, age, date, email, group);
  listStudent.addStudent(student);
}

function showListStudent() {
  console.log('-- Danh sách sinh viên');
  listStudent.showListStudent();
}

function menu() {
  console.log('Quản lý sinh viên ');
  console.log('1. Hiển thị danh sách sinh viên ');
  console.log('2. Tạo thông tin sinh viên');
  console.log('3. Thêm sinh viên ');
  console.log('4. Tìm sinh viên ');
  console.log('0. Thoát');
}


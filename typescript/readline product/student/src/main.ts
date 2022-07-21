import { OptionNumber } from './Constant';
import { Student } from './student';
import { StudentManager } from './StudentManager';
import * as rl from 'readline-sync'

//  create
let choice = - 1 ;
let appManager = new StudentManager() ;
let app = rl.question

// run menu

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
    case OptionNumber.OPTION_FINDGROUP_:
      findGroupStudent();
      break ;
    case OptionNumber.OPTION_SORTBYAGE_:
      sortStudentByAge();
      break ;
    default:
      // console.log('')
      console.log('\nVui lòng nhập lại lựa chọn\n')
  }

}while(choice != OptionNumber.OPTION_EXIST_ )



// handle manager

function sortStudentByAge() {
  appManager.sortStudentByAge();
}

function findGroupStudent() {
  console.log('5. -- Tìm group ');
  let nameGroup = app('Nhập tên group');
  appManager.findStudentByGroup(nameGroup);
}

function findStudentByName() {
  console.log('-- Tìm sinh viên');
  let name = app('Nhập tên để tìm sinh viên');
  appManager.findStudentByName(name);
}

function deleteStudent() {
  console.log('-- Xóa sinh viên');
  let name = app('Nhập vào tên để xóa sinh viên');
  appManager.deleteStudent(name);
}

function createStudent() {
  console.log('-- Tạo sinh viên mới');
  let name = app('Nhập tên sinh viên');
  let age = +app('Nhập tuổi');
  let date = app('Nhập ngày sinh');
  let email = app('Nhập email');
  let group = app('Nhập group');
  let student = new Student(name, age, date, email, group);
  appManager.addStudent(student);
}

function showListStudent() {
  console.log('-- Danh sách sinh viên');
  appManager.showListStudent();
}

function menu() {
  console.log('Quản lý sinh viên ');
  console.log('1. Hiển thị danh sách sinh viên ');
  console.log('2. Tạo thông tin sinh viên');
  console.log('3. Xóa sinh viên ');
  console.log('4. Tìm tên sinh viên ');
  console.log('5. Tìm group ');
  console.log('6. Hiển thị danh sách sinh viên sắp xếp theo tuổi');
  console.log('0. Thoát');
}


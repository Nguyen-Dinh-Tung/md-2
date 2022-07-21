import { OptionNumber } from './Constant';
import { Student } from './student';
import { StudentManager } from './StudentManager';
import * as rl from 'readline-sync'
import { isEmail } from './regex';

//  create
let choice = - 1 ;
let appManager = new StudentManager() ;
let app = rl.question

// run menu

do{

  menu();

  choice = +app('\nNhập lựa chọn của bạn : \n')

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
    case OptionNumber.OPTION_EDITSTUDENT_:
      editStudent();
      break ;
    default:
      // console.log('')
      console.log('\nVui lòng nhập lại lựa chọn\n')
  }

}while(choice != OptionNumber.OPTION_EXIST_ )


// handle manager

function editStudent() {
  console.log('\n7. --Sửa thông tin sinh viên\n');
  let index = +app('\nNhập vào số vị trí sinh viên\n');
  let student = createNewStudent();
  appManager.editStudent(student, index);
}


function sortStudentByAge() {
  appManager.sortStudentByAge();
}

function findGroupStudent() {
  console.log('\n5. -- Tìm group \n');
  let nameGroup = app('\nNhập tên group\n');
  appManager.findStudentByGroup(nameGroup);
}

function findStudentByName() {
  console.log('\n-- Tìm sinh viên\n');
  let name = app('\nNhập tên để tìm sinh viên\n');
  appManager.findStudentByName(name);
}

function deleteStudent() {
  console.log('\n-- Xóa sinh viên\n');
  let name = app('\nNhập vào tên để xóa sinh viên\n');
  appManager.deleteStudent(name);
}

function createNewStudent(){
  let name = app('Nhập tên sinh viên');
  let age = +app('Nhập tuổi');
  let date = app('Nhập ngày sinh');
  let email = app('Nhập email');
  email = isInputEmail(email);
  let group = app('Nhập group');
  let student = new Student(name, age, date, email, group);
  return student
}

function createStudent() {
  console.log('\n-- Tạo sinh viên mới\n');
  let student = createNewStudent()
  appManager.addStudent(student);

}

function isInputEmail(email: string) {
  while (isEmail(email) != true) {
    console.log('\nVui lòng nhập chính xác email\n')
    email = app('Nhập email');
  }
  return email;
}

function showListStudent() {
  console.log('\n-- Danh sách sinh viên\n');
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
  console.log('7. Chỉnh sửa thông tin sinh viên ');
  console.log('0. Thoát');
}


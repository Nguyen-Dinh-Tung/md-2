"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constant_1 = require("./Constant");
const student_1 = require("./student");
const StudentManager_1 = require("./StudentManager");
const rl = __importStar(require("readline-sync"));
//  create
let choice = -1;
let appManager = new StudentManager_1.StudentManager();
let app = rl.question;
// run menu
do {
    menu();
    choice = +app('Nhập lựa chọn của bạn : ');
    switch (choice) {
        case Constant_1.OptionNumber.OPTION_SHOWLISTSTUDENT_:
            showListStudent();
            break;
        case Constant_1.OptionNumber.OPTION_CREATESTUDENT_:
            createStudent();
            break;
        case Constant_1.OptionNumber.OPTION_ADDSTUDENT_:
            deleteStudent();
            break;
        case Constant_1.OptionNumber.OPTION_FINDSTUDENT_:
            findStudentByName();
            break;
        case Constant_1.OptionNumber.OPTION_FINDGROUP_:
            findGroupStudent();
            break;
        case Constant_1.OptionNumber.OPTION_SORTBYAGE_:
            sortStudentByAge();
            break;
        default:
            // console.log('')
            console.log('\nVui lòng nhập lại lựa chọn\n');
    }
} while (choice != Constant_1.OptionNumber.OPTION_EXIST_);
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
    let student = new student_1.Student(name, age, date, email, group);
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

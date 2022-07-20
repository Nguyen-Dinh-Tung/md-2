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
const student_1 = require("./student");
const StudentManager_1 = require("./StudentManager");
const rl = __importStar(require("readline-sync"));
//  create
let choice = -1;
let listStudent = new StudentManager_1.StudentManager();
let app = rl.question;
var OptionNumber;
(function (OptionNumber) {
    OptionNumber[OptionNumber["OPTION_SHOWLISTSTUDENT_"] = 1] = "OPTION_SHOWLISTSTUDENT_";
    OptionNumber[OptionNumber["OPTION_CREATESTUDENT_"] = 2] = "OPTION_CREATESTUDENT_";
    OptionNumber[OptionNumber["OPTION_ADDSTUDENT_"] = 3] = "OPTION_ADDSTUDENT_";
    OptionNumber[OptionNumber["OPTION_FINDSTUDENT_"] = 4] = "OPTION_FINDSTUDENT_";
    OptionNumber[OptionNumber["OPTION_EXIST_"] = 0] = "OPTION_EXIST_";
})(OptionNumber || (OptionNumber = {}));
do {
    menu();
    choice = +app('Nhập lựa chọn của bạn : ');
    switch (choice) {
        case OptionNumber.OPTION_SHOWLISTSTUDENT_:
            showListStudent();
            break;
        case OptionNumber.OPTION_CREATESTUDENT_:
            createStudent();
            break;
        case OptionNumber.OPTION_ADDSTUDENT_:
            deleteStudent();
            break;
        case OptionNumber.OPTION_FINDSTUDENT_:
            findStudentByName();
            break;
        default:
            // console.log('')
            console.log('\nVui lòng nhập lại lựa chọn\n');
    }
} while (choice != OptionNumber.OPTION_EXIST_);
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
    let student = new student_1.Student(name, age, date, email, group);
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

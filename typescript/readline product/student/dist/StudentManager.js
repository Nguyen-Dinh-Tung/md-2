"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
class StudentManager {
    constructor() {
        this.listStudent = [];
    }
    showListStudent() {
        console.table(this.listStudent);
        return;
    }
    addStudent(Student) {
        this.listStudent.push(Student);
    }
    findStudentByName(name) {
        let Student;
        this.listStudent.forEach((element) => {
            if (element.name == name) {
                Student = element;
                return;
            }
        });
        console.table(Student);
        return;
    }
    findStudentByGroup(group) {
        let listStudent;
        this.listStudent.forEach((element) => {
            if (element.name == name) {
                listStudent.push(element);
            }
        });
        return listStudent;
    }
    findIdStudentByName(name) {
        let flag = 0;
        this.listStudent.forEach((element, index) => {
            if (element.name == name) {
                flag = index;
                return;
            }
        });
        return flag;
    }
    deleteStudent(name) {
        let index = this.findIdStudentByName(name);
        this.listStudent.splice(index, 1);
    }
}
exports.StudentManager = StudentManager;

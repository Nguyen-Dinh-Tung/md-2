import { Queue } from "./Queue";
let listPatient = new Queue()

listPatient.addPatient('Tung', 1) ;
listPatient.addPatient('ádasd', 3) ;
listPatient.addPatient('ádasd', 0) ;
listPatient.addPatient('x', 2) ;
listPatient.addPatient('x', 35) ;
listPatient.addPatient('x', 5) ;

listPatient.sortListPatientByPriority()
listPatient.renderList()

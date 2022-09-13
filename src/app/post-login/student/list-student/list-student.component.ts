import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student-service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'email', 'state', 'dob', 'action'];
  studentList: any = [];
  student: any = '';
  result: boolean = false;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }


  addStudent(){

  }


  deleteStudent(id:number,name:string){

  }

  viewStudent(id:number){

  }

  editStudent(studentObj:any){

  }

  getAllStudent(){
    this.studentService.getAllStudent().subscribe((res) => {
      this.studentList = res;
    });
  }

}

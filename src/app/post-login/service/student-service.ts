import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { BehaviorSubject,Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StudentService{
    studentObj = new BehaviorSubject<any>(0);

    constructor(private http:HttpClient){}

    getAllStudent(){
        return this.http.get('http://localhost:8080/api/v1/student/');
    }

    createStudent(formData: any) {
        return this.http.post('http://localhost:8080/api/v1/student/',formData);
      }

}

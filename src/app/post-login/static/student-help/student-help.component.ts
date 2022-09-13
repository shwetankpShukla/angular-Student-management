import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';
import { QueryService } from '../../service/query-service';

@Component({
  selector: 'app-student-help',
  templateUrl: './student-help.component.html',
  styleUrls: ['./student-help.component.scss']
})
export class StudentHelpComponent implements OnInit {

  contactUsForm:FormGroup;
  queryId:any;

  constructor(private formBuilder:FormBuilder,private queryService:QueryService) {
    this.contactUsForm =this.formBuilder.group({
      id :[''],
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      state:[''],
      subject:[]
    }) 
   }

  ngOnInit(): void {
  }

  submit():void{
    if(this.contactUsForm.valid){
      this.contactUsForm.value.id=this.queryId;
      this.queryService.submitQuery(this.contactUsForm.value).subscribe((req) =>{

      },(res)=>{
        
      })
    }
  }

}

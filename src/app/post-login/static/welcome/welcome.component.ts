import { Component, OnInit } from '@angular/core';
import { COUNTRYIES } from 'src/app/shared/constant/common-constant';
import { STATEBYCOUNTRY } from 'src/app/shared/constant/common-constant';
import { FormBuilder,FormGroup,Validator,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  countryForm:FormGroup;
  
  states:any;
  COUNTRYIES: any;
  STATEBYCOUNTRY: any;
 
  constructor(private formBuilder:FormBuilder) {
    this.countryForm =this.formBuilder.group({
      country: [''],
      states:['']
    })
    
    this.COUNTRYIES=COUNTRYIES;
    console.log(this.COUNTRYIES);
    this.STATEBYCOUNTRY=STATEBYCOUNTRY[0].countries;
    
   }

  ngOnInit(): void {
  }

  onChangeCountry() {
    let countryCode = this.countryForm.value.country;
    let filterContryState = this.STATEBYCOUNTRY.filter((st: any) => countryCode === st.code);
    console.log(filterContryState)
    this.states =filterContryState[0].states;
    console.log(this.states)
   // console.log(JSON.stringify(state));
  }
}

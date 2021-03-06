import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   emailId : new FormControl(),
    //   password : new FormControl(),
    //   skills : new FormGroup({
    //     skillName: new FormControl(),
    //     experianceInYear : new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // });

    this.employeeForm = this.fb.group({
       emailId : [''],
       password : [''],
       skills : this.fb.group({
         skillName: [''],
         experianceInYear : [''],
         proficiency: ['beginner']
       })
    });
  }

  loadData():void {
    this.employeeForm.setValue({
      emailId : "abc.@gmail.com",
      password : "testpw",
      skills : {
        skillName: "skill 1",
        experianceInYear : 5,
        proficiency: 'beginner'
      }
    });
  }

  patchData():void{
    this.employeeForm.patchValue({
      emailId : "abc.@gmail.com",
      password : "testpw",
      // skills : {
      //   skillName: "skill 1",
      //   experianceInYear : 5,
      //   proficiency: 'beginner'
      // }
    });
  }

  onSubmit() : void {
    console.log(this.employeeForm.value);
  }

}

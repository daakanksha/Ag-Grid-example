import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {  
  
  userid:string=""
  pass:string=""
  userForm = new FormGroup({
    userid: new FormControl("",[Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl("",[Validators.minLength(6),Validators.maxLength(12)])
});

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
  }
  
  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    console.log(this.userForm);
  }

}

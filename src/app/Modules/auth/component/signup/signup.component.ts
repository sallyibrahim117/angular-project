import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm:FormGroup=this.fb.group({
    name:['',[Validators.required ,
      Validators.pattern( /^[A-Za-z]+$/),Validators.minLength(3),Validators.maxLength(12)]],
      email:['',[Validators.required]],
      password:['',[Validators.required,
    ]],
  })
  ngOnInit(): void {
  }
  get formControlls():any{
    return this.myForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  myForm: FormGroup = this.fb.group({
    password: ['', [Validators.required,Validators.minLength(6)]],
  repeatPass:['',[Validators.required,,Validators.minLength(6)]]
  })
  ngOnInit(): void {
  }
  get formControlls(): any {
    return this.myForm.controls;
  }

  submit() {
    if (this.myForm.valid) {

      // alert("well")
      console.log(this.myForm);
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}

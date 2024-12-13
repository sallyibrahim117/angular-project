import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}
  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
        Validators.minLength(3),
        Validators.maxLength(12),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  ngOnInit(): void {}
  get formControlls(): any {
    return this.myForm.controls;
  }

  submit() {
    if (this.myForm.valid) {
      this.toastr.success('well!,form submitted', 'hi');
      // alert("well")
      console.log(this.myForm);
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}

import { AuthService } from './../../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean;



  constructor(private authService:AuthService,private fb:FormBuilder , private toastr:ToastrService) { }
  myForm:FormGroup=this.fb.group({
    name:['',[Validators.required ,
      Validators.pattern( /^[A-Za-z]+$/),Validators.minLength(3),Validators.maxLength(12)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,
    ]],
  })
  get formControlls():any{
    return this.myForm.controls;
  }
  ngOnInit(): void {
  }
  submit(){
    if (this.myForm.valid){

      // this.toastr.success('well!,form submitted', 'hi');
      // alert("well")
      console.log(this.myForm);
      console.log(this.myForm.value);
     this.logging()
    }
    else {
this.myForm.markAllAsTouched();
    }


  }

  logging(){
    console.log("hhhhhhhhhhhhhhhhhhh");

    let data={"email":this.myForm.value.email ,"password":this.myForm.value.password}
    this.loading=true
    this.authService.login(data).subscribe({
     next:(res:any)=>{
      this.loading=false
      console.log(res)
     },
     error:(err:any)=>{
      this.loading=false
     },
     complete:()=>{}
   })
  }
}

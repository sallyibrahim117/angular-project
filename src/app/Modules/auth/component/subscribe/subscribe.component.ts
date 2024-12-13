import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  constructor(private fb:FormBuilder , private toastr:ToastrService) { }
  myForm:FormGroup=this.fb.group({
    email:['',[Validators.required,Validators.email]],
  })
  get formControlls():any{
    return this.myForm.controls;
  }
  ngOnInit(): void {
  }

}

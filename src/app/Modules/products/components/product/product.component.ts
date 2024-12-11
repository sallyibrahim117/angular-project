import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() data:any={}
@Output() item=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
add(e:Event){
  e.stopPropagation();
  this.item.emit(this.data)
}
}

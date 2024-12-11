import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent implements OnInit {
  @Input() data:any[]=[]
  @Input() title:string
  @Output() selectedData=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  detectChange(event:any){
    this.selectedData.emit(event)
  }
}

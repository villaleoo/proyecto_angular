import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-check-fav',
  templateUrl: './input-check-fav.component.html',
  styleUrl: './input-check-fav.component.scss'
})
export class InputCheckFavComponent implements OnInit {
 
  @Input()
  value:boolean=false;

  @Output() 
  valueChange:EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor(){}

 
  ngOnInit(): void {
    
  }

  handlerChange(event: Event):void{
    const inputElement = event.target as HTMLInputElement; 
    this.value=inputElement.checked ? true : false;
    this.valueChange.emit(this.value);
  }

}

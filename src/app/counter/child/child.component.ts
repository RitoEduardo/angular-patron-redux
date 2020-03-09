import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  @Input() counter: number;
  @Output() changeCounter = new EventEmitter<number>();

  BASE = 2;

  constructor() { }

  ngOnInit(): void {
  }

  onMultiplication() {
    this.counter *= this.BASE;
    this.changeCounter.emit(this.counter);
  }

  onDivision() {
    this.counter /= this.BASE;
    this.changeCounter.emit(this.counter);
  }

  onResetCounter( value ) {
    this.counter = value;
    this.changeCounter.emit(this.counter);
  }

}

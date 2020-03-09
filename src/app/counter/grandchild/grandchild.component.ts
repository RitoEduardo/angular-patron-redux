import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  INIT_BASE = 0;

  @Input() counter: number;
  @Output() resetCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onReset() {
    console.log(`Reset: ${ this.INIT_BASE }`);
    this.counter = this.INIT_BASE;
    this.resetCounter.emit( this.INIT_BASE );
  }

}

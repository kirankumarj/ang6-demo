import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
  @Output() onEmitedByChild = new EventEmitter<{name: string, salary: number}>();

  name: string;
  salary: number;

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.onEmitedByChild.emit({name: this.name, salary: this.salary});
  }
}

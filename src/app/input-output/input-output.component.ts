import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  user =  {
    name: '',
    age: 0
  };
  emp: {name: string, salary: number};

  constructor() { }

  ngOnInit() {
    this.emp =  {
      name: '',
      salary: 0
    };
  }

  setValueFromChildComponent(data) {
    this.emp.name = data.name;
    this.emp.salary = data.salary;
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-viewchild-ref',
  templateUrl: './local-viewchild-ref.component.html',
  styleUrls: ['./local-viewchild-ref.component.css']
})
export class LocalViewchildRefComponent implements OnInit {
  userNameLocal: string;
  userSalaryLocal: number;
  @ViewChild('userSalary')
  salary: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  setName(name: HTMLInputElement) {
    this.userNameLocal = name.value;
  }

  setSalary() {
    this.userSalaryLocal = this.salary.nativeElement.value;
  }

}

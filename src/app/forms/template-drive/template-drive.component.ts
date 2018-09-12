import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-drive',
  templateUrl: './template-drive.component.html',
  styleUrls: ['./template-drive.component.css']
})
export class TemplateDriveComponent implements OnInit {
  // @ViewChild('f') formValues;
  response: any;
  defalutRole = 'sse';
  constructor() { }

  ngOnInit() {
  }

  // onSubmitForm() {
  //   console.log(this.formValues);
  // }
  onSubmitForm(form) {
    this.response = form.value.name;
  }

}

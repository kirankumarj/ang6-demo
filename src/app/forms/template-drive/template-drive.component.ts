import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drive',
  templateUrl: './template-drive.component.html',
  styleUrls: ['./template-drive.component.css']
})
export class TemplateDriveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form) {
    console.log(form.value);
  }

}

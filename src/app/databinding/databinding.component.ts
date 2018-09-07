import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  statusBtn: string;
  isDisableBtn: boolean;

  enbaleBtn() {
    this.isDisableBtn = true;
    this.statusBtn = 'Button Enabled';
  }

  disableBtn() {
    this.isDisableBtn = false;
    this.statusBtn = 'Button Disabled';
  }
}

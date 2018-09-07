import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  selectedColor = '';
  isSelectedColor: boolean;
  changedColor;
  userName: string;
  names = [ 'anil', 'sambi', 'mani'];

    blueColor() {
      this.selectedColor = 'BLUE';
    }

    redColor() {
      this.selectedColor = 'RED';
    }

    changeDivColor(color) {
      this.changedColor = color;
    }
    getColor() {
      return this.changedColor;
    }
    addUser() {
      this.names.push(this.userName);
    }

}

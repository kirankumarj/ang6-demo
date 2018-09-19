import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  searchCity = '';
  userList = [
    {name: 'Kiran', dob: new Date(1988, 1, 30), city: 'atp', address: 'anantapur atp ap '},
    {name: 'Madhavi', dob: new Date(1996, 2, 5), city: 'dmm', address: 'Dharmavaram atp ap '},
    {name: 'Pavan', dob: new Date(1984, 8, 27), city: 'atp', address: 'anantapur atp ap 51001'},
    {name: 'Kiran', dob: new Date(1988, 1, 30), city: 'atp', address: 'anantapur atp ap '},
    {name: 'Jhansi', dob: new Date(1986, 4, 30), city: 'gtl', address: 'guntakal atp ap '},
    {name: 'Prajwal', dob: new Date(2014, 1, 30), city: 'atp', address: 'anantapur'},
    {name: 'Varshini', dob: new Date(2015, 1, 30), city: 'atp', address: 'anantapur'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form) {
    console.log(form.value);
    if (form.value) {
      this.userList.push(form.value);
    }
  }

}

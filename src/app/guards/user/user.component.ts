import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.userName = this.service.getUserDetails();
  }

}

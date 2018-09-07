import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userStatus: boolean;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  loginUser() {
    this.service.userLogin();
  }
  logoutUser() {
    this.service.userLogout();
  }

  getStatus(): any {
    this.userStatus = this.service.getStatus();
  }

}

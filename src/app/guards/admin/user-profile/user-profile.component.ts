import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userName: string;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.userName = this.service.getUserDetails();
  }
}

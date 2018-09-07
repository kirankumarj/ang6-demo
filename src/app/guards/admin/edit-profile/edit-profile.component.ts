import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userName: string;
  newName: string;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.userName = this.service.getUserDetails();
  }

  editUser() {
    this.service.updateUser(this.newName);
    this.userName = this.newName;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userName !== this.newName) {
      return confirm('Do you want to discard the changes');
    } else {
      return true;
    }
  }
}

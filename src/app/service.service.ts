import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isUserLogin = false;
  username = 'Kiran Kumar Jonnala';
  constructor() { }

  userLogin() {
    this.isUserLogin = true;
  }

  userLogout() {
    this.isUserLogin = false;
  }

  getStatus(): boolean {
    return this.isUserLogin;
  }

  updateUser(name: string) {
    this.username = name;
  }

  getUserDetails(): string {
    return this.username;
  }
}

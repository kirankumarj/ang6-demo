import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  testForm: FormGroup;
  loginNames = ['kiran', 'raju', 'pavan', 'sambi', 'veeresh', 'madhu'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'hobbies': new FormArray([]),
      'userData': new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'loginName': new FormControl(null, [Validators.required, this.validateUserName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male')
    });

    this.testForm = new FormGroup({
      'hobbies': new FormArray([]),
      'userData': new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'loginName': new FormControl(null, [Validators.required, this.validateUserName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male')
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.testForm.patchValue({
      'userData': {
        'userName': this.signupForm.get('userName'),
        'loginName': this.signupForm.get('loginName'),
        'email': this.signupForm.get('emial')
      },
      'gender': this.signupForm.get('gender')
    });

    this.signupForm.reset();
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  validateUserName(control: FormControl): {[s: string]: boolean} {
    if (this.loginNames.indexOf(control.value) !== -1) {
      return {'inValidName': true};
    }
    return null;
  }

}

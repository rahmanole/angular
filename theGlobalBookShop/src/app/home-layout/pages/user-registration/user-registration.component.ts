import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userInfo: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userInfo = new FormGroup({
      'busName': new FormControl(null),
      'busType': new FormControl(null),
      'address': new FormControl(null),
      'website': new FormControl(null),
      'cntName': new FormControl(null),
      'cntAddress': new FormControl(null),
      'email': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(null),
      'postCode': new FormControl(null),
      'country': new FormControl(null),
      'phone': new FormControl(null),
      'mobile': new FormControl(null),
      'fax': new FormControl(null),
      'password': new FormControl(null),
      'confirmPass': new FormControl(null),  
    });
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  logindata = {
    email: '',
    password: ''
  }
  updateFlag = false
  sindex: any
  dataArray: any = [];
  register = {
    userName: '',
    fatherName: '',
    mobileNumber: '',
    yearofpassing: ''
  }
  form: FormGroup
  constructor(private commonService: CommonService) {
    let data = this.commonService.getItem('logindata');
    console.log(data);
    if (data) this.logindata = data;
    this.form = new FormGroup({
      tel: new FormControl(['']),
    });
  }
  @Output() tableFlag = new EventEmitter<boolean>();
  @Output() tableRow = new EventEmitter<any>();
 
  registerFuntion() {
    let data = JSON.parse(JSON.stringify(this.register));
    this.tableRow.emit(data);
    this.tableFlag.emit(true)
    this.register = {
      userName: '',
      fatherName: '',
      mobileNumber: '',
      yearofpassing: ''
    }
   this.updateFlag = false;
  }
}

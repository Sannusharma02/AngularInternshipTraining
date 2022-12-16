import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  showdataFlag = false;
  hide = true;
  logindata = {
    email: 'sannu',
    password: ''
  }
  @Output() loginFlag = new EventEmitter<boolean>();
  constructor(
    private commonService: CommonService
  ) { }
  loginFunction() {
    if (this.logindata.email == "sannu" && this.logindata.password == "") {
      this.commonService.setItem('logindata', this.logindata)
      this.loginFlag.emit(false);
    }
    else {
      alert("Incorrect Credentials!!!");
    }
  }
}
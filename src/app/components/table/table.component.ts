import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  sindex: any
  dataArray: any = [];
  updateFlag = false
  showdataFlag = false
  showdataFlag1 = true
  register = {
    userName: '',
    fatherName: '',
    mobileNumber: '',
    yearofpassing: ''
  }

  @Output() tableFlag = new EventEmitter<boolean>();
  constructor(private commonService: CommonService,
    private userService: UserService) {
    let data = this.commonService.getItem('register');
    if (data) this.register = data;
    this.getData();
  }

  back() {
    this.tableFlag.emit(false)
  }
  onClickEdit(value: any, index: number) {
    this.updateFlag = true;
    this.register = JSON.parse(JSON.stringify(value));
    this.sindex = index;
    this.showdataFlag1 = false
  }
  onClickDelete(index: number) {
    this.dataArray.splice(index, 1)
    this.showdataFlag1 = true;
  }

  getData() {
    let obj = {
      ocode: 'sispl'
    }

    this.userService.search(obj)
      .subscribe(response => {
        console.log(response);


      },
        errro => {

        });


  }

}

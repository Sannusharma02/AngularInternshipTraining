import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginFlag = true;
  tableFlag =true
  @ViewChild(TableComponent ) tablecom  : TableComponent | undefined;
   constructor( ){
   }
  onclicklogin(event: any) {
    this.loginFlag = event
  }
  onclickregistration(event:any)
  {
    this.tableFlag=event;
    
  }
  // setTablerow(event: any){
  //   //console.log(event);
  //   setTimeout(() => {
  //     this.tablecom?.getData(event);
  //   }, 500);
  // }

  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry, } from "rxjs/operators";
import { throwError } from "rxjs";
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '';
  authorization = '';

  constructor(public http: HttpClient, public commonService: CommonService) {
    this.baseUrl = this.commonService.getBaseUrl();
    this.authorization = this.commonService.getAuthorization();
  }

  search(unit: any) { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authorization
      })
    };
    return this.http.post(this.baseUrl + '/user/search', unit, httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler))
  }
  






  errorHandler(error: any) {
    console.log(error);
    let message = (error['error']) ? ((error['error'].error) ? error['error'].error : error['message']) : error['message'];
    console.log(message);
    return throwError(message || 'Remote server unreachable. Please check your Internet connection.');
  }
}

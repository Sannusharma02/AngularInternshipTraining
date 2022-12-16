import { Injectable, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //private apiUrl = 'http://localhost:4016/api';//Local API
  private apiUrl = 'https://erp.sisx.in/vcrmapidev/api';//Dev API
  //private apiUrl = 'https://erp.sisx.in/sisxerpapi/api';//Prod API
  private authorization = 'Bearer c29mdG1lZXRzdmVuZG9yQ1JNOkoxNzFUU2U1VA==';
  //For Sign up Link
  private appUrl = "https://erp.sisx.in/#/";
  private appUrlSms = 'https%3A%2F%2Fweb.educampuz.com%2F%23%2F';
  public otype = 'Company';

  private jsonUrl = 'assets/jsons';
  public ipAddress = '';
  constructor(
      public snakBar: MatSnackBar,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    public http: HttpClient,
   
    ) { }

  /**
   * ***********************************************************************************
   * API URL Functions
   * ***********************************************************************************
   */
  getBaseUrl() {
    return this.apiUrl;
  }

  getAuthorization() {
    return this.authorization;
  }

  getAppUrl() {
    return this.appUrl;
  }

  getAppUrlSms() {
    return this.appUrlSms;
  }

  //left pad


/**
   * ***********************************************************************************
   * Local Functions
   * ***********************************************************************************
   */

  findItem(array: any, key: string, value: string) {
    for (let index = 0; index < array.length; index++) {
      if (array[index][key] == value) {
        return index;
      }
    }
    return -1;
  }

  showSnakBarMessage(message: string, type: string, duration: number, action?: string) {
    this.snakBar.open(message, action, {
      duration: duration,
      panelClass: type
    });
  }

/**
 * ***********************************************************************************
 * Local/Session Storage Functions
 * ***********************************************************************************
 */

  setItem(key: string, value: any) {
    this.storage.set(key, value);
  }

  getItem(key: string) {
    let value = this.storage.get(key) || undefined;
    return value;
  }

  removeItem(key: string) {
    this.storage.remove(key);
  }

  removeAll() {
    this.storage.clear();
  }

/**
 * ***********************************************************************************
 * JSON Service Functions
 * ***********************************************************************************
 */

 


}

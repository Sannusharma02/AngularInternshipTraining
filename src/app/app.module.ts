import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { SigninComponent } from './components/signin/signin.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistrationComponent,
    TableComponent
  ],
    
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

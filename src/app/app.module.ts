import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesSectionComponent } from './employees-section/employees-section.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesSectionComponent,
    EmployeeDetailComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

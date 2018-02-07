import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeesSectionComponent } from './employees-section/employees-section.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyInfoService } from './service/company-info.service';

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
  providers: [ CompanyInfoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

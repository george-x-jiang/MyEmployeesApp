import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from './service/company-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  companyInfo: any = {};

  constructor(private service: CompanyInfoService) {}

  ngOnInit() {
    this.service.getCompanyInfo().subscribe(data => {
      // Read the result field from the JSON response.
      this.companyInfo = data;
    });
  }

  get companyEstYear () {
    return this.companyInfo.companyEst && this.companyInfo.companyEst.substring(0, 4);
  }
}

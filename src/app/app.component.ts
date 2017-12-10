import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const companyDataUrl = '/assets/sample-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  companyInfo: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(companyDataUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.companyInfo = data['companyInfo'];
    });
  }

  get companyEstYear () {
    return this.companyInfo.companyEst && this.companyInfo.companyEst.substring(0, 4);
  }
}

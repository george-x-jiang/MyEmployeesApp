import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const companyDataUrl = '/assets/sample-data.json';

@Injectable()
export class CompanyInfoService {

  constructor(private http: HttpClient) {
  }

  getCompanyInfo(): Observable<any> {
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(companyDataUrl)
      .map(data => data['companyInfo']);

    return observable;
  }

  getEmployees(): Observable<any> {
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(companyDataUrl)
      .map(data => data['employees']);

    return observable;
  }
}

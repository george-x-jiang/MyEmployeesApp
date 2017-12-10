import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const employeeDataUrl = '/assets/sample-data.json';

@Component({
  selector: 'app-employees-section',
  templateUrl: './employees-section.component.html'
})
export class EmployeesSectionComponent implements OnInit {

  employees = [];
  selectedEmployee;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(employeeDataUrl).subscribe(data => {
      // Read the result field from the JSON response.
      this.employees = data['employees'];
    });
  }

  openModal(employee) {
    this.selectedEmployee = employee;
  }

  closeModal() {
    this.selectedEmployee = null;
  }

}

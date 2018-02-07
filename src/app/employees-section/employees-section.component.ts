import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../service/company-info.service';

@Component({
  selector: 'app-employees-section',
  templateUrl: './employees-section.component.html'
})
export class EmployeesSectionComponent implements OnInit {

  employees = [];
  selectedEmployee;

  constructor(private service: CompanyInfoService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(data => {
      // Read the result field from the JSON response.
      this.employees = data;
    });
  }

  openModal(employee) {
    this.selectedEmployee = employee;
  }

  closeModal() {
    this.selectedEmployee = null;
  }

}

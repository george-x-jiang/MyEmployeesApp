import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee;

  constructor() { }

  ngOnInit() {
  }

  get dateJoined() {
    return this.employee && this.employee.dateJoined.substring(0, 10);
  }

}

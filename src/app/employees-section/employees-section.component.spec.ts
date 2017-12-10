import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSectionComponent } from './employees-section.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { ModalComponent } from '../modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeesSectionComponent', () => {
  let component: EmployeesSectionComponent;
  let fixture: ComponentFixture<EmployeesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        EmployeesSectionComponent,
        EmployeeDetailComponent,
        ModalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmployeesSectionComponent } from './employees-section/employees-section.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        EmployeesSectionComponent,
        EmployeeDetailComponent,
        ModalComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render company name as empty string', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('');
  }));
});

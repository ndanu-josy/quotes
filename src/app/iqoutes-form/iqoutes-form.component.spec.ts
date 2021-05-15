import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqoutesFormComponent } from './iqoutes-form.component';

describe('IqoutesFormComponent', () => {
  let component: IqoutesFormComponent;
  let fixture: ComponentFixture<IqoutesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IqoutesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IqoutesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

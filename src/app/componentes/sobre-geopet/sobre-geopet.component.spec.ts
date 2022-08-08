import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreGeopetComponent } from './sobre-geopet.component';

describe('SobreGeopetComponent', () => {
  let component: SobreGeopetComponent;
  let fixture: ComponentFixture<SobreGeopetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreGeopetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreGeopetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

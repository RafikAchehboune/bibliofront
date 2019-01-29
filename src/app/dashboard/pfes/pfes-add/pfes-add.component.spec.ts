import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresAddComponent } from './livres-add.component';

describe('LivresAddComponent', () => {
  let component: LivresAddComponent;
  let fixture: ComponentFixture<LivresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

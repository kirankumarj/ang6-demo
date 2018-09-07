import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalViewchildRefComponent } from './local-viewchild-ref.component';

describe('LocalViewchildRefComponent', () => {
  let component: LocalViewchildRefComponent;
  let fixture: ComponentFixture<LocalViewchildRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalViewchildRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalViewchildRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

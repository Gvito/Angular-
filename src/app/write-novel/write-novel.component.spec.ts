import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNovelComponent } from './write-novel.component';

describe('WriteNovelComponent', () => {
  let component: WriteNovelComponent;
  let fixture: ComponentFixture<WriteNovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteNovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutArtigoComponent } from './put-artigo.component';

describe('PutArtigoComponent', () => {
  let component: PutArtigoComponent;
  let fixture: ComponentFixture<PutArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutArtigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

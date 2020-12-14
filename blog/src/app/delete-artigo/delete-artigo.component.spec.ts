import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArtigoComponent } from './delete-artigo.component';

describe('DeleteArtigoComponent', () => {
  let component: DeleteArtigoComponent;
  let fixture: ComponentFixture<DeleteArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteArtigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

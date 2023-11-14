import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiProjectDatailComponent } from './ai-project-datail.component';

describe('AiProjectDatailComponent', () => {
  let component: AiProjectDatailComponent;
  let fixture: ComponentFixture<AiProjectDatailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiProjectDatailComponent]
    });
    fixture = TestBed.createComponent(AiProjectDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

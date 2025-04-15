import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardThreeComponent } from './small-card-three.component';

describe('SmallCardThreeComponent', () => {
  let component: SmallCardThreeComponent;
  let fixture: ComponentFixture<SmallCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCardThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

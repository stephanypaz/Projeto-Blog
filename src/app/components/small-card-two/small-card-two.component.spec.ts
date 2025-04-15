import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardTwoComponent } from './small-card-two.component';

describe('SmallCardTwoComponent', () => {
  let component: SmallCardTwoComponent;
  let fixture: ComponentFixture<SmallCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCardTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

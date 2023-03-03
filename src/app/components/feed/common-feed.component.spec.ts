import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFeedComponent } from './common-feed.component';

describe('CommonFeedComponent', () => {
  let component: CommonFeedComponent;
  let fixture: ComponentFixture<CommonFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

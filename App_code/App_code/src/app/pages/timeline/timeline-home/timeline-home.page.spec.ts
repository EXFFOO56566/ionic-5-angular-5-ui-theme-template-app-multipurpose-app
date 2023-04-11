import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimelineHomePage } from './timeline-home.page';

describe('TimelineHomePage', () => {
  let component: TimelineHomePage;
  let fixture: ComponentFixture<TimelineHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

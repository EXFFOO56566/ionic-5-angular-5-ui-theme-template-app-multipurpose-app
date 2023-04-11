import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarsPage } from './calendars.page';

describe('CalendarsPage', () => {
  let component: CalendarsPage;
  let fixture: ComponentFixture<CalendarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

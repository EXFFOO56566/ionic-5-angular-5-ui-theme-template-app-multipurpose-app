import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Timeline3Page } from './timeline3.page';

describe('Timeline3Page', () => {
  let component: Timeline3Page;
  let fixture: ComponentFixture<Timeline3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timeline3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

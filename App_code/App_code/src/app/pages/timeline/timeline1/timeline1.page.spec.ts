import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Timeline1Page } from './timeline1.page';

describe('Timeline1Page', () => {
  let component: Timeline1Page;
  let fixture: ComponentFixture<Timeline1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timeline1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

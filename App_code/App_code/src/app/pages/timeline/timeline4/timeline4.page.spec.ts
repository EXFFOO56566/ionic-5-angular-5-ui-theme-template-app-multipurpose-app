import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Timeline4Page } from './timeline4.page';

describe('Timeline4Page', () => {
  let component: Timeline4Page;
  let fixture: ComponentFixture<Timeline4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timeline4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

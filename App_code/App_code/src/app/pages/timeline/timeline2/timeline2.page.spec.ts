import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Timeline2Page } from './timeline2.page';

describe('Timeline2Page', () => {
  let component: Timeline2Page;
  let fixture: ComponentFixture<Timeline2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timeline2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

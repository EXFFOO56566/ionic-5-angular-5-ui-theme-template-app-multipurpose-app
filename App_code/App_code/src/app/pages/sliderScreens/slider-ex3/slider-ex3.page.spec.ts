import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderEx3Page } from './slider-ex3.page';

describe('SliderEx3Page', () => {
  let component: SliderEx3Page;
  let fixture: ComponentFixture<SliderEx3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEx3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderEx3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

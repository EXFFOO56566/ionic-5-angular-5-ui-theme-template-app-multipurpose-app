import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderEx1Page } from './slider-ex1.page';

describe('SliderEx1Page', () => {
  let component: SliderEx1Page;
  let fixture: ComponentFixture<SliderEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderEx2Page } from './slider-ex2.page';

describe('SliderEx2Page', () => {
  let component: SliderEx2Page;
  let fixture: ComponentFixture<SliderEx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderEx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

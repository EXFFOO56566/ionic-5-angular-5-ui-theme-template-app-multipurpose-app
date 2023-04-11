import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TooltipPage } from './tooltip.page';

describe('TooltipPage', () => {
  let component: TooltipPage;
  let fixture: ComponentFixture<TooltipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

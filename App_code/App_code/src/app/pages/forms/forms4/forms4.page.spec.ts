import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Forms4Page } from './forms4.page';

describe('Forms4Page', () => {
  let component: Forms4Page;
  let fixture: ComponentFixture<Forms4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Forms4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

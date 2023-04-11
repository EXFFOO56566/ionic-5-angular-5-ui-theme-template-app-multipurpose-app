import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Forms1Page } from './forms1.page';

describe('Forms1Page', () => {
  let component: Forms1Page;
  let fixture: ComponentFixture<Forms1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Forms1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

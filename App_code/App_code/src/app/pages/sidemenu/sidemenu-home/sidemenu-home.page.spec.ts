import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidemenuHomePage } from './sidemenu-home.page';

describe('SidemenuHomePage', () => {
  let component: SidemenuHomePage;
  let fixture: ComponentFixture<SidemenuHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenuHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidemenuHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

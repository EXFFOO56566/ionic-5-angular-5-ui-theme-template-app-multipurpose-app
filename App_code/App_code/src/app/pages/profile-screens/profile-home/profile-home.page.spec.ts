import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileHomePage } from './profile-home.page';

describe('ProfileHomePage', () => {
  let component: ProfileHomePage;
  let fixture: ComponentFixture<ProfileHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

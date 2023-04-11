import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEx1Page } from './profile-ex1.page';

describe('ProfileEx1Page', () => {
  let component: ProfileEx1Page;
  let fixture: ComponentFixture<ProfileEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

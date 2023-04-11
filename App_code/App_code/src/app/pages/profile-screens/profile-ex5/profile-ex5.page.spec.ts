import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEx5Page } from './profile-ex5.page';

describe('ProfileEx5Page', () => {
  let component: ProfileEx5Page;
  let fixture: ComponentFixture<ProfileEx5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEx5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEx5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

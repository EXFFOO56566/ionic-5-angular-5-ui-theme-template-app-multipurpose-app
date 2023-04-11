import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEx4Page } from './profile-ex4.page';

describe('ProfileEx4Page', () => {
  let component: ProfileEx4Page;
  let fixture: ComponentFixture<ProfileEx4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEx4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEx4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

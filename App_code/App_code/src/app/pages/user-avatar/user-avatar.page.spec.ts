import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAvatarPage } from './user-avatar.page';

describe('UserAvatarPage', () => {
  let component: UserAvatarPage;
  let fixture: ComponentFixture<UserAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAvatarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

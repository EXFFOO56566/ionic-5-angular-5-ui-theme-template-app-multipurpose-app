import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEx2Page } from './profile-ex2.page';

describe('ProfileEx2Page', () => {
  let component: ProfileEx2Page;
  let fixture: ComponentFixture<ProfileEx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

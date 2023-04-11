import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEx3Page } from './profile-ex3.page';

describe('ProfileEx3Page', () => {
  let component: ProfileEx3Page;
  let fixture: ComponentFixture<ProfileEx3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEx3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEx3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatHomePage } from './chat-home.page';

describe('ChatHomePage', () => {
  let component: ChatHomePage;
  let fixture: ComponentFixture<ChatHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

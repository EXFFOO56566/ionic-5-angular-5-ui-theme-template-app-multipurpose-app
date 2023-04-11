import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEx2Page } from './chat-ex2.page';

describe('ChatEx2Page', () => {
  let component: ChatEx2Page;
  let fixture: ComponentFixture<ChatEx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

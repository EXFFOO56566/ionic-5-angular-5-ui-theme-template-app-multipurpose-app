import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEx4Page } from './chat-ex4.page';

describe('ChatEx4Page', () => {
  let component: ChatEx4Page;
  let fixture: ComponentFixture<ChatEx4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEx4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEx4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

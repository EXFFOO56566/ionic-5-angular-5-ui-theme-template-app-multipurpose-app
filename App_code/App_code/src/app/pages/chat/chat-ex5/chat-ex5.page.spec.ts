import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEx5Page } from './chat-ex5.page';

describe('ChatEx5Page', () => {
  let component: ChatEx5Page;
  let fixture: ComponentFixture<ChatEx5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEx5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEx5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

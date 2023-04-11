import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEx3Page } from './chat-ex3.page';

describe('ChatEx3Page', () => {
  let component: ChatEx3Page;
  let fixture: ComponentFixture<ChatEx3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEx3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEx3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

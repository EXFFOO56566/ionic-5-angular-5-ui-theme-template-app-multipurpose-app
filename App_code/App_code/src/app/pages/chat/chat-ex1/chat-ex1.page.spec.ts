import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEx1Page } from './chat-ex1.page';

describe('ChatEx1Page', () => {
  let component: ChatEx1Page;
  let fixture: ComponentFixture<ChatEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example3Page } from './example3.page';

describe('Example3Page', () => {
  let component: Example3Page;
  let fixture: ComponentFixture<Example3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

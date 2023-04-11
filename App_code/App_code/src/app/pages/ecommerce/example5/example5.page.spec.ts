import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example5Page } from './example5.page';

describe('Example5Page', () => {
  let component: Example5Page;
  let fixture: ComponentFixture<Example5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

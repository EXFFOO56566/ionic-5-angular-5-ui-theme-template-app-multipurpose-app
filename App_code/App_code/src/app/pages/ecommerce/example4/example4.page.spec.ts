import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example4Page } from './example4.page';

describe('Example4Page', () => {
  let component: Example4Page;
  let fixture: ComponentFixture<Example4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example1Page } from './example1.page';

describe('Example1Page', () => {
  let component: Example1Page;
  let fixture: ComponentFixture<Example1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

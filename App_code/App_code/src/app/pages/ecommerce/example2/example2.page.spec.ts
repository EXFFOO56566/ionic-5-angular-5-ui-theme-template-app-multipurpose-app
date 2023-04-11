import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example2Page } from './example2.page';

describe('Example2Page', () => {
  let component: Example2Page;
  let fixture: ComponentFixture<Example2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

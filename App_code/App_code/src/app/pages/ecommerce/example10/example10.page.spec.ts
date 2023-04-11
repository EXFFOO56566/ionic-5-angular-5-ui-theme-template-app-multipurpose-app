import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Example10Page } from './example10.page';

describe('Example10Page', () => {
  let component: Example10Page;
  let fixture: ComponentFixture<Example10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Example10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

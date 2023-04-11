import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleHomePage } from './example-home.page';

describe('ExampleHomePage', () => {
  let component: ExampleHomePage;
  let fixture: ComponentFixture<ExampleHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

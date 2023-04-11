import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridHomePage } from './grid-home.page';

describe('GridHomePage', () => {
  let component: GridHomePage;
  let fixture: ComponentFixture<GridHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

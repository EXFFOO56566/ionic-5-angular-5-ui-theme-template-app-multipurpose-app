import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridEx1Page } from './grid-ex1.page';

describe('GridEx1Page', () => {
  let component: GridEx1Page;
  let fixture: ComponentFixture<GridEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

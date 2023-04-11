import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridEx4Page } from './grid-ex4.page';

describe('GridEx4Page', () => {
  let component: GridEx4Page;
  let fixture: ComponentFixture<GridEx4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEx4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridEx4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

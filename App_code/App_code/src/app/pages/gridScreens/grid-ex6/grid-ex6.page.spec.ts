import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridEx6Page } from './grid-ex6.page';

describe('GridEx6Page', () => {
  let component: GridEx6Page;
  let fixture: ComponentFixture<GridEx6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEx6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridEx6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

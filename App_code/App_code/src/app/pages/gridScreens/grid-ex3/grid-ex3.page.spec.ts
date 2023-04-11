import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridEx3Page } from './grid-ex3.page';

describe('GridEx3Page', () => {
  let component: GridEx3Page;
  let fixture: ComponentFixture<GridEx3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEx3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridEx3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

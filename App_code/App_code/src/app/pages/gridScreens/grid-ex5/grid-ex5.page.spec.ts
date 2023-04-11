import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridEx5Page } from './grid-ex5.page';

describe('GridEx5Page', () => {
  let component: GridEx5Page;
  let fixture: ComponentFixture<GridEx5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEx5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridEx5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

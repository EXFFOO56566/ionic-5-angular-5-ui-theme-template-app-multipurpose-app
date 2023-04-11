import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridEx2Page } from './grid-ex2.page';

describe('GridEx2Page', () => {
  let component: GridEx2Page;
  let fixture: ComponentFixture<GridEx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridEx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridModelPage } from './grid-model.page';

describe('GridModelPage', () => {
  let component: GridModelPage;
  let fixture: ComponentFixture<GridModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

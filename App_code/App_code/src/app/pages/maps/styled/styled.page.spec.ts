import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StyledPage } from './styled.page';

describe('StyledPage', () => {
  let component: StyledPage;
  let fixture: ComponentFixture<StyledPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StyledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

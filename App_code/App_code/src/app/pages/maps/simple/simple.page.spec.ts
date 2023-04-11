import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimplePage } from './simple.page';

describe('SimplePage', () => {
  let component: SimplePage;
  let fixture: ComponentFixture<SimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

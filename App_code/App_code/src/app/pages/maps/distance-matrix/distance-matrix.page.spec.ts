import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistanceMatrixPage } from './distance-matrix.page';

describe('DistanceMatrixPage', () => {
  let component: DistanceMatrixPage;
  let fixture: ComponentFixture<DistanceMatrixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceMatrixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistanceMatrixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

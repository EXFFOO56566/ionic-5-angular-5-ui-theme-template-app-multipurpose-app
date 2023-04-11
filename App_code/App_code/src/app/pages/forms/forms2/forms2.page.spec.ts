import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Forms2Page } from './forms2.page';

describe('Forms2Page', () => {
  let component: Forms2Page;
  let fixture: ComponentFixture<Forms2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Forms2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

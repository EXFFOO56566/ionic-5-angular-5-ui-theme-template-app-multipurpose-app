import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Forms3Page } from './forms3.page';

describe('Forms3Page', () => {
  let component: Forms3Page;
  let fixture: ComponentFixture<Forms3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Forms3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

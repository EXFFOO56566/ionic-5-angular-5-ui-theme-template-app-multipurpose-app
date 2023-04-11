import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabs2Page } from './tabs2.page';

describe('Tabs2Page', () => {
  let component: Tabs2Page;
  let fixture: ComponentFixture<Tabs2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

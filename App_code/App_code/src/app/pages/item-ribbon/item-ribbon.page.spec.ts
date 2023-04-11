import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemRibbonPage } from './item-ribbon.page';

describe('ItemRibbonPage', () => {
  let component: ItemRibbonPage;
  let fixture: ComponentFixture<ItemRibbonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRibbonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemRibbonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

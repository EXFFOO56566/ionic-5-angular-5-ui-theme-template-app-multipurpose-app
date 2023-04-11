import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CkEditorPage } from './ck-editor.page';

describe('CkEditorPage', () => {
  let component: CkEditorPage;
  let fixture: ComponentFixture<CkEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CkEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

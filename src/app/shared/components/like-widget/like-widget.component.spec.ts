import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { AppModule } from 'src/app/app.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges(); // faz a chamanda ao component, e o ngOnit é chamado
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });
});

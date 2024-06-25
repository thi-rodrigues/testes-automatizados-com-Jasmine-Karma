import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { AppModule } from 'src/app/app.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    fixture.detectChanges(); // faz a chamanda ao component, e o ngOnit é chamado
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Ex 1- should trigger emission when called`, (done) => {
      fixture.detectChanges();
      component.liked.subscribe(() => {
        expect(true).toBeTrue();
        done();
        });
      component.like();
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Ex 1- should trigger emission when called`, (done) => {
      fixture.detectChanges();
      component.liked.subscribe(() => {
        expect(true).toBeTrue();
        done();
        });
      component.like();
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Ex 2- should trigger emission when called`, () => {
      spyOn(component.liked, 'emit');
      fixture.autoDetectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  });

});

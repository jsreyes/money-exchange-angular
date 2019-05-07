import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent, BodyComponent, FooterComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    expect(component.title).toEqual('app');
  });

  it('should have a header component', () => {
    const de = fixture.debugElement.query(By.directive(HeaderComponent));
    expect(de).not.toBeNull();
  });

  it('should have a body component', () => {
    const de = fixture.debugElement.query(By.directive(BodyComponent));
    expect(de).not.toBeNull();
  });

  it('should have a footer component', () => {
    const de = fixture.debugElement.query(By.directive(FooterComponent));
    expect(de).not.toBeNull();
  });

  it('should have a class container in main div', () => {
    const de = fixture.debugElement.query(By.css('.container'));
    expect(de).toBeTruthy();
  });
});

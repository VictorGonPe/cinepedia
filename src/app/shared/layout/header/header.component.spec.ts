import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Location } from '@angular/common';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render two menu links', () => {
    const links = fixture.nativeElement.querySelectorAll('ul li a');
    expect(links.length).toBe(2);
    expect(links[0].textContent.trim()).toBe('HOME');
    expect(links[1].textContent.trim()).toBe('FILMS');
  });

  it('should toggle the mobile menu', () => {
    expect(component.isMenuOpen).toBeFalse();
    component.toogleMenu();
    expect(component.isMenuOpen).toBeTrue();
    component.toogleMenu();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should set selected link on click', () => {
    const homeLink = fixture.nativeElement.querySelector('a[routerLink="/"]');
    homeLink.click();
    fixture.detectChanges();
    expect(component.selectLink).toBe('home');
  });
});

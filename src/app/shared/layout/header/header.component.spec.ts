import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { signal } from '@angular/core';


class MockAuthService {
  user = signal({ name: 'Fake User', email: 'fake@example.com' });
  logout = () => {};
}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
        { provide: AuthService, useClass: MockAuthService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should include HOME and FILMS menu links', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('ul li a')
    ).map((el: any) => el.textContent.trim());

    expect(links).toContain('HOME');
    expect(links).toContain('FILMS');
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

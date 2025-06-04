import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialComponent } from './social.component';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Facebook link', () => {
    const link = fixture.nativeElement.querySelector('a[href="https://facebook.com/angular"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute('aria-label')).toBe('Facebook');
  });

  it('should contain Instagram link', () => {
    const link = fixture.nativeElement.querySelector('a[href="https://instagram.com/angular"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute('aria-label')).toBe('Instagram');
  });

  it('should contain Twitter link', () => {
    const link = fixture.nativeElement.querySelector('a[href="https://twitter.com/angular"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute('aria-label')).toBe('Twitter');
  });

  it('should contain YouTube link', () => {
    const link = fixture.nativeElement.querySelector(
      'a[href="https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw"]'
    );
    expect(link).toBeTruthy();
    expect(link.getAttribute('aria-label')).toBe('Youtube');
  });
});

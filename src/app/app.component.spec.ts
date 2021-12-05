import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbar } from '@angular/material/toolbar';
import { MockComponent, ngMocks } from 'ng-mocks';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent(MatToolbar), AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it(`should have as title '/ME'`, () => {
    expect(ngMocks.find(MatToolbar).nativeElement.innerHTML).toContain('/ME');
  });

  it('should render header with name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main H1')?.textContent).toContain(
      'Damien Marest'
    );
  });
});

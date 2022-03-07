import { TestBed } from '@angular/core/testing';
import { MatToolbar } from '@angular/material/toolbar';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  MockBuilder,
  MockRender,
  MockedComponentFixture,
  ngMocks,
} from 'ng-mocks';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import * as breakpointSelectors from './core/stores/breakpoint/breakpoint.selectors';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;
  let store: MockStore;
  beforeEach(() =>
    MockBuilder(AppComponent, AppModule).provide(
      provideMockStore({
        selectors: [
          {
            selector: breakpointSelectors.isDesktop,
            value: true,
          },
        ],
      })
    )
  );

  beforeEach(() => {
    fixture = MockRender(AppComponent);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  describe('Header', () => {
    describe('Desktop mode', () => {
      fit(`should not have a toolbar as it is desktop mode'`, () => {
        expect(ngMocks.find('mat-toolbar', null)).toBeNull();
      });
    });

    describe('Mobile mode', () => {
      beforeEach(() => {
        breakpointSelectors.isDesktop.setResult(false);
        store.refreshState();
        fixture.detectChanges();
      });

      fit(`should have a toolbar as it is mobile mode'`, () => {
        expect(ngMocks.find('mat-toolbar', null)).not.toBeNull();
      });
    });
  });
});

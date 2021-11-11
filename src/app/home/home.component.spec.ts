import { TestBed } from '@angular/core/testing';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { MemoizedSelector, Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestCtxHelper, createTestCtx, fakeRouterNavigationAction } from '@webfactory/fret-ngx/spec-utils';
import { MockBuilder } from 'ng-mocks';
import { HomeModule } from './home.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let tCtx: TestCtxHelper<HomeComponent>;

  describe('unit', () => {
    let store: MockStore;

    beforeEach(async () => {
      await MockBuilder(HomeComponent, HomeModule);

      tCtx = createTestCtx(HomeComponent);
      store = TestBed.inject(MockStore);
      tCtx.detectChanges();
    });

    it(`should create`, () => {
      expect(tCtx.component).toBeTruthy();
    });
  });
});

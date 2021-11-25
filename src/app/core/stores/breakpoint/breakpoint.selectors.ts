import {createFeatureSelector, createSelector} from "@ngrx/store";
import { featureKey } from "./breakpoint.reducer";
import {State} from "./breakpoint.state";

const getState = createFeatureSelector<State>(featureKey);
export const isDesktop = createSelector(getState, (state: State) => state.isDesktop);

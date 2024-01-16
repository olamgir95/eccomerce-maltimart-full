import { Dispatch, createSelector } from "@reduxjs/toolkit";
import {
  setNewProducts,
  setTopSellers,
  setTrendProducts,
  setNewEvents,
  setTrendArticles,
} from "./slice";
import {
  retrieveNewProducts,
  retrieveTopSellers,
  retrieveTrendProducts,
  retrieveNewEvents,
  retrieveTrendArticles,
} from "./selector";
import { Seller } from "../../types/user";
import { Product } from "../../types/product";

//redux slice
export const actionDispatch = (dispatch: Dispatch) => ({
  setTopSellers: (data: Seller[]) => dispatch(setTopSellers(data)),
  setNewProducts: (data: Product[]) => dispatch(setNewProducts(data)),
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data)),
  setNewEvents: (data: Product[]) => dispatch(setNewEvents(data)),
  setTrendArticles: (data: Product[]) => dispatch(setTrendArticles(data)),
});

//redux selector
export const homeRetriever = createSelector(
  retrieveTopSellers,
  retrieveNewProducts,
  retrieveTrendProducts,
  retrieveNewEvents,
  retrieveTrendArticles,
  (topSellers, newProducts, trendProducts, newEvents, trendArticles) => ({
    topSellers,
    newProducts,
    trendProducts,
    newEvents,
    trendArticles,
  })
);

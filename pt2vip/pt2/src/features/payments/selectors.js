
import { createSelector } from "reselect";

export const selectPayments = (state) => state.payments.list;

export const selectSuccessfulPayments = createSelector(
  [selectPayments],
  (payments) => payments.filter((p) => p.status === "SUCCESS")
);

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";
import { contactApi } from ".//contactsSlice";


const contacts = { [contactApi.reducerPath]: contactApi.reducer };

const filter = createReducer("", {
  [contactsActions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });

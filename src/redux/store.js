import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactApi } from "./contacts/contactsSlice";


const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  contactApi.middleware,
];

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsPersistConfig, items),
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: middleware,

});

setupListeners(store.dispatch);

// export const persistor = persistStore(store);

// export default configureStore({ reducer: { contacts: items } });

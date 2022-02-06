import { configureStore } from "@reduxjs/toolkit";
import items from "./contacts/contacts-reducer";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, items),
  },
  middleware: middleware,
  logger,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// export default configureStore({ reducer: { contacts: items } });

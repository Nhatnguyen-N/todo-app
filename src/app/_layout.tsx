import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="addtodo" />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default Layout;

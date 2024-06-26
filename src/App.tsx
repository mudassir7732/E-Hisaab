import React, { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/index";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme/index";
import AppRoutes from "./routes/AppRoutes";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Box sx={{ overflowX: 'hidden' }}>
            <AppRoutes />
          </Box>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
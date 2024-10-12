import { createRoot } from "react-dom/client";
import ThemeProvider from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate loading={"Loading..."} persistor={persistor}>
        <Router basename="/">
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);

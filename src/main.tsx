import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import StateContextProvider from "./context/StateContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </StrictMode>
);

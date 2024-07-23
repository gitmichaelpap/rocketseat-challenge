import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "@/hooks/auth";
import { SearchProvider } from "@/hooks/search";
import { Routes } from "@/routes";
import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <SearchProvider>
          <Routes />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

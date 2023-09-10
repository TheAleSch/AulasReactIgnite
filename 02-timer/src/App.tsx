import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
//styles and theme
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

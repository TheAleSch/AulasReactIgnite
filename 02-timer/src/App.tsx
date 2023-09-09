import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

//styles and theme
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary">Henlow</Button>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

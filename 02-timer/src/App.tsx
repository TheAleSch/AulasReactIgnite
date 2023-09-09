import { ThemeProvider } from "styled-components";
import { Button } from "./components/buttons";
import { defaultTheme } from "./styles/themes/default";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger">Henlow</Button>
    </ThemeProvider>
  );
}

export default App;

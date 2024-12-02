import {ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
import {SnackProvider} from "./SnackProvider.tsx";
import Example from "./Example.tsx";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackProvider>
          <Example />
        </SnackProvider>
      </ThemeProvider>
    </>
  )
}

export default App

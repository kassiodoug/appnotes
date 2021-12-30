import GridNote from "./components/GridNote";
import Header from "./components/Header";
import { Container, Box, ThemeProvider } from "@mui/material";
import theme from './assets'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Container>
        <Header theme={theme} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <GridNote url="/notes" />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

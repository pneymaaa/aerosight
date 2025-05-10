import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import AppRoutes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

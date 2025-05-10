import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Education from "./pages/Education";
import { Container } from "@mui/material";

const AppRoutes = () => {
return (
  <Container sx={{ mt: 12}}>
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/education" element={<Education />} />
      </Routes>
  </Container>
     
)};

export default AppRoutes;

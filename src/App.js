import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, RequireAuth } from "./context/Auth";
import Layout from "./components/layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NewPatientPage from "./pages/RegisterPacient";
import UnauthorizedPage from "./pages/Unauthorized";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/NewPatient" element={<NewPatientPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import { SearchBox } from "components/search/RenderSearchBox";
import ContactForm from "components/Contact";
import Result from "scenes/search_result";
import RecruitPage from "scenes/recruit_portal";

function App() {
  const mode = "light";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<SearchBox />} />
              <Route path="/recruiter portal" element={<RecruitPage />} />
              <Route path="/email" element={<ContactForm />} />
              <Route path="/search result" element={<Result />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

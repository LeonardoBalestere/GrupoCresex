import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AdminDashboardContainer from "./components/AdminDashboardContainer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ServicesPage from "./pages/ServicesPage";
import EnasexPage from "./pages/EnasexPage";
import ProjectsPage from "./pages/ProjectsPage";
import MembersPage from "./pages/MembersPage";
import ProfessionalPage from "./pages/ProfessionalPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  const location = useLocation();
  const isAuthScreen = location.pathname === "/login" || location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen">
      {!isAuthScreen && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/membros" element={<MembersPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/profissionais" element={<ProfessionalPage />} />
          <Route path="/enasex" element={<EnasexPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboardContainer />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAuthScreen && <Footer />}
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
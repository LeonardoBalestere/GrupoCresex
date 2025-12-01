import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner@2.0.3";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import FounderPage from "./pages/FounderPage";
import EnasexPage from "./pages/EnasexPage";
import ProjectsPage from "./pages/ProjectsPage";
import MembersPage from "./pages/MembersPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/fundadora" element={<FounderPage />} />
            <Route path="/enasex" element={<EnasexPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/membros" element={<MembersPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}
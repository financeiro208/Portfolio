/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import BackToTop from "./components/BackToTop";
import { LanguageProvider } from "./lib/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </LanguageProvider>
  );
}


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import ProjectDisplay from "@/pages/ProjectDisplay"
import Contact from "@/pages/Contact"
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

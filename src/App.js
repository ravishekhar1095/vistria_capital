import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import InsightsPage from './pages/InsightsPage';
import BuilderChronologyPage from './pages/BuilderChronologyPage';
import ArticlesPage from './pages/ArticlesPage';
import NriPage from './pages/NriPage';
import MarketTrendsPage from './pages/MarketTrendsPage';
import ContactPage from './pages/ContactPage';
import MediaNewsPage from './pages/MediaNewsPage';
import BlogsPage from './pages/BlogsPage';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/builder-chronology" element={<BuilderChronologyPage />} />
          <Route path="insights/articles" element={<ArticlesPage />} />
          <Route path="insights/nri" element={<NriPage />} />
          <Route path="insights/market-trends" element={<MarketTrendsPage />} />
          <Route path="media-news" element={<MediaNewsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

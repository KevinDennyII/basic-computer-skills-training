import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import ModulePage from './pages/ModulePage';
import CertificatePage from './pages/CertificatePage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

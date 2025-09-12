import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExitPage from './pages/ExitPage';
import CreateEntryPage from './pages/CreateEntryPage';
import EntryPage from './pages/EntryPage';
import EntriesPage from './pages/EntriesPage';
import EditEntryPage from './pages/EditEntryPage';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutPage from './components/About';


const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/exit" element={<ExitPage />} />
          <Route path="/create-note" element={<CreateEntryPage />} />
          <Route path="/entries/:id" element={<EntryPage />} />
          <Route path="/entries" element={<EntriesPage />} />
          <Route path="/entries/:id/edit" element={<EditEntryPage />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/error" />} />
        
        </Routes>
      <Footer />
    </>
  );
};

export default App

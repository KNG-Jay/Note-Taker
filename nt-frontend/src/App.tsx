import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExitPage from './pages/ExitPage';
import CreateEntryPage from './pages/CreateEntryPage';
import EntryPage from './pages/EntryPage';
import EntriesPage from './pages/EntriesPage';
import EditEntryPage from './pages/EditEntryPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/exit" element={<ExitPage />} />
          <Route path="/create-entry" element={<CreateEntryPage />} />
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

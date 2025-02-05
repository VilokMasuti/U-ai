import { HeroUIProvider } from '@heroui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Main from './pages/Main';

const App = () => {
  return (
    <HeroUIProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </HeroUIProvider>
  );
};

export default App;

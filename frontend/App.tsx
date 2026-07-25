
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MOCK_DATA } from './constants';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { CivilizacaoPage } from './pages/CivilizacaoPage';
import { DeusesPage } from './pages/DeusesPage';
import { EnergiasPage } from './pages/EnergiasPage';
import { RegioesPage } from './pages/RegioesPage';
import { PersonagensPage } from './pages/PersonagensPage';
import { GenericPage } from './pages/GenericPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/civilizacao" element={<CivilizacaoPage />} />
          <Route path="/deuses" element={<DeusesPage />} />
          <Route path="/energias" element={<EnergiasPage />} />
          <Route path="/entidades" element={<GenericPage title="Entidades" bg="bg-trimera-stone" items={[]} />} />
          <Route path="/personagens" element={<PersonagensPage />} />
          <Route path="/reinos" element={<GenericPage title="Reinos" bg="bg-trimera-stone" items={MOCK_DATA.reinos} />} />
          <Route path="/regioes" element={<RegioesPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { HistoriasPage } from './pages/HistoriasPage';
import { HistoriaJoelGinaPage } from './pages/HistoriaJoelGinaPage';
import { DeusesPage } from './pages/DeusesPage';
import { EnergiasPage } from './pages/EnergiasPage';
import { ReinosRegioesPage } from './pages/ReinosRegioesPage';
import { PersonagensPage } from './pages/PersonagensPage';
import { GenericPage } from './pages/GenericPage';
import { RacasPage } from './pages/RacasPage';
import { LendariosPage } from './pages/LendariosPage';
import { PoderesPage } from './pages/PoderesPage';
import { TatuagensPage } from './pages/TatuagensPage';
import { EspecializacoesPage } from './pages/EspecializacoesPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/historias" element={<HistoriasPage />} />
          <Route path="/historias/joel-e-gina" element={<HistoriaJoelGinaPage />} />
          <Route path="/historia" element={<HistoriasPage />} />
          <Route path="/civilizacao" element={<HistoriasPage />} />
          <Route path="/deuses" element={<DeusesPage />} />
          <Route path="/energias" element={<EnergiasPage />} />
          <Route path="/entidades" element={<GenericPage title="Entidades" bg="bg-trimera-stone" items={[]} />} />
          <Route path="/personagens" element={<PersonagensPage />} />
          <Route path="/reinos-e-regioes" element={<ReinosRegioesPage />} />
          <Route path="/reinos" element={<ReinosRegioesPage />} />
          <Route path="/regioes" element={<ReinosRegioesPage />} />
          <Route path="/racas" element={<RacasPage />} />
          <Route path="/lendarios" element={<LendariosPage />} />
          <Route path="/poderes" element={<PoderesPage />} />
          <Route path="/tatuagens" element={<TatuagensPage />} />
          <Route path="/especializacoes" element={<EspecializacoesPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;

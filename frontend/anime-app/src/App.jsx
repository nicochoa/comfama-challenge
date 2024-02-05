import './App.css'

import { AnimeProvider } from './AnimeContext';
import { PageHeader } from './components/PageHeader/PageHeader';
import { SearchPage } from './pages/SearchPage';


function App() {

  return (
    <>
      <PageHeader />
      <AnimeProvider>
        <SearchPage/>
      </AnimeProvider>
    </>
  );
};

export default App

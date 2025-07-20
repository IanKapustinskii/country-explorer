import './App.css';
import './media.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FetchCardListView } from './components/CardList/FetchCardList';
import { CountryDetailPage } from './components/CountryDetails/CountryDetailPage';
import { Header } from './components/Header/Header.tsx'

function App() {

  return (
    <Router basename='/country-explorer'>
      <Header />
      <Routes>
        <Route path="/" element={<FetchCardListView />} />
        <Route path="/country/:countryCode" element={<CountryDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
import './style/style.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Aboutus from './pages/AboutUs';
import Notfound from './pages/NotFound';
import Ourmenu from './pages/OurMenu';
import { createBrowserHistory } from 'history';
import Layout1 from './pages/layouts/Layout1';
import GalleriesPage from './pages/GalleriesPage';
import Galleriesopenedel from './components/GalleriesOpenedEl';
import Brand from './pages/Brand';

const history = createBrowserHistory({ forceRefresh: true });

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout1 />} >
            <Route index element={<Home />} />
            <Route path='about-us' element={<Aboutus />} />
            <Route path='our-menu' element={<Ourmenu />} />
            <Route path='galleries' element={<GalleriesPage />} />
            <Route path='brand' element={<Brand />} />
            <Route path='galleries-opened/:id' element={<Galleriesopenedel />} />
          </Route>
          <Route path='*' element={<Navigate to="/404" />} />
          <Route path='/404' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
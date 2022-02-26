import './style/style.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutus from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<Aboutus />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
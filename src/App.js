import logo from './logo.svg';
import './style/style.css';
import Navigation from './components/layout/Navigation';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import VarietyCards from './components/layout/VarietyCards';
import ChooseEnjoy from './components/layout/ChooseEnjoy';
import NewProducts from './components/layout/NewProducts';
import Slider from './components/layout/Slider';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <VarietyCards />
        <ChooseEnjoy />
        <NewProducts />
        <Slider />
      </Layout>
    </div>
  );
}

export default App;
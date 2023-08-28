import './App.css';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import OurProduct from './components/ourProduct/OurProduct';
import SaidProduct from './components/saidProduct/SaidProduct';
import Season from './components/season/Season';
import Seller from './components/seller/Seller';
import Signup from './components/signUp/Signup';
import Slider from './components/slider/Slider';
import SliderSeller from './components/sliderSeller/SliderSeller';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Season/>
      <Seller/>
      <SliderSeller/>
      <OurProduct/>
      <SaidProduct/>
      <Signup/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

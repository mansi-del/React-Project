import './App.css';
import Card from './Component/card';
import AboutUs from './Component/about_us';
import Service from './Component/service';
import Carousel from './Component/caro';
import Navbar from './Component/navbar'; 
import Review from './Component/review';
import ContactForm from './Component/ContactForm';

function App() {
  return (
    <div className="app">
      <Navbar />

      <div id="caro">
        <Carousel />

      </div>

      <br/>  

      <Card/>

      <AboutUs/>  

      <Service/>

      <div id="reviews">
        <Review />
      </div>
      
     <div id="contact">
        <ContactForm /> 
      </div>
    </div>
  );
}

export default App;
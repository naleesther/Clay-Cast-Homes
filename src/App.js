import './App.css';
import Footer from './components/Footer';
import Herosection from './components/herosection';
import Navbar from './components/navbar';
import OurStory from './components/our-story';

function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <OurStory/>
      <Footer/>
    </div>
  );
}

export default App;

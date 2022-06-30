import './App.css';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';


const particlesOptions = {
  particles: {
    number: {
      value:30,
      density: {
        enable:true,
        value_area: 800  
      }
    },
    line_linked: {
      shadow: {
        Enable: true,
        color: "",
        blur: 5
      }
    }
  }
}
function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <Rank />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;

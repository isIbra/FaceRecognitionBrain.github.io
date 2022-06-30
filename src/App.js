import './App.css';
import { useState } from 'react';
import Clarifai from '../node_modules/clarifai'
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import ListOfColors from './components/ListOfColors';

const app = new Clarifai.App({
  apiKey: '777e288e09f8416f8eb899e0d855c20a'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
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

//this is the second branch
function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageurl] = useState('');
  const [colors, setColors] = useState([]);

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onButtonSubmit = () => {
    setImageurl(input)
    app.models
      .predict(Clarifai.COLOR_MODEL, input).then(
        function (response) {
          setColors(response.outputs[0].data.colors)
          console.log(response.outputs[0].data.colors)
        },
        function (err) {
          console.log(err)
        }

      );
  }

  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <Rank />
      <FaceRecognition imageUrl={imageUrl} />
      <ListOfColors colors={colors}/>
      
    </div>
  );
}

export default App;

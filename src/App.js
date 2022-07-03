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



function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageurl] = useState('');
  const [colors, setColors] = useState([]);
  const [box, setBox] = useState({})

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box)
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onButtonSubmit = () => {
    setImageurl(input)
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => displayFaceBox(calculateFaceLocation(response)))
      .catch(err => console.log(err));
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
      <FaceRecognition box={box} imageUrl={imageUrl} />
      {/* <ListOfColors colors={colors} /> */}

    </div>
  );
}

export default App;

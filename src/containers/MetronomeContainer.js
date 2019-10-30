import React, {Component} from 'react';
import Metronome from '../components/Metronome.js';

class MetronomeContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    sounds: [],
    selectedSound: null,
    interval: null
  }
}

  render() {
    return <Metronome />
  }
}

export default MetronomeContainer;

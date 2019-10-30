import React, {Component} from 'react';
import Metronome from '../components/Metronome.js';
import MetronomeControls from './MetronomeControls.js'

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
    return (
      <div className="metronome-controls">
        <MetronomeControls />
        <Metronome />
      </div>
    )
  }
}

export default MetronomeContainer;

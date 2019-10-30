import React, {Component} from 'react';
import Metronome from '../components/Metronome.js';
import MetronomeControls from './MetronomeControls.js'

class MetronomeContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    sounds: [],
    selectedSound: null,
    tempo: null
  }
    this.handleTempoChange = this.handleTempoChange.bind(this);
}

  handleTempoChange(selectedTempo) {
    this.setState({ tempo: selectedTempo })
  }

  render() {
    return (
      <div className="metronome-controls">
        <MetronomeControls
        onSlide={ this.handleTempoChange }
        tempo={ this.state.tempo }/>
        <Metronome />
      </div>
    )
  }
}

export default MetronomeContainer;

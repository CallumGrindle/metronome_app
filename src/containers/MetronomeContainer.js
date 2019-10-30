import React, {Component} from 'react';
import Metronome from '../components/Metronome.js';
import MetronomeControls from './MetronomeControls.js'

class MetronomeContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    sounds: [],
    selectedSound: null,
    tempo: 1000
  }
    this.handleTempoChange = this.handleTempoChange.bind(this);
}

  handleTempoChange(selectedTempo) {
    const interval = Math.floor(60000/selectedTempo)
    this.setState({ tempo: interval })
  }

  render() {
    return (
      <div className="metronome-controls">
        <MetronomeControls
        onSlide={ this.handleTempoChange }
        tempo={ this.state.tempo }/>
        <Metronome tempo={this.state.tempo} />
      </div>
    )
  }
}

export default MetronomeContainer;

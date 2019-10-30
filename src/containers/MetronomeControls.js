import React from 'react'
import TempoSelect from '../components/TempoSelect.js'
import SoundSelect from '../components/SoundSelect.js'

const MetronomeControls = (props) => {

  return (
    <div>
      <h1>Controls</h1>
        <TempoSelect tempo={props.tempo} onSlide={props.onSlide}/>
        <SoundSelect />
    </div>
  )
}

export default MetronomeControls;

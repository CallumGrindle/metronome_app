import React from 'react'
import TempoSelect from '../components/TempoSelect.js'
import SoundSelect from '../components/SoundSelect.js'

const MetronomeControls = (props) => {
  return (
    <div>
      <h1>MetronomeControls</h1>
      <TempoSelect />
      <SoundSelect />
    </div>
  )
}

export default MetronomeControls;

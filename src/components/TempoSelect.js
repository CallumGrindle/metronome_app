import React from 'react';

const TempoSelect = (props) => {

  function handleChange(event) {
    props.onSlide(event.target.value)
  }

  const bpmTempo = Math.floor(60000 / props.tempo);

  return (
    <div>
      <p>{bpmTempo}</p>
      <input onChange={ handleChange }
        type="range"
        min="20"
        max="200"
        value={bpmTempo}/>
    </div>
  )
}

export default TempoSelect

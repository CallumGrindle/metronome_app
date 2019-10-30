import React from 'react';

const TempoSelect = (props) => {

  function handleChange(event) {
    props.onSlide(event.target.value)
  }

  return (
    <input onChange={ handleChange }
      type="range"
      min="1000"
      max="200000"/>
  )
}

export default TempoSelect

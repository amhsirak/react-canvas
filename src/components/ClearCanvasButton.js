import React from 'react'
import { useCanvas } from '../contexts/CanvasContext'

const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <button onClick={clearCanvas}>Clear Canvas</button>
}

export default ClearCanvasButton
import React from 'react'

const Canvas = () => {
    return (

        <canvas 
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        />
    )
}

export default Canvas

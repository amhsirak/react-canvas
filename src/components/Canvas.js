import React, {useRef, useEffect} from 'react'

const Canvas = () => {


    useEffect(() => {
        
    }, [])

    return (

        <canvas 
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref = {canvasRef}
        />
    )
}

export default Canvas

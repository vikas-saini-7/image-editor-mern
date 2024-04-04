import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const FabricCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
        width: canvasRef.current.parentElement.clientWidth, // Set canvas width to match container width
        height: canvasRef.current.parentElement.clientHeight, // Set canvas height as needed
        backgroundColor: 'lightgray' // Set canvas background color
    });

    // Example: Add a rectangle to canvas
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: 'red'
    });
    canvas.add(rect);
    // Example: Add text to canvas
    const text = new fabric.Text('Hello, Fabric!', {
        left: 50,
        top: 50,
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 'blue'
    });
    canvas.add(text);
  
  // Example: Handle mouse click event on canvas
  canvas.on('mouse:down', (event) => {
    console.log('Mouse clicked at:', event.e.clientX, event.e.clientY);
  });

    return () => {
      canvas.dispose(); // Dispose Fabric.js canvas on unmount
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FabricCanvas;

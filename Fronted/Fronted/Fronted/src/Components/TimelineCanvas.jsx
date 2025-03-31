import React, { useRef, useEffect, useState } from "react";

const TimelineCanvas = ({ timelineData, onHover, onClick }) => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCanvasWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";

    const blockWidth = width / (timelineData.length * 2); // Reduced block width
    const spacing = blockWidth;

    timelineData.forEach((point, index) => {
      const x = index * (blockWidth + spacing);
      const y = height - (point.value / 100) * height;
      ctx.fillRect(x, y, blockWidth, height - y);
    });
  }, [timelineData, canvasWidth]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const index = Math.floor((mouseX / canvas.width) * timelineData.length);
    if (timelineData[index]) {
      onHover(timelineData[index].date);
    }
  };

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const index = Math.floor((mouseX / canvas.width) * timelineData.length);
    if (timelineData[index]) {
      onClick(timelineData[index].date);
    }
  };

  return (
    <canvas
      id="wm-sparkline-canvas"
      ref={canvasRef}
      width={canvasWidth}
      height={65}
      className="w-full"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    />
  );
};

export default TimelineCanvas;

import React, { useEffect, useRef } from 'react';

const WaterAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let offset = 0;
        const waveSpeed = 0.04;
        const waveHeight = 20;
        const waveLength = 0.005;

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const render = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, canvas.height);

            for(let x = 0; x <= canvas.width; x++) {
                const y = canvas.height * 0.5 + Math.sin(x * waveLength + offset) * waveHeight;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(canvas.width, canvas.height);
            ctx.closePath();

            ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
            ctx.fill();

            offset += waveSpeed;

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '150px', overflow: 'hidden', position: 'relative' }}>
            <canvas ref={canvasRef} style={{ display: 'block' }} />
        </div>
    );
};

export default WaterAnimation;
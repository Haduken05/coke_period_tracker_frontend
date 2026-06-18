import React from 'react';
import './style/StyleGuide.css';

import WaterAnimation from '../components/WaterAnimation';

const StyleSandBox = () => {

    return(

        <div className="sandbox-container">
            <h1 className="sandbox-title">🌸 UI Component Sandbox</h1>
            
            {/* Dedicated test card for your purely programmatic water flow */}
            <section style={{ background: '#f0f0f0', borderRadius: '12px', overflow: 'hidden', marginTop: '20px' }}>
                <div style={{ padding: '20px' }}>
                    <h3>Procedural Water Wave Animation</h3>
                    <p style={{ color: '#636e72' }}>Pure JavaScript canvas render using Math.sin() loops.</p>
                </div>
                
                {/* Render the animation element directly */}
                <WaterAnimation />
            </section>

            <div className="input-wrapper">
      {/* 1. The SVG Icon positioned on the left */}
      <svg 
        className="input-icon" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      {/* 2. The Input Field */}
      <input 
        type="text" 
        className="custom-input" 
        placeholder="Search projects..." 
      />
    </div>


        </div>

        

    );

};

export default StyleSandBox;
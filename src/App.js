import React, { useState, useEffect } from 'react';
import { periodService } from './services/periodService';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {

    const testBackendConnection = async () => {
      try {
        console.log("Triggering API handshake with Spring Boot...");
        const data = await periodService.getUserProfile();
        console.log("Success! Received Profile from MySQL:", data);
        setProfile(data);
      } catch (error) {
        console.error("Connection Failed! Error:", error);
      }
    };

    testBackendConnection();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Period Tracker Test Dashboard</h1>
      <hr style={{ width: '50%', margin: '20px auto' }} />
      {profile ? (
        <div style={{ color: '#2ecc71', fontWeight: 'bold' }}>
          ✅ Backend Connected Successfully! <br />
          <span style={{ color: '#555', fontWeight: 'normal' }}>
            User ID: {profile.userId} | Default Cycle Length: {profile.defaultCycleLength} days
          </span>
        </div>
      ) : (
        <div style={{ color: '#e74c3c' }}>⏳ Connecting to Spring Boot server...</div>
      )}
    </div>
  );


}

export default App;
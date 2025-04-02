import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>오디오 녹음 애플리케이션</h1>
      <p>{isLoading ? '서버에 연결 중...' : message}</p>
      <button disabled>녹음 시작</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error:', error);
        setError('서버에 연결할 수 없습니다.');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>오디오 녹음 및 변환 애플리케이션</h1>
      {error ? 
        <p style={{ color: 'red' }}>{error}</p> : 
        <p>{message || '서버에 연결 중...'}</p>
      }
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, []);

  return (
    <div>
      <h1>Your IP Address</h1>
      <p>{ip}</p>
    </div>
  );
};

export default App;
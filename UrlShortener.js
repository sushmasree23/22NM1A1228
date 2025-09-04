import React, { useState } from 'react';
import { generateShortCode } from '../utils/shortener';

const UrlShortener = ({ onShorten }) => {
  const [originalUrl, setOriginalUrl] = useState('');

  const handleShorten = () => {
    if (!originalUrl.trim()) return;

    const code = generateShortCode();
    const shortUrl ='${window.location.origin}/#/${code}';
    const timestamp = new Date().toISOString();

    const urlData = {
      originalUrl,
      shortUrl,
      code,
      createdAt: timestamp,
      clicks: []
    };

    onShorten(urlData);
    setOriginalUrl('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Paste your URL here..."
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>
    </div>
  );
};

export default UrlShortener;
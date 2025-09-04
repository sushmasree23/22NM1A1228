import React, { useState, useEffect } from 'react';
import UrlShortener from './components/UrlShortener';
import UrlList from './components/UrlList';
import Analytics from './components/Analytics';

const LOCAL_STORAGE_KEY = 'shortenedUrls';

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setUrls(storedUrls);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(urls));
  }, [urls]);

  const handleShorten = (urlData) => {
    setUrls((prev) => [urlData, ...prev]);
  };

  const handleClickLink = (code) => {
    setUrls((prev) =>
      prev.map((url) =>
        url.code === code
          ? { ...url, clicks: [...url.clicks, new Date().toISOString()] }
          : url
      )
    );
  };

  return (
    <div className="App">
      <h1>🔗 URL Shortener</h1>
      <UrlShortener onShorten={handleShorten} />
      <UrlList urls={urls} onClickLink={handleClickLink} />
      <Analytics urls={urls} />
    </div>
  );
}

export default App;
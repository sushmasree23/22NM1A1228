import React from 'react';

const UrlList = ({ urls, onClickLink }) => {
  return (
    <div>
      <h2>Your Shortened URLs</h2>
      <ul>
        {urls.map((url) => (
          <li key={url.code}>
            <a
              href={url.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClickLink(url.code)}
            >
              {url.shortUrl}
            </a>
            <p>Clicks: {url.clicks.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
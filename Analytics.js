import React from 'react';

const Analytics = ({ urls }) => {
  return (
    <div>
      <h2>Analytics</h2>
      {urls.map((url) => (
        <div key={url.code}>
          <h4>{url.shortUrl}</h4>
          <p>Total Clicks: {url.clicks.length}</p>
          <ul>
            {url.clicks.map((click, index) => (
              <li key={index}>{new Date(click).toLocaleString()}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
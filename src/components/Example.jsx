import React, { useEffect, useState } from 'react';

function Example() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://platform.fatsecret.com/rest/server.api';
      const accessToken = '988360bfe1d04cf893e073335249206f'; // Replace with your actual access token

      const params = {
        method: 'food.get.v2',
        format: 'json'
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Assuming your data contains image URLs in an array field named 'images'
        setImages(data.images || []); // Update state with the fetched image URLs
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Images from API:</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Example;

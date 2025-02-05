const BASE_URL = 'http://localhost:1337';

fetch(`${BASE_URL}/api/test-users?populate=*`) 
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('All data:', JSON.stringify(data, null, 2));

    // Get the div
    const backendInfoDiv = document.getElementById('backend-info');

    // Check if data exists and populate the div
    if (data && data.data) {
      backendInfoDiv.innerHTML = `<pre>${JSON.stringify(data.data, null, 2)}</pre>`;
    } else {
      backendInfoDiv.innerHTML = 'No data available';
    }
  })
  .catch((error) => {
    console.error('Error fetching info', error);
    document.getElementById('backend-info').innerText = 'Failed to load backend data';
  });

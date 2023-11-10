export async function getSpotifyAccessToken() {
  const options = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        btoa(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  };

  try {
    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.access_token) {
      return data.access_token;
    } else {
      console.error('Token not found in response data');
      throw new Error('Token not found in response data');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

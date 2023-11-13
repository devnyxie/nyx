export async function getImgurAlbumImages() {
  const options = {
    url: `https://api.imgur.com/3/album/${process.env.IMGUR_ALBUM_HASH}/images`,
    headers: {
      Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
    },
  };
  try {
    const response = await fetch(options.url, {
      headers: options.headers,
    });
    if (!response.ok) {
      throw new Error('An error occured while fetching Imgur Album.');
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

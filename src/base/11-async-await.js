const API_KEY = 'pjZygRY64aJ1Fsdp1JPJkKFTOA3wv8rA';
const URL = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const getGIF = async () => {
  try {
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    return new Error(`GIF not found`);
  }
};

import axios from 'axios';

const generateJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    };
  
    const response = await axios.get('https://icanhazdadjoke.com', config);
    const data = await response.data;
    return data;
  } catch (error) {
    return undefined;
  }
  
}

export default generateJoke;
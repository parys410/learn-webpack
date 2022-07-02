
import generateJoke from "./generateJoke";
import '../styles/main.scss';
import laughing from '../assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;


const getJoke = async () => {
  const joke = await generateJoke();
  const jokeHtml = document.getElementById('joke');
  jokeHtml.textContent = joke.joke;
}
getJoke();

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', getJoke)
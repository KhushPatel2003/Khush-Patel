import { v4 as uuidv4 } from 'uuid';
import GeeseSpotter from '../images/GeeseSpotter.png';
import MoMoney from '../images/MoMoney.png';
import EngHack from '../images/EngHack.png';
import Calcu from '../images/Calc.png';
import Weather from '../images/Weather.png';
import ece198 from '../images/198.png';
import SiteScope from '../images/SiteScope.png';

const projects = [
  {
    id: uuidv4(),
    name: 'SiteScope',
    desc: (
      <a href="https://sitescope.tech">
        During my internship at SiteScope the team assigned me with the task of
        creating a landing page for to inform of their newly founded startup.
        The landing page was made using Read.js, HTML and CSS. The landing page
        also has a working contact page. You can find it here.
      </a>
    ),
    img: SiteScope,
  },
  {
    id: uuidv4(),
    name: 'Mo Money',
    desc: (
      <a href="https://github.com/KhushPatel2003">
        Calculating ACB gain and losses are incredibly important to finial
        institution such as the CRA. Thus but creating Mo Money, which generates
        documents for tax for the Canadian Revenue Agency (CRA). The program
        utilizes Classes, LinkedLists and dynamic memory allocation to calculate
        the gain/lose of ETFs. The program also sorts all transitions according
        to date.
      </a>
    ),
    img: MoMoney,
  },
  {
    id: uuidv4(),
    name: 'Geese Spotter',
    desc: (
      <a href="https://github.com/KhushPatel2003">
        Geese are part of Waterloo life! Everyone knows to not get too close to
        a goose, in particular a mother goose with her goslings. Geese Spotter
        is inspired off minesweeper where the user is presented with a board
        filled with “geese” (bombs) and the objective is to correctly find out
        where all the geese are at. The program was developed through bit shift
        manipulation and various helper functions.
      </a>
    ),
    img: GeeseSpotter,
  },
  {
    id: uuidv4(),
    name: 'Weather Discord Bot',
    desc: (
      <a href="https://github.com/KhushPatel2003">
        Weather Discord Bot was made using the OpenWeatherAPI and Discord.py.
        The user can simply asks the bot about the weather in a certain city by
        prefixing the city name with “!“. The main objective of the bot was to
        learn how to use and implement APIs.
      </a>
    ),
    img: Weather,
  },
  {
    id: uuidv4(),
    name: 'Binary Riddle',
    desc: (
      <a href="https://github.com/KhushPatel2003">
        “Binary Riddle”, a twist on one of the many escape room puzzles designed
        to test individuals problem-solving skills. The program has 4 keys for
        the user to interact with, keys “1”, “0”, “delete” and “enter”. The user
        will use the 1 and 0 keys to enter the desired binary digits to solve
        the riddles, the delete key to modify the answer, and lastly, the enter
        key to check if their answer to the problem is correct. Binary Riddle
        was authored using classes, the Nucleo-64 STM32 Board, and 2D arrays.
      </a>
    ),
    img: ece198,
  },
  {
    id: uuidv4(),
    name: 'EngHack',
    desc: (
      <a href="https://khushpatel2003.github.io/MyFitnessLog/">
        During the 3 day hackathon me and my team collaborated to make a fitness
        tracking program called “My Fitness Log”. Throughout the 3 days we
        created a python application, a sigma design for our website to promote
        the product, and lastly a functioning website to display our finished
        product.
      </a>
    ),
    img: EngHack,
  },
  {
    id: uuidv4(),
    name: 'Calculator Discord Bot',
    desc: (
      <a href="https://github.com/KhushPatel2003">
        Calculator Discord Bot was made using Discord.py. The bot can do simple
        calculations ranging from addition to cubing a number. The user can call
        the bot by prefixing the calculation with !math_”type of calculation”.
      </a>
    ),
    img: Calcu,
  },
];

export default projects;

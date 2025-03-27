const quotes = [
  {
    quote: "Wer kaempft, kann verlieren, Wer nicht kaempft, hat schon verloren.",
    author: "Bertolt Brecht",
  },
  {
    quote: "Wege entstehen dadurch, dass man sie geht.",
    author: "Franz Kafka", 
  },
  {
    quote: "Hindernisse und Schwierigkeiten sind Stufen, auf denen wir in die Hoehe steigen.",
    author: "Friedrich Nietzshe",
  },
  {
    quote: "Auf einfache Wege schickt man nur die Schwachen.",
    author: "Hermann Hesse",
  },
  {
    quote: "Es ist nicht genug zu wollen. man muss auch tun.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Kepp your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "To travel is to live.",
    author: "Hans Christian Anderson",
  },
  {
    quote: "Adventure is worthwhile in itself.",
    author: "Amilia Earhart",
  },
  {
    quote: "With age, comes wisdom. With travel, comes understanding.",
    author: "Sandra Lake",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "Lilly Pulitzer",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
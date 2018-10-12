// FSJS - Random Quote Generator

// Created an array of quote objects and stored it in a variable
var quotes = [
  {
    quote : 'Logic will get you from A to Z; imagination will take you everywhere.',
    source : 'Albert Einstein',
    category: 'History'
  },
  {
    quote : 'Do or do not there is no try.',
    source : 'Yoda',
    citation : 'Star Wars: Episode V The Empire Strikes Back',
    year : '1980',
    category: 'Movie'
  },
  {
    quote : 'Blood, sweat and respect. First two you give, last one you earn.',
    source : 'Dwayne Johnson',
    category: 'Celebrity'
  },
  {
    quote : 'If you run into a wall, don\'t turn around and give up. Figure out how to climb it.',
    source : 'Michael Jordan',
    category: 'Celebrity'
  },
  {
    quote : 'The time is always right to do what is right',
    source : 'Martin Luther King Jr',
    category: 'History'
  },
  {
    quote : 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
    source : 'Dr. Seuss',
    citation : 'Oh, the places you will go!',
    year : '1990',
    category: 'Book'
  }
];

// This function will use a random number generator to return a random object from the quotes array.
function getRandomQuote(array) {
  var randomQuote = quotes[Math.floor(Math.random(array) * quotes.length)];
  return randomQuote;
}

// This function creates quotes with strings depending on what objects the array has.
function printQuote() {
  var result = getRandomQuote(quotes);
  var quoteString = `<p class='quote'> ${result.quote} </p>`;
  quoteString += `<p class='source'> ${result.source}`;
  if (result.citation !== undefined) {
    quoteString += `<span class='citation'> ${result.citation} </span>`;
  } if (result.year !== undefined) {
    quoteString += `<span class='year'> ${result.year}`;
  }
  quoteString += `<span class='year'> ${result.category}</span></p>`;
  /* This line of code will grab the body element from styles.css and
  change its background color to a random background color when button is clicked*/
  document.body.style.background = '#' + Math.floor(Math.random() * 1000);
  document.getElementById('quote-box').innerHTML = quoteString;
}
// This will load in a new quote every 20 sec
setInterval(printQuote, 20000);
/*When someone clicks the button, this line of code will
 load in a random quote using the printQuote function.*/
document.getElementById('loadQuote').addEventListener('click', printQuote, false);

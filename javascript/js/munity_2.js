var randomNumber = Math.floor(Math.random() * 6 );

var quotes = [
    {quote: "A man away from home need feel no shame.", source: "Mozart"},
    {quote: "Don't train alone - it only embeds your errors.", source: "Giralt of Rivia", citation: "The Witcher 3"},
    {quote: "Perseverance is failing 19 times and succeeding the 20th.", source: "Julie Andrews"},
    {quote: "That's the thing that you see about great business owners..is this...undying optimism. They're realistic, but they're optimistic. Ooh, that rhymes!", source: "Robert Herjavec", citation: "Shark Tank"},
    {quote: "You test people under pressure. And under pressure, he was a dud.", source: "Donald J. Trump", citation: "The Apprentice"},
    {quote: "Why are dingleberries brown? That's just the way shit is.", source: "Abraham", citation: "The Walking Dead"}
    ];

function getRandomQuote () {
return quotes[randomNumber].quote + " by " + quotes[randomNumber].source;
};

console.log(getRandomQuote());
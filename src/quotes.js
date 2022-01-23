const quotes = [
    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Don't dream, Be it.",
        author: "Tim Curry",
    },
    {
        quote: "No pain, No gain.",
        author: "Benjamin Franklin",
    },
    {
        quote: "When they go low, we go high.",
        author: "Michelle Obama",
    },
    {
        quote: "I was never less along than when by myself.",
        author: "Edward Gibbon",
    },
    {
        quote: "The will of man is his happiness.",
        author: "Friedrich von schiller",
    },
    {
        quote: "Only I can change my life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "This too shall pass away.",
        author: "Abaraham Lincoln",
    },
    {
        quote: "It is not length of life, But depth of life.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Happiness is a warm puppy.",
        author: "Charles M. Schulz",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `${todaysQuote.quote}\n`;
author.innerText = `- ${todaysQuote.author}-`;
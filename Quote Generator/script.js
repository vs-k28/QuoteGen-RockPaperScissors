let quotelist = [
    {
    quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    author: "Stephen Chbosky"
    },
    {
    quote: "And now that you don't have to be perfect, you can be good.",
    author: "John Steinbeck"
    },
    {
    quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    author: "J.K. Rowling"
    },
    {
    quote: "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
    author: "Ray Bradbury"
    },
    {
    quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde"
    },
    {
    quote: "Don't cry because it's over. Smile because it happened.",
    author: "Dr. Seuss"
    },
    {
    quote: "Everything is hard before it is easy.",
    author: "Johann Wolfgang von Goethe"
    },
    {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein"
    },
    {
    quote: "Don't let your happiness depend on something you may lose.",
    author: "C.S. Lewis"
    },
    {
    quote: "We are all broken, that's how the light gets in." ,
    author: "Ernest Hemingway"
    },
    {
    quote: "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
    author: "Stephen King"
    },
    {
    quote: "It hurt because it mattered.",
    author: "John Green"
    },
    {
    quote: "Some of us think holding on makes us strong; but sometimes it is letting go.",
    author: "Herman Hesse"
    },
    {
    quote: "Never look back unless you are planning to go that way.",
    author: "Henry David Thoreau"
    },
    {
    quote: "We rise by lifting others.",
    author: "Robert Ingersoll"
    },
    {
    quote: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson"
    },
    {
    quote: "There are chords in the hearts of the most reckless which cannot be touched without emotion.",
    author: "Edgar Allen Poe"
    },
    {
    quote: "It takes a great deal of courage to see the world in all its tainted glory, and still love it.",
    author: "​Oscar Wilde"
    },
    {
    quote: "“And in the end, we were all just humans... drunk on the idea that love, only love, could heal our brokenness.",
    author: "F. Scott Fitzgerald"
    },
    {
    quote: "Nothing can dim the light that shines from within.",
    author: "Maya Angelou"
    }
]

let next_el = document.getElementById("next");
let quote_el = document.getElementById("quotecont");
let author_el = document.getElementById("author");
let tweet_el = document.getElementById("tweet");
let web_el = document.getElementById("web");

let date_el = document.getElementById("date");

document.addEventListener("DOMContentLoaded", function () {
    var curr_date = new Date();
    var formattedDate = curr_date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
    date_el.textContent = formattedDate;
}
);

next_el.addEventListener('click', () => {
    let ran_num = Math.ceil(Math.random() * quotelist.length);
    quote_el.textContent = quotelist[ran_num].quote;
    author_el.textContent = quotelist[ran_num].author;
})

tweet_el.addEventListener('click', () => {
    var tweet_quote = document.getElementById('quotecont').innerText;
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet_quote);
    window.open(tweetUrl);
})

web_el.addEventListener('click', async () => {
    let response = await fetch('u1fZXz+7NW+pYcgghgHm0A==uQm9gOaIl09bAwcS');
    let quote = await response.json();
    quote_el.innerText = quote.content;
    author_el.innerText = quote.author;
})

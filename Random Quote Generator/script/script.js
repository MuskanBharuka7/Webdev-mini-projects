let quoteText = document.getElementById("quoteText");
let authorName = document.getElementById("authorName");
let button = document.getElementById("btn");

function quoteGenerator() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
    });
}
window.onload = quoteGenerator;

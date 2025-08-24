import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [fade, setFade] = useState(true);

  const fetchQuote = async () => {
    try {
      setFade(false);
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setTimeout(() => {
        setQuote(data.quote);
        setAuthor(data.author);
        setFade(true);
      }, 300);
      const colors = [
        "#f6d6d6",
        "#d6eaf6",
        "#1DA1F2",
        "#e8f6d6",
        "#f6e6d6",
        "#d6f6ef",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    } catch (error) {
      console.error(error);
      setQuote("Error fetching quote");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
    document.body.style.backgroundColor = "#1DA1F2";
  }, []);

  return (
    <>
      <div id="quote-box">
        <div id="text" className={`fade ${fade ? "" : "hidden"}`}>
          <img src="../public/quote-page.svg" id="quote-img" />
          <span>{quote}</span>
        </div>
        <div id="author" className={`fade ${fade ? "" : "hidden"}`}>
          <p id="author-text">- {author}</p>
        </div>
        <div id="new-quote" className="flex">
          <div title="Post this quote on twitter">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&text='${quote}' ${author}`}
              id="tweet-quote"
              target="_blank"
            >
              <img src="../public/twitter.svg" alt="twitter" />
            </a>
          </div>
          <button onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </>
  );
}

export default App;

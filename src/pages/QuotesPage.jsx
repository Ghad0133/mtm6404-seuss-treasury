import React, { useEffect, useState } from "react";

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      <h1>Random Quotes</h1>
      {quotes.map((quote) => (
        <p key={quote.id}>
          "{quote.text}" - {quote.book.title}
        </p>
      ))}
    </div>
  );
}

export default QuotesPage;

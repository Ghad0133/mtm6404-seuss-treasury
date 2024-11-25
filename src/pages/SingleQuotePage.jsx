import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleQuotePage() {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/quotes/${id}`)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, [id]);

  if (!quote) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Quote</h1>
      <p>"{quote.text}" - {quote.book.title}</p>
    </div>
  );
}

export default SingleQuotePage;

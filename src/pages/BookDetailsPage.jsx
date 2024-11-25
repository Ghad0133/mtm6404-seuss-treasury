import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetailsPage() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch the specific book details
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book details:", error));

    // Fetch quotes for the specific book
    fetch(`https://seussology.info/api/books/${id}/quotes`)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching book quotes:", error));
  }, [id]);

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img
        src={book.image}
        alt={book.title}
        style={{ width: "200px", height: "300px", objectFit: "cover" }}
      />
      <p><strong>Year Published:</strong> {book.year_published}</p>
      <p>{book.description}</p>

      {/* Display related quotes */}
      <h2>Quotes from this book</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id} style={{ marginBottom: "10px" }}>
            "{quote.text}"
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetailsPage;

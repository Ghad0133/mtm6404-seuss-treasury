import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {books.map((book) => (
          <div key={book.id} style={{ textAlign: "center" }}>
            <Link to={`/book/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
              />
            </Link>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;

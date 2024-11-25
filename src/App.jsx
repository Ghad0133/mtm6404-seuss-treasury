import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import QuotesPage from "./pages/QuotesPage";
import SingleQuotePage from "./pages/SingleQuotePage";

function App() {
  return (
    <Router>
      <div>
        {}
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>

        {}
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/quote/:id" element={<SingleQuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

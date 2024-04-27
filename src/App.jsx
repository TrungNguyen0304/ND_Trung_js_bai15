import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState, useEffect, useContext } from "react";
import { BookContext } from "./context/book";
import { fetchBooks } from "./api";
import "./App.css";

const App = () => {
  const { books, currentPage, totalBooks, booksPerPage, paginate, onCreate, onEdit, onDelete } = useContext(BookContext);
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const [searchTerm] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooksData = await fetchBooks();
      setFetchedBooks(fetchedBooksData);
    };
    fetchData();
  }, []);

  const filteredBooks = fetchedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="container-app">
        <h1 className="text">READING BOOK  <span>
            Trang {currentPage} trên {totalPages}
          </span></h1>
        <div className="window">
          <BookList books={filteredBooks} onDelete={onDelete} onEdit={onEdit} />
        </div>
        <div className="pagination-info">
          {/* Hiển thị số trang */}
          <p>Số trang: {currentPage} / {totalPages}</p>
          {/* Hiển thị các nút trang */}
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <BookCreate onCreate={onCreate} />
    </div>
  );
};

export default App;

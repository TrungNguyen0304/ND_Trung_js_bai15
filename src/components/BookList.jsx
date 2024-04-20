import BookShow from "./BookShow";
import { BookContext } from "../context/book";
import {useContext} from "react"

const BookList = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="book-list">
            {books.map(book => (
            <BookShow book={book} />
            ))}
        </div>
    );
};

export default BookList;
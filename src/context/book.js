import { createContext, useEffect } from "react";

import { FetchBooks,CreateBook,UpdateBook,DeleteBook } from "../api";
import { useState } from "react";

const BookContext = createContext();


const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const handleCreate = async(term) => {
        const book = await CreateBook(term);
        if (book) setBooks([...books, book]);
    };
    
    
    const handleUpdate = async (id, term) => {
        console.log({ id, term });
        const book = await UpdateBook(id, term);
        setBooks(
            books.map((item) => item.id === book.id? book: item)
        );
    };


    const handleDelete = async (id) => {
        const book = await DeleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }
    
    useEffect(async () => { 
        const tams = await FetchBooks();
        console.log(tams);
        setBooks(tams);
    }, []);

    const valueShare = {
        onCreate: handleCreate,
        onEdit: handleUpdate,
        onDelete: handleDelete,
        useEffect,
        books
    };

    return <BookContext.Provider value={valueShare}>{children}</BookContext.Provider>;
};
export { BookContext, Provider };



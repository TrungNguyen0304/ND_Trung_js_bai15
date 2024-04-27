import { useEffect,useState } from "react";
import { fetchBooks } from "../api";

const useBookContext = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const data = await fetchBooks();
                setBooks(data);
        };
        fetchData();
    }, []);

    return books;
};

export default useBookContext;


import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

import useBookContext from "./hook/useBookcontext";

import "./App.css";

const App = () => {
    const books = useBookContext();

    return (
        
            <div className="wrapper">
                <div className="container">
                    <h1>Reading Books</h1>
                    <div>
                        <BookList  books={books} />
                    </div>
                </div>
                <BookCreate />
            </div>
       
    );
};

export default App;


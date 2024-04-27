import BookEdit from "./BookEdit";
import { BookContext } from "../context/book";
import { useContext, useState } from "react";


const BookShow = ({ book}) => {
    const {onEdit} = useContext(BookContext); // lay onEdit cua useContext
    const {onDelete} = useContext(BookContext); // lay onEdit cua useContext
    console.log(book);
    const image = `http://picsum.photos/seed/${book.id}/200/300`;
    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = (id, term) => {
        onEdit(id, term);
        setIsEdit(false);
    };
    const count = useContext(BookContext);
    return (
        <div className="item">
            <div className="image">
                <img src={image} alt="" />
            </div>
            {!isEdit && (
                <>
                    <h2>{book.title}</h2>
                    <p>{book.des}</p>
                </>
            )}
            {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
            {!isEdit && (
                <>
                    <button className="delete" onClick={() => onDelete(book.id)}>delete</button>
                    <button className="edit" onClick={() => setIsEdit(!isEdit)}>edit</button>
                </>
            )}
        </div>
    );
};  

export default BookShow;

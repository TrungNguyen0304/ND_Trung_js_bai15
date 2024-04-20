import { useState, useEffect } from "react";


const BookEdit = ({ book, onEdit }) => {
    // Đảm bảo object book hợp lệ trước khi thiết lập trạng thái ban đầu
    const [title, setTitle] = useState(book ? book.title : "");
    const [des, setDes] = useState(book ? book.des : "");
    const [originalTitle, setOriginalTitle] = useState(book ? book.title : "");
    const [originalDes, setOriginalDes] = useState(book ? book.des : "");

    useEffect(() => {
        // Cập nhật state nếu prop book thay đổi
        if (book) {
            setTitle(book.title);
            setDes(book.des);
            setOriginalTitle(book.title);
            setOriginalDes(book.des);
        }
    }, [book]);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (typeof onEdit === "function") {
            onEdit(book.id, {
                title,
                des,
            });
        } else {
            console.error("onEdit không phải là một hàm");
        }
    };

    const handleCancel = () => {
        // Đặt lại title và des về giá trị ban đầu
        setTitle(originalTitle);
        setDes(originalDes);
    };


    return (
        <div className="container1">
            <h3>Add a Edit</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> </label>
                <input onChange={handleChangeTitle} type="text" id="title" name="title" value={title} />
                <label htmlFor="des"> </label>
                <input onChange={handleChangeDes} type="text" id="des" name="des" value={des} />
                <button className="Edit1" onClick={handleCancel}>Cancel</button>
                <input type="submit" value="Edit" />
            </form>
        </div>
    );
};


export default BookEdit;


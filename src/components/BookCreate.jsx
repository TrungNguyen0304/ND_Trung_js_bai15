import React, { useState, useContext } from "react";
import { BookContext } from "../context/book";

const BookCreate = () => {
    const [title, setTitle] = useState("title");
    const [des, setDes] = useState("des");
    const { onCreate} = useContext(BookContext); 

    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const reps = await onCreate({
          title,
          des,
        });
      
      };
      

    return (
        <div className="container">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label className="b1" htmlFor="title">Title</label>
                <input className="b2"
                    onChange={handleChangeTitle}
                    type="text"
                    id="title"
                    value={title}
                />
                <label htmlFor="des">Description</label>
                <input className="b3" onChange={handleChangeDes} type="text" id="des" value={des} />
                <input type="submit" value="Create!" />
            </form>
        </div>
    );
};

export default BookCreate;


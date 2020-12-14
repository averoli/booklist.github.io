import React from "react";
import style from "./BookItem.module.css"




let BookItem = (props) => {
    const book = props.book;
    const editBook=props.editBook;
    const deleteBook=props.deleteBook;


    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.description}</td>
            <td>{book.published}</td>
            <button  className={style.button} onClick={()=>{editBook(book)}}>update</button>
            <button className={style.button} onClick={()=>{deleteBook(book.id)}}>delete</button>
        </tr>
    )
}

export default BookItem;
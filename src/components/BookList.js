import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../actions";
import BookItem from "./BookItem";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import style from "./BookList.module.css"


let BookList = ()=>{
    const books = useSelector(state => state.book);
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(true);
    const [book, setBook] = useState();

    useEffect(() => {
        dispatch(actions.getAllBooks())
    }, [])

    const editBook = (book)=>{
        setEditing(true);
        setBook(book);
        setEditing(false);
        console.log(book.id)
    }

    // const updateBook=(id, book)=>{
    //     dispatch(actions.updateBook(id, book));
    //     setEditing(true);
    // }
    const deleteBook = (id) =>{
        dispatch(actions.deleteBook(id))
    }
    return(
        <div className={style.grid}>

            <div className={style.header}>
                <h1>Books-list App</h1>
            </div>

            <div className={style.books}>
                <img src='https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327_960_720.jpg' alt='books'/>
            </div>

            <div>
                {editing ? <AddBook />: <UpdateBook book={book} setEditing={setEditing}/>}
            </div>

            <div className={style.list}>
                <h2>View books</h2>
                <table className={style.list}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Published</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(book => {
                        return (
                            <BookItem book={book} key={book.id} editBook={editBook} deleteBook={deleteBook} />
                        )})}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BookList;
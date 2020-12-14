import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../actions';
import style from './AddBook.module.css';

const UpdateBook = (props) => {



    const [book, setBook] = useState(props.book);
    const dispatch = useDispatch();

    useEffect(() => {
        setBook(props.book)
    }, [props])

    const handleChange = (e) => {
        const {name, value} = e.target
        setBook({
            ...book,[name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //this.props.addBook(book);
        dispatch(actions.updateBook(book.id, book));
        props.setEditing(true);
    }

//    render() {
    return (
        <div className={style.form}>
            <h2>Update book</h2>
            <form onSubmit={handleSubmit} className={style.grid}>
                Title: <input name="title" type="text" value={book.title} onChange={handleChange}/>
                Author: <input name="author" type="text" value={book.author} onChange={handleChange}/>
                Description: <input name="description" type="text" value={book.description} onChange={handleChange}/>
                Published: <input name="published" type="text" value={book.published} onChange={handleChange}/>
                <input type="submit" className={style.button}/>
            </form>
        </div>
    )
    //  }
}
export default UpdateBook;
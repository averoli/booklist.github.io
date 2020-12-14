import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import style from './AddBook.module.css';
import * as actions from '../actions';

const AddBook = () => {
    const initialState = {
        "title": "",
        "author":"",
        "description":"",
        "published": 0
    }
    const [book, setBook] = useState(initialState);

    const dispatch = useDispatch();


    const handleChange = (e) => {
        // this.setState({username: event.target.value});
        // this.setState({[nam]: val});
        const {name, value} = e.target
        setBook({
            ...book,[name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //this.props.addBook(book);
        dispatch(actions.createBook(book));
        setBook(initialState);
    }

    return (
        <div className={style.form}>
            <h2>Add book</h2>
            <form onSubmit={handleSubmit} className={style.grid}>
                Title: <input name="title" type="text" value={book.title} onChange={handleChange}/>
                Author: <input name="author" type="text" value={book.author} onChange={handleChange}/>
                Description: <input name="description" type="text" value={book.description} onChange={handleChange}/>
                Published: <input name="published" type="text" value={book.published} onChange={handleChange}/>
                <input type="submit" className={style.button}/>
            </form>
        </div>
    )

}

export default AddBook;
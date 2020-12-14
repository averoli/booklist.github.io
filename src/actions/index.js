import axios from 'axios';
const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}

export const delBook = (id) => {
    return {
        type: 'DELETE_BOOK',
        id: id
    }
}

export const getAll = (booksList = []) => {
    return {
        type: 'GET_ALL',
        payload: booksList
    }
}

export const getAllBooks = () => (dispatch) => {
    axios.get(`${url}`).then((response) => {
        dispatch(getAll(response.data))
    }).catch((msg) => {
        throw new Error(msg);
    })
}


export const createBook = (book) => (dispatch) => {
    axios.post(`${url}/create`, book).then((response)=> {
        dispatch(addBook(response.data));
    })
}

function updateBookSuccess(id, data) {
    return {
        type: "UPDATE_BOOK",
        data: data,
        id: id
    };
}

export const updateBook = (id, book) => {
    return (dispatch) => {
        return axios.put(`${url}/${id}`, book)
            .then(response => {
                dispatch(updateBookSuccess(id, response.data));
            });
    }
}

export const deleteBook = (id) => (dispatch) => {
    axios.delete(`${url}/${id}`).then((response)=> {
        dispatch(delBook(id));
    })
}
export const addFullBook = (book) => {
    return {
        type: 'ONE_ADD_BOOK',
        payload: book
    }
}

export const getFullBook = (bookId) => {
    return {
        type: 'ONE_GET_BOOK',
        id: bookId
    }
}

export const getAsyncFullBook = (bookId) => (dispatch) => {
    axios.get(`${url}/${bookId}`).then((response) => {
        dispatch(addFullBook(response.data))
    }).catch((msg) => {
        throw new Error(msg);
    })
}
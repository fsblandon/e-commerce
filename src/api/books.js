import axios from 'axios';

const massage = (book) => ({
    ID: book.ID,
    title: book.title,
    author: book.author,
    content: book.content,
    cover: book.cover
  });

const URL = 'http://www.etnassoft.com/';

export const getBooks = () =>
  axios.get(URL + `api/v1/get/?category=libros_programacion`, 
  {
    headers: {
        'Access-Control-Allow-Origin': true,
    }
  })
    .then((response) => {
        console.log(response);
        response.data.results.map((book) => massage(book))
    });
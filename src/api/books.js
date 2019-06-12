import axios from 'axios';

const massage = (book) => ({
    ID: book.ID,
    title: book.title,
    author: book.author,
    content: book.content,
    cover: book.cover
  });

const URL = `http://www.etnassoft.com/`;

export const getBooks = () => {
    axios.defaults.headers = 'Access-Control-Allow-Origin';
    return axios.get(URL + `api/v1/get/?category=libros_programacion`,
    {
      headers: { 
        'x-apikey': '59a7ad19f5a9fa0808f11931',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
    .then((response) => {
        console.log(response);
        response.data.results.map(
          (book) => massage(book)
        )
    });
}
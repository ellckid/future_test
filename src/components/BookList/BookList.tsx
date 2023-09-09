import { bookInfo } from '../../types/types'
import classes from './BookList.module.css'
import Book from '../book/Book'
import _ from 'lodash'
import Pagination from '../pagination/Pagination'


type BookListProps = {
    books: bookInfo[]
    booksCountArray: Array<number>
    searchBooks: Function
    booksTotalCount: number

}
function BookList(props: BookListProps) {

    return (
        <div className={classes.books_container}>

            {
                _.map(props.books, (item, id) => (
                    <Book key={id} name={item.volumeInfo.title} author={item.volumeInfo.authors} genre={item.volumeInfo.categories} imgURL={item.volumeInfo.imageLinks?.thumbnail}></Book >
                ))
            }

            {props.booksTotalCount > 0 && <span className={classes.books__count}><span className={classes.books__count + ' ' + classes.black}>{props.booksTotalCount}</span> результатов</span>}

            <Pagination paginationArray={props.booksCountArray} updateFunction={props.searchBooks} ></Pagination>
        </div>

    )
}

export default BookList

import classes from './searchPage.module.css'
import { bookInfo } from '../../types/types'
import Search from '../../components/search/Search'
import BookList from '../../components/BookList/BookList'

import { useContext, useState } from 'react'
import { context } from '../../main'
import { usePagination } from '../../hooks/usePagination'
import Loader from '../../components/Loader/loader'

import { observer } from 'mobx-react-lite'

function SearchPage() {
    const { store } = useContext(context)
    const [books, setBooks] = useState<bookInfo[]>([])
    const paginationArray: number[] = usePagination(30, store.booksTotalCount)


    async function searchBooks(searchString: string, pageNumber: number, pageSize: number, sortingMethod: string, category: string) {
        await store.getBookList(searchString, pageNumber, pageSize, sortingMethod, category)
        setBooks(store.books)
    }
    return (
        <section className={classes.searchPage_container}>
            <Search searchBooks={searchBooks}></Search>
            {store.isLoading && <Loader></Loader>}
            {store.booksTotalCount == -1 && <h1 className={classes.notFound}>По вашему запросу ничего не найдено</h1>}
            <BookList books={books} booksTotalCount={paginationArray} searchBooks={searchBooks} />
        </section >
    )
}

export default observer(SearchPage)




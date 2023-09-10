import classes from '../bookPage/bookPage.module.css'
import { bookInfo } from '../../types/types'
import { useContext, useEffect, useState } from 'react'
import { context } from '../../main'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/loader'
import _ from 'lodash'

import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

function BookPage() {
    const { store } = useContext(context)
    const [book, setBook] = useState<bookInfo>()
    const id = useParams()

    async function searchBook(id: {}) {
        let param
        _.forEach(id, (el) => {
            param = el
        })
        const res = await store.getBook(param)
        setBook(res)
    }

    useEffect(() => {
        searchBook(id)
    }, [])

    if (store.isLoading) {
        return <Loader></Loader>
    }

    return (
        <section className={classes.bookPage__container}>
            <article className={classes.article}>
                <img className={classes.article__img} src={book?.volumeInfo.imageLinks?.thumbnail} alt='Обложка книги'></img>
                <div className={classes.article__headings}>
                    <h1 className={classes.article_h1}>{book?.volumeInfo.title}</h1>
                    <h2 className={classes.article_h2}>{book?.volumeInfo.authors}</h2>
                    <h3 className={classes.article_h3}>{book?.volumeInfo.categories}</h3>
                    <h3 className={classes.article_h3}>{book?.volumeInfo.description}</h3>
                    <a className={classes.article_link} href={book?.volumeInfo.canonicalVolumeLink}>Открыть в Google Books</a>
                </div>
            </article>
            <Link className={classes.back_container} to='/'>
                <img src='/arrow.svg'></img>
                <a className={classes.article_link}>Назад</a>
            </Link>
        </section >
    )
}

export default observer(BookPage)


import classes from './Book.module.css'
import { useNavigate } from 'react-router-dom'

type bookProps = {
    imgURL: string | undefined
    name: string | undefined
    author: Array<string> | undefined
    genre: Array<string> | undefined
    id: string
}
function Book(props: bookProps) {
    const router = useNavigate()

    return (
        <article className={classes.book_article}>
            <a onClick={() => router('/' + props.id)}>
                <img className={classes.book_article__img} src={props.imgURL}></img>
            </a>

            <h3 className={classes.book_article__h3}>{props.name}</h3>
            <h4 className={classes.book_article__h3}>{props.author}</h4>
            <h5 className={classes.book_article__h3}>{props.genre}</h5>
        </article>
    )
}

export default Book

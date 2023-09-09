import classes from './Book.module.css'

type bookProps = {
    imgURL: string | undefined
    name: string | undefined
    author: Array<string> | undefined
    genre: Array<string> | undefined
}
function Book(props: bookProps) {
    return (
        <article className={classes.book_article}>
            <img className={classes.book_article__img} src={props.imgURL}></img>
            <h3 className={classes.book_article__h3}>{props.name}</h3>
            <h4 className={classes.book_article__h3}>{props.author}</h4>
            <h5 className={classes.book_article__h3}>{props.genre}</h5>
        </article>
    )
}

export default Book

import { useState } from 'react'
import classes from './Search.module.css'

type searchProps = {
    searchBooks: Function
}
function Search(props: searchProps) {
    const [searchString, setSearchString] = useState('')
    const [category, setCategory] = useState(' ')
    const [orderBy, setOrderBy] = useState('RELEVANCE')
    return (
        <form className={classes.search} id='searchForm' onSubmit={(e) => {
            e.preventDefault()
            if (searchString.trim())
                props.searchBooks(searchString, 1, 30, orderBy, category)
        }}>
            <div className={classes.search__upperline}>
                <div className={classes.input__container}>
                    <img className={classes.input__img} src='/future_test/Search_icon.svg'></img>
                    <input className={classes.search__input} type='text' placeholder='Поиск...' value={searchString} onChange={e => setSearchString(e.target.value)} />
                </div>

                <button className={classes.search__button} type='submit'> Поиск</button>
            </div>
            <div className={classes.search__lowerline}>
                <div className={classes.select__container}>
                    <img className={classes.select__img} src='/future_test/select_icon.svg'></img>
                    <select className={classes.search__select} form="searchForm" onChange={e => setCategory(e.target.value)}>
                        <option defaultValue=' '>Все</option>
                        <option value='Art'>Искусство</option>
                        <option value='Biography'>Биографии</option>
                        <option value='Business'>Бизнес</option>
                        <option value='Comics'>Комиксы</option>
                        <option value='Computers'>Компьютеры</option>
                        <option value='Cooking'>Готовка</option>
                        <option value='Fiction'>Художественная литература</option>
                        <option value='Gardening'>Садовничество</option>
                        <option value='Health'>Здоровье</option>
                        <option value='Medical'>Медицина</option>
                        <option value='Nature'>Природа</option>
                        <option value='Poetry'>Поэзия</option>
                        <option value='Science'>Наука</option>
                    </select>
                </div>
                <div className={classes.select__container}>
                    <img className={classes.select__img} src='/future_test/select_icon.svg'></img>
                    <select className={classes.search__select} form="searchForm" required onChange={e => setOrderBy(e.target.value)} >
                        <option defaultValue='RELEVANSE'>По релевантности</option>
                        <option value='NEWEST'>По новизне</option>
                    </select>
                </div>

            </div>

        </form >
    )
}

export default Search

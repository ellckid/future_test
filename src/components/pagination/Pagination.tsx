import { useContext, useState } from 'react'
import classes from './Pagination.module.css'

import _ from 'lodash'
import { usePagination } from '../../hooks/usePagination'
import { context } from '../../main'

type paginationProps = {
    paginationArray: Array<number>
    updateFunction: Function
}
function Pagination(props: paginationProps) {

    const { store } = useContext(context)
    const paginationArray: number[] = usePagination(10, props.paginationArray.length)

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * 10 + 1;
    let rightPortionPageNumber = portionNumber * 10;

    const isPageNumberInRange = (p: number) => p >= leftPortionPageNumber && p <= rightPortionPageNumber;
    const isFirstPortionNumber = () => portionNumber <= 1;
    const isLastPortionNumber = () => portionNumber >= paginationArray.length;



    return (
        <fieldset className={classes.pagination}>
            {paginationArray.length > 0 && <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={isFirstPortionNumber()} className={classes.pagination__button}><img className={classes.pagination__button__img} src='/arrow.svg'></img></button>}
            {

                props.paginationArray.filter((p) => isPageNumberInRange(p)).map((item, id) => (
                    <label className={classes.pagination__label} key={id} >
                        {store.searchParams.pageNumber == item && <input className={classes.pagination__radio} type="radio" name='pagination' value={item} data-testid={'radio' + item} checked onChange={() => props.updateFunction(store.searchParams.searchString, item, store.searchParams.pageSize, store.searchParams.sortingMethod, store.searchParams.category)} />}
                        {store.searchParams.pageNumber != item && <input className={classes.pagination__radio} type="radio" name='pagination' value={item} data-testid={'radio' + item} onChange={() => props.updateFunction(store.searchParams.searchString, item, store.searchParams.pageSize, store.searchParams.sortingMethod, store.searchParams.category)} />}
                        <span className={classes.pagination__span}>{item}</span>
                    </label>
                ))
            }
            {paginationArray.length > 0 && <button onClick={() => setPortionNumber(portionNumber + 1)} disabled={isLastPortionNumber()} className={classes.pagination__button}><img className={classes.pagination__button__img + " " + classes.right} src='/arrow.svg'></img></button>}

        </fieldset >
    )
}

export default Pagination

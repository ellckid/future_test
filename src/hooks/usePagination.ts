import { useMemo, useState } from "react"

export const usePagination: Function = (limit: number, pagesCount: number) => {
    const [result, setResult] = useState<number[]>([])
    let array: number[] = []
    const paginationNumber = Math.ceil(pagesCount / limit)
    for (let i = 0; i < paginationNumber; i++) {
        array.push(i + 1)
    }
    useMemo(() => {
        setResult(array)
    }, [limit, pagesCount])

    return result
}


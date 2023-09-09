export type bookInfo = {
    accessInfo: {}
    etag: string
    id: string
    kind: string
    saleInfo: {}
    selfLink: string
    volumeInfo: {
        authors?: Array<string>,
        description?: string,
        pageCount: number,
        imageLinks?: {
            small?: string,
            thumbnail?: string
        },
        title?: string
        categories?: Array<string>
    }
}

export type searchingParams = {
    searchString: string | null
    pageNumber: number
    pageSize: number
    sortingMethod: string
    category: string
}




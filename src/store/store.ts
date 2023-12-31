import { makeAutoObservable } from "mobx";
import BookService from '../services/BookService'
import { bookInfo } from "../types/types";



export default class Store {
    books: bookInfo[] = [];
    booksTotalCount: number = 0
    isLoading = false;
    searchParams = {
        searchString: '',
        pageNumber: 1,
        pageSize: 0,
        sortingMethod: '',
        category: ''
    }

    constructor() {
        makeAutoObservable(this);
    }
    setbooks(books: bookInfo[]) {
        this.books = books;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    setBooksTotalCount(booksTotalCount: number) {
        this.booksTotalCount = booksTotalCount
    }
    setSearchParams(searchParams: {
        searchString: string,
        pageNumber: number,
        pageSize: number,
        sortingMethod: string,
        category: string
    }) {
        this.searchParams = searchParams
    }


    async getBookList(searchString: string, pageNumber: number, pageSize: number, sortingMethod: string, category: string) {
        this.setLoading(true);
        try {
            const response = (await BookService.getBooksList({ searchString, pageNumber, pageSize, sortingMethod, category }))

            if (!response.items?.length) {
                this.setBooksTotalCount(-1)
                this.setbooks([])
            } else {
                this.setBooksTotalCount(response.totalItems)
                this.setbooks(response.items)
            }

            this.setSearchParams({ searchString, pageNumber, pageSize, sortingMethod, category })
            console.log(response.items)
            console.log(response.totalItems)
            console.log(this.searchParams)

            return response



        } catch (e) {
            console.log(e)
        }
        finally {
            this.setLoading(false)
        }
    }

    async getBook(selfLink: string | undefined) {
        this.setLoading(true);
        try {
            const response = (await BookService.getBook(selfLink))
            if (response) {
                return response
            }

        } catch (error) {
            if (error == 429)
                throw new Error('хорош дудосить')
        }
        finally {
            this.setLoading(false)
        }
    }
}


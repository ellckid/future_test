import $api, { API_KEY } from "../http";
import { bookInfo, searchingParams } from "../types/types";

export default class BookService {
    static async getBooksList({ searchString, pageNumber, pageSize, sortingMethod, category }: searchingParams) {
        const params = {
            API_KEY,
            startIndex: pageNumber,
            orderBy: sortingMethod,
            maxResults: pageSize,
        };

        return $api.get<bookListResponce>(`?q=${searchString}+subject:${category}`, { params }).then(res => res.data)
    }
    static async getBook(selfLink: string | undefined) {
        return $api.get<bookInfo>(`${selfLink}`).then(res => res.data)
    }
}
type bookListResponce = {
    items: Array<bookInfo>,
    totalItems: number
}




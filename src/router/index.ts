import bookPage from "../pages/bookPage/bookPage";
import searchPage from "../pages/searchPage/searchPage";

export const publicRoutes = [
    { path: '/', component: searchPage, exact: true },
    { path: '/:id', component: bookPage, exact: true }
]

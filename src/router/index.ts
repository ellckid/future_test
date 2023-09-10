import bookPage from "../pages/bookPage/bookPage";
import searchPage from "../pages/searchPage/searchPage";

export const publicRoutes = [
    { path: '/future_test/', component: searchPage, exact: true },
    { path: '/future_test/:id', component: bookPage, exact: true }
]

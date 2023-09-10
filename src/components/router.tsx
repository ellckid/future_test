import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { context } from '../main'
import { publicRoutes } from "../router/"
import { Route, Routes } from "react-router-dom";
import Loader from './Loader/loader';

const AppRouter = () => {
    const { store } = useContext(context);

    if (store.isLoading) {
        <Loader />
    }

    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.component />}
                    path={route.path}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default observer(AppRouter);

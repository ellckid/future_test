
import { observer } from 'mobx-react-lite'

import SearchPage from './pages/searchPage/searchPage'

import classes from './App.module.css'


function App() {
    return (
        <section className={classes.pages_container}>
            <SearchPage></SearchPage>
        </section >
    )
}

export default observer(App)

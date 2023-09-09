import { observer } from 'mobx-react-lite'
import SearchPage from './pages/searchPage/searchPage'
import classes from './App.module.css'


function App() {
    return (
        <main className={classes.pages_container}>
            <SearchPage></SearchPage>
        </main >
    )
}

export default observer(App)

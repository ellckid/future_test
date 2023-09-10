import { observer } from 'mobx-react-lite'
import classes from './App.module.css'
import Router from './components/router'
import { BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <main className={classes.pages_container}>
                <Router />
            </main >
        </BrowserRouter>
    )
}

export default observer(App)

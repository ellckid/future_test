import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Store from './store/store.ts'


const store = new Store();
export const context = createContext({
    store
})
const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'))

root.render(
    <React.StrictMode>
        <context.Provider value={{
            store
        }}>
            <App />
        </context.Provider>
    </React.StrictMode >,
)

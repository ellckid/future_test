import { render, screen } from '@testing-library/react'
import Book from '../components/book/Book'
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';


test('check book component ', () => {
    render(
        <BrowserRouter>
            <Book imgURL='' name='WAR AND PIECE' author={['tolstoy']} genre={["comedian"]} id='1' />
        </BrowserRouter>
    )


    expect(screen.getAllByText('WAR AND PIECE')).toBeTruthy()
})

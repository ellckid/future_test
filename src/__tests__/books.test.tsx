import { render, screen } from '@testing-library/react'
import Book from '../components/book/Book'
import "@testing-library/jest-dom";


test('check book component ', () => {
    render(<Book imgURL='' name='WAR AND PIECE' author={['tolstoy']} genre={["comedian"]} />)

    expect(screen.getAllByText('WAR AND PIECE')).toBeTruthy()
})

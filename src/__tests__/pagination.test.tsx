import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";
import Pagination from '../components/pagination/Pagination';



test('check book component ', () => {
    render(<Pagination paginationArray={[1]} updateFunction={() => { }} />)

    expect(screen.getAllByTestId('radio1')).toBeTruthy()
})

import {render, screen} from "@testing-library/react";
import Home from "@/app/page";


describe('Home', () => {
    it('renders', () => {
        render(<Home />)
        screen.findByText(/Documentation/)
    })
})
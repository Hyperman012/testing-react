import {render, screen} from "@testing-library/react";
import {Pants} from "@/app/pants";
import fetchMock from 'jest-fetch-mock';


describe('Pants', () => {
    describe('base scenario', () => {
        beforeEach(() => {
            fetchMock.resetMocks(); // Clear mocks before each test
            fetchMock.mockResolvedValue({ data: 'mocked data' });

            render(<Pants />);

        });
        it('renders ', () => {

            const ele = screen.findByText('mocked data');
            expect(ele).toBeDefined();
        });

        it('should fetch the thing', () => {

        })

    })

    describe('this given scenario', () => {
        beforeEach(() => {
            //do something else
        });
        it('should not do a thing', () => {

        });

    });
});



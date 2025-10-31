import {act, render, screen} from "@testing-library/react";
import {Pants} from "@/app/pants";
import fetchMock, { FetchMock} from 'jest-fetch-mock';

describe('Pants', () => {
    describe('base scenario', () => {
        beforeEach(() => {
            fetchMock.resetMocks(); // Clear mocks before each test
            fetchMock.mockResponse(JSON.stringify({ data: 'mocked data' }));
        });

        it('renders ', async () => {
            act(() => {
                render(<Pants/>);
            })

            const ele = await screen.findByText('mocked data');
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



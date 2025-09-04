import React from 'react';
import { render, screen } from '@testing-library/react';
import InputArea from '@/components/input-area';


describe('InputArea', () => {
    it('renders an InputArea component with correct button text, value, and placeholder', () => {
        render(<InputArea buttonText='Button text' onChange={() => { }} value="value" placeholder='placeholder' />)

        const button = screen.getByText('Button text');
        const value = screen.getByDisplayValue('value');
        const placeholder = screen.getByPlaceholderText('placeholder');

        expect(button).toBeInTheDocument();
        expect(value).toBeInTheDocument();
        expect(placeholder).toBeInTheDocument();
    })

    it('renders an InputArea component without button if value is not provided', () => {
        render(<InputArea buttonText='Button text' onChange={() => { }} value="" />)

        const button = screen.queryAllByRole('button')

        // [] means no button found
        expect(button).toEqual([])
    })
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import Bubble from '@/components/bubble';


describe('Bubble', () => {
    it('renders an InputArea with correct value', () => {
        render(<Bubble value="value" />)

        const value = screen.getByText('value');
        expect(value).toBeInTheDocument();

    })
})
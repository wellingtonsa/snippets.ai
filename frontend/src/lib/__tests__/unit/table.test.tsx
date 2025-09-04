import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '@/components/table';
import { Snippet } from '@/types/snippets.types';


describe('Table', () => {
    it('renders a Table with correct values', () => {
        const snippets: Snippet[] = [
            {
                text: "Text",
                summary: "Summary",
                created_at: "2025-09-04T14:21:33.575Z",
                updated_at: "2025-09-04T14:21:33.575Z"
            }
        ]

        render(<Table data={snippets} />)

        const value = screen.getByText('Text');
        const summary = screen.getByText('Summary');
        const created_at = screen.getByText(new Date('2025-09-04T14:21:33.575Z').toLocaleString('pt-BR'));
        const updated_at = screen.getByText(new Date('2025-09-04T14:21:33.575Z').toLocaleString('pt-BR'));

        expect(value).toBeInTheDocument();
        expect(summary).toBeInTheDocument();
        expect(created_at).toBeInTheDocument();
        expect(updated_at).toBeInTheDocument();
    })
})
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Snippet } from '@/types/snippets.types';

interface IProps { data: Snippet[] }

const TableView: React.FC<IProps> = ({ data }) => {
    return (
        <div className='flex flex-col w-full max-w-[1200] mt-15 mb-40'>
            <Table>
                <TableCaption>Histórico de resumos</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Texto</TableHead>
                        <TableHead>Resumo</TableHead>
                        <TableHead>Data de Criação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data.map((snippet) => (
                        <TableRow key={`data-${snippet.id}`}>
                            <TableCell className="font-medium w-40 max-h-[80] whitespace-normal align-top"><p className='line-clamp-6 hover:line-clamp-none'>{snippet.text}</p></TableCell>
                            <TableCell className="max-w-100 whitespace-normal align-top">{snippet.summary}</TableCell>
                            <TableCell className="max-w-[100px] align-top">{new Date(snippet.created_at).toLocaleString('pt-BR')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableView;
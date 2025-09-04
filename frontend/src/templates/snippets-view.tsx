"use client"

import React, { useEffect, useState } from 'react';
import InputArea from '@/components/input-area';
import Bubble from '@/components/bubble';
import { useGenerateSnippet, useGetSnippets } from '@/hooks/useSnippets';
import { Snippet } from '@/types/snippets.types';
import Table from '@/components/table';

const SnippetsView: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [lastGenerated, setLastGenerated] = useState<Snippet>();

    const { data } = useGetSnippets();


    useEffect(() => {
        if (data?.success) {
            setSnippets(data.data);
        }
    }, [data])

    const handleSubmit = async () => {
        setLastGenerated(undefined);
        setIsLoading(true);
        const response = await useGenerateSnippet(text);

        if (response.success) {
            setLastGenerated(response.data)
            setSnippets([response.data].concat(snippets));
        }
        setIsLoading(false);
    }

    return (
        <>
            <div className="w-full mb-20 mt-15">
                <h1 className="text-center text-[38px] font-bold">Snippets AI</h1>
                <p className="text-center w-full text-[20px]">Simplifique a informação. Amplifique sua produtividade.</p>
            </div>
            <InputArea buttonText="✨ Gerar resumo ✨" value={text} onChange={setText} onClick={handleSubmit} disabled={isLoading} />
            {lastGenerated && (<Bubble value={lastGenerated.summary} />)}
            <div className='border-1 border-gray-100 w-full mt-20' />
            <Table data={snippets} />
        </>
    )
}

export default SnippetsView;
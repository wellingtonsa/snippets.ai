"use client"

import React, { useState } from 'react';
import InputArea from '@/components/input-area';
import Bubble from '@/components/bubble';

const SnippetsView: React.FC = () => {
    const [text, setText] = useState<string>("");

    const handleSubmit = () => { }
    return (
        <>
            <div className="w-full mb-20 mt-15">
                <h1 className="text-center text-[38px] font-bold">Snippets AI</h1>
                <p className="text-center w-full text-[20px]">Simplifique a informação. Amplifique sua produtividade.</p>
            </div>
            <InputArea buttonText="✨ Gerar resumo ✨" value={text} onChange={setText} onClick={handleSubmit} />
            <Bubble value='' />
        </>
    )
}

export default SnippetsView;
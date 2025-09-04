import React from 'react';

// import { Container } from './styles';

interface IProps {
    value: string
}

const Bubble: React.FC<IProps> = ({ value }) => {
    return (
        <div className='rounded-md flex flex-col w-full max-w-[800] mt-15 bg-cyan-100 p-10'>
            <h2 className='text-[25px] font-bold'>Um breve resumo do seu texto:</h2>
            <p>{value}</p>
        </div>
    )
}

export default Bubble;
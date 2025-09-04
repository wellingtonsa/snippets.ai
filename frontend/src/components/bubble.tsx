import React from 'react';

// import { Container } from './styles';

interface IProps {
    value: string
}

const Bubble: React.FC<IProps> = ({ value }) => {
    return (
        <div className='rounded-md p-20'>
            <p>{value}</p>
        </div>
    )
}

export default Bubble;
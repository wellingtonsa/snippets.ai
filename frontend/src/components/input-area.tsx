import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// import { Container } from './styles';

interface IProps {
    buttonText: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void;
    onClick?: () => void;
    disabled?: boolean;
}

const InputArea: React.FC<IProps> = ({ buttonText, onChange, onClick, value, disabled = false, placeholder }) => {
    return (
        <div className="flex flex-col w-full max-w-[800] item-center relative">
            <Textarea placeholder={placeholder} className="mb-5 bg-gray-100" onChange={(e) => onChange(e.target.value)} value={value} disabled={disabled} />
            {value && <Button className="absolute w-50  bottom-10 right-5" size="lg" onClick={onClick} disabled={disabled}>{buttonText}</Button>}
        </div>
    )
}

export default InputArea;
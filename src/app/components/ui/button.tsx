'use client'
import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
    icon?: boolean;
}

const Button = ({
    children,
    onClick,
    disabled = false,
    icon = false
}: ButtonProps) => {
    console.log('children');

    return (
        <button
            type='button'
            onClick={onClick}
            disabled={disabled}
            className={`hover:bg-[#C778DD33] transition-colors border-1 border-${disabled ? 'gray' : 'primary'} text-${disabled ? 'gray' : 'white'} my-5 text-sm py-1 px-5`}
        >
            {children}
            {icon && disabled ? <span className='pl-2 inline-block rotate-350 items-center'>&ge;</span>
                : <span className='pl-2'>&lt;~&gt;</span>}
        </button>
    );
};

export default Button;
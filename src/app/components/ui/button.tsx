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
            onClick={onClick}
            disabled={disabled}
            className={`hover:bg-[#C778DD33] transition-colors border-1 border-${disabled ? 'gray' : 'primary'} my-5 text-sm py-1 px-5`}
        >
            <p className={`text-${disabled ? 'gray' : 'white'}`}>
                {children}
                {icon && <span className='pl-4'>&lt;~&gt;</span>}
            </p>
        </button>
    );
};

export default Button;
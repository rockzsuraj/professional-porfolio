'use client'
import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
}

const Button = ({
    children,
    onClick,
    disabled = false
}: ButtonProps) => {
    console.log('children');
    
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className='border-1 border-(--color-primary) my-[20px] text-[16px] py-[3px] px-[15px]'
        >
            {children}
        </button>
    );
};

export default Button;
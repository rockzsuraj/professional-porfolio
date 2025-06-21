
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LinkProps {
    url: string;
    children: ReactNode;
    disabled?: boolean;
    className?: string;
    icon?: boolean;
}

const CustomLink = ({
    url,
    children,
    disabled = false,
    icon = false
}: LinkProps) => {
    return (
        <Link
            href={url}
            className={`hover:bg-[#C778DD33] transition-colors border-1 border-${disabled ? 'gray' : 'primary'} text-${disabled ? 'gray' : 'white'} my-5 text-sm py-1 px-5`}
        >
            {children}
            {icon && disabled ? <span className='pl-2 rotate-350 items-center'>&ge;</span>
                : <span className='pl-2'>&lt;~&gt;</span>}
        </Link>
    );
};

export default CustomLink;
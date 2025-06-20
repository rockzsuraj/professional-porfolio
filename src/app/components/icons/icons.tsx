
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    src: string
    alt: string
    height?: number
    width?: number
    url?: string
    className?: string
}

export default function Icon({ src, alt, height = 45, width = 45, url, className = '' }: Props) {
    
    const imageElement = (
        <Image
            src={`/${src}`}
            alt={alt}
            width={width}
            height={height}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                padding: '5px',
                flexShrink: 0,
            }}
            priority
            className={`icon-wrapper ${className}`}
        />
    )

    if (url) {
        return (
            <Link
                href={url}
                className={`hover:animate-pulse ${className}`}
                passHref
            >
                {imageElement}
            </Link>
        )
    }

    return <div>{imageElement}</div>
}
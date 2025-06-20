import Image from 'next/image'
import Link from 'next/link';

interface Props {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    url?: string;
}

export default function Icon({ src, alt, height, width, url }: Props) {
    return (
        <Link href={url || ''} className="icon-wrapper hover:animate-pulse">
            <Image
                src={`/${src}`}
                alt={alt}
                width={width ?? 45}
                height={height ?? 45}
                style={{
                    width: `${width}px`, // Forces exact width
                    height: `${height}px`, // Forces exact height
                    padding: '5px',
                    flexShrink: 0, // Prevents shrinking in flex layouts
                }}
                priority
            />
        </Link>
    )
}
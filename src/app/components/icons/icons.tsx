import Image from 'next/image'

interface Props {
    src: string;
    alt: string;
    height?: number;
    width?: number
}

export default function Icon({ src, alt, height, width }: Props) {
    return (
        <div className="icon-wrapper">
            <Image
                src={`/${src}`}
                alt={alt}
                width={width ?? 45}
                height={height ?? 45}
                style={{ padding: "5px" }}
                priority
            />
        </div>
    )
}
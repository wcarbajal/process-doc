import Image from 'next/image';

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
  style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
  width: number;
  height: number;
}

export const ViewImage = ({
  src,
  alt,
  className,
  style,
  width,
  height
}: Props) => {

/*   const localSrc = ( src ) 
    ? src.startsWith('http') // https://urlcompletodelaimagen.jpg
      ? src
      : `/src/app/(process-doc)/process/images/${ src }`
    : '/imagen/no_disponible.jpg' */;

  return (
    <Image
      src={src ?? '/images/sin_imagen.png'}
      width={ width }
      height={ height}
      alt={ alt }
      className={ className }
      style={ style }
      priority={true}
    />
  );
};

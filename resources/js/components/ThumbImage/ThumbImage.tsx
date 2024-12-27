import classes from '@/pages/Home.module.css';
import { Image } from '@mantine/core';

interface ThumbImageProps {
    src: string,
    title: string,
    classes: string;
}


export function ThumbImage({ src, title, classes }: ThumbImageProps) {
   return <Image
        fit="contain"
        src={src}
        alt={title}
        style={{ border: '1px solid black' }}
        className={classes} />

}

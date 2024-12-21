import { config } from '@/config/config';
import classes from '@/pages/Home.module.css';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Image, Stack, Text, Title } from '@mantine/core';

interface ThumbStackProps {
    feature: Feature;
    position: number;
}

export function ThumbStack({ feature, position }: ThumbStackProps) {
    return (
        <Stack
            key={feature.slug}
            gap="0"
            mb="1rem"
            className={classes.featureStack}
        >
            <Link href={feature.url}>
                <Image
                    src={`${config.mediaBase}/${feature.thumbLocation}`}
                    alt={feature.title}
                    bd="1px solid black"
                    miw="200px"
                    className={`${classes[`featureImage_${position + 1}`]} ${classes.featureImage}`}
                />
            </Link>
            <Text
                size="1rem"
                fw={700}
                ff="PT Sans Narrow"
                mt="0.5rem"
                c="primary.3"
            >
                {feature.sectionTitle}
            </Text>
            <Link href={feature.url}>
                <Title
                    order={3}
                    size="1.5rem"
                    c="secondary.6"
                    ff="PT Sans Narrow"
                    fw="bold"
                >
                    {feature.title}
                </Title>
            </Link>
        </Stack>
    );
}
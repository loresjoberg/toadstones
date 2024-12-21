import { config } from '@/config/config';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Image, Stack, Text, Title } from '@mantine/core';

interface FeaturedStackProps {
    feature: Feature;
}

export function FeaturedStack({ feature }: FeaturedStackProps) {
    return (
        <Stack gap={0}>
            <Link href={feature.url}>
                <Image
                    style={{ border: '1px solid black' }}
                    src={`${config.mediaBase}/${feature.thumbLocation}`}
                    alt={feature.title}
                />
            </Link>
            <Text
                size="md"
                ff="PT Sans Narrow"
                fw={700}
                c="primary.3"
                mt="0.25rem"
            >
                {feature.sectionTitle}
            </Text>
            <Link href={feature.url}>
                <Title
                    order={2}
                    c="secondary.6"
                    size="2rem"
                    ff="PT Sans Narrow"
                >
                    {feature.title}
                </Title>
            </Link>
        </Stack>
    );
}

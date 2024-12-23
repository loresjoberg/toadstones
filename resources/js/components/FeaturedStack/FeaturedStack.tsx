import { config } from '@/config/config';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, Image, Stack, Text, Title } from '@mantine/core';

interface FeaturedStackProps {
    feature: Feature;
}

export function FeaturedStack({ feature }: FeaturedStackProps) {
    return (
        <Stack gap={0}>
            <Anchor component={Link}  href={config.featureUrlPrefix + feature.slug}>
                <Image
                    style={{ border: '1px solid black' }}
                    src={`${config.mediaBase}/${feature.thumbLocation}`}
                    alt={feature.title}
                />
            </Anchor>
            <Text
                size="md"
                ff="PT Sans Narrow"
                fw={700}
                c="primary.3"
                mt="0.25rem"
            >
                {feature.section_title}
            </Text>
            <Anchor  c="secondary.6" component={Link}  href={config.featureUrlPrefix + feature.slug}>
                <Title
                    order={2}
                    size="2rem"
                    ff="PT Sans Narrow"
                >
                    {feature.title}
                </Title>
            </Anchor>
        </Stack>
    );
}

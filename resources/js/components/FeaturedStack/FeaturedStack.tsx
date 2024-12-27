import { config } from '@/config/config';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import { ThumbImage } from '@/components/ThumbImage/ThumbImage';

interface FeaturedStackProps {
    feature: Feature;
}

export function FeaturedStack({ feature }: FeaturedStackProps) {
    return (
        <Stack gap={0}>
            <Anchor component={Link}  href={config.featureUrlPrefix + feature.slug}>
                <ThumbImage src={`${config.mediaBase}/${feature.thumbLocation}`}
                            title={feature.title}
                            classes={''} />
            </Anchor>
            <Text
                fz="1.25rem"
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
                    fz="2rem"
                    ff="PT Sans Narrow"
                    lh="1.75rem"
                >
                    {feature.title}
                </Title>
            </Anchor>
        </Stack>
    );
}

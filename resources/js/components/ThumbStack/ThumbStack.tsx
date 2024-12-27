import { config } from '@/config/config';
import classes from '@/pages/Home.module.css';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import { ThumbImage } from '@/components/ThumbImage/ThumbImage';

interface ThumbStackProps {
    feature: Feature;
    position: number;
}

export function ThumbStack({ feature, position }: ThumbStackProps) {

    const positionSuffix = position%6
    return (
        <Stack
            key={feature.slug}
            gap="0"
            mb="1rem"
            className={classes.featureStack}
        >
            <Anchor component={Link} href={config.featureUrlPrefix + feature.slug}>
                <ThumbImage src={`${config.mediaBase}/${feature.thumbLocation}`}
                            title={feature.title}
                            classes={`${classes[`featureImage_${positionSuffix + 1}`]}`} />
            </Anchor>
            <Text size="1rem"
                  fw={700}
                  ff="PT Sans Narrow"
                  mt="0.5rem"
                  c="primary.3"
            >
                {feature.section_title}
            </Text>
            <Anchor component={Link} href={config.featureUrlPrefix + feature.slug} c="secondary.6">
                <Title
                    order={3}
                    size="1.5rem"
                    ff="PT Sans Narrow"
                    fw="bold"
                >
                    {feature.title}
                </Title>
            </Anchor>
        </Stack>
    );
}

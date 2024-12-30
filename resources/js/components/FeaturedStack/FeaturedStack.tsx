import { config } from '@/config/config';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, AspectRatio, BackgroundImage, Box, Flex, Stack, Text, Title } from '@mantine/core';
import classes from './FeaturedStack.module.css';

interface FeaturedStackProps {
    feature: Feature;
}

export function FeaturedStack({ feature }: FeaturedStackProps) {
    return (
        <Anchor component={Link} href={config.featureUrlPrefix + feature.slug}>
            <Stack gap={0} mb="1rem" mt="1rem" className={classes.mainFeatureCard}>
                <AspectRatio ratio={16 / 9}>
                    <BackgroundImage
                        src={`${config.mediaBase}/${feature.thumbLocation}`}
                        style={{ border: '1px solid black' }}
                    >
                        <Box className={classes.innerImage}>
                            <Box style={{ }}
                                 className={classes.textHolder}>
                                <Text
                                    className={classes.sectionTitle}
                                    c="highlight.3"
                                    mt="0.25rem"
                                >
                                    {feature.section_title}
                                </Text>
                                <Title
                                    className={classes.featureTitle}
                                    order={2}
                                    c="highlight.3"
                                >
                                    {feature.title}
                                </Title>
                            </Box>
                        </Box>
                    </BackgroundImage>
                </AspectRatio>
            </Stack>
        </Anchor>

    );
}

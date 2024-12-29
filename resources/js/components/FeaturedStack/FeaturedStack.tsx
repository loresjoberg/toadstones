import { config } from '@/config/config';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, AspectRatio, BackgroundImage, Box, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { ThumbImage } from '@/components/ThumbImage/ThumbImage';

interface FeaturedStackProps {
    feature: Feature;
}

export function FeaturedStack({ feature }: FeaturedStackProps) {
    return (
        <Anchor component={Link} href={config.featureUrlPrefix + feature.slug}>

            <Stack gap={0} mb="1rem" mt="1rem">
                <AspectRatio ratio={16 / 9}>
                    <BackgroundImage
                        src={`${config.mediaBase}/${feature.thumbLocation}`}
                        style={{ border: '1px solid black' }}
                    >
                        <Flex direction="row">
                            <Box style={{ borderRadius: '0 2rem 2rem 2rem' }} pl="1rem" pt="0.5rem" pb="1rem" pr="1rem"
                                 maw="20rem" bg="rgba(44,38,110,0.75)">
                                <Text
                                    fz="1.5rem"
                                    ff="PT Sans Narrow"
                                    fw="normal"
                                    c="highlight.3"
                                    mt="0.25rem"
                                    style={{ textShadow: '0.075em 0.075em 0.075em rgba(0,0,0,1)' }}
                                >
                                    {feature.section_title}
                                </Text>
                                <Title
                                    order={2}
                                    fz="2.5rem"
                                    ff="PT Sans Narrow"
                                    lh="2.5rem"
                                    c="highlight.3"
                                    style={{ textShadow: '0.075em 0.075em 0.075em rgba(0,0,0,1)' }}
                                >
                                    {feature.title}
                                </Title>
                            </Box>
                        </Flex>
                    </BackgroundImage>
                </AspectRatio>
            </Stack>
        </Anchor>

    );
}

import { FeaturedStack } from '@/components/FeaturedStack/FeaturedStack';
import { ThumbRows } from '@/components/ThumbRows/ThumbRows';
import classes from '@/pages/Home.module.css';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Center, Stack, Text } from '@mantine/core';

interface MainProps {
    mainFeature: Feature;
    features: Feature[];
}

export function MainColumn({ mainFeature, features }: MainProps) {
    return (
        <Stack className={classes.mainColumn}>
            <FeaturedStack feature={mainFeature} />
            <ThumbRows features={features} />
            <Center bg="primary.3">
                <Link href="/archive">
                    <Text
                        lh={2}
                        c="primary.6"
                        size="16pt"
                        ff="PT Sans Narrow"
                        fw="bold"
                    >
                        View All
                    </Text>
                </Link>
            </Center>
        </Stack>
    );
}

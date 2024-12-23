import { config } from '@/config/config';
import { PageProps } from '@/pages/Features/FeaturePage';
import { PagePropsInterface } from '@/pages/HomePage';
import { usePage } from '@inertiajs/react';
import { Center, Image } from '@mantine/core';

export default function ImagePage({ feature }: PageProps) {
    const formattedFeature = feature;

    return (
        <Center>
            <Image
                maw="800px"
                src={`${config.mediaBase}/${formattedFeature.mediaLocation}`}
                alt={formattedFeature.title}
            />
        </Center>
    );
}

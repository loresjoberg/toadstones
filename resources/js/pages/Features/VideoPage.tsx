import { config } from '@/config/config';
import { PageProps } from '@/pages/Features/FeaturePage';
import { PagePropsInterface } from '@/pages/HomePage';
import { usePage } from '@inertiajs/react';
import { AspectRatio } from '@mantine/core';

export default function VideoPage({ feature }: PageProps) {

    const formattedFeature = feature;

    return (
        <AspectRatio ratio={16 / 9}>
            <iframe
                src={`${config.mediaBase}/${formattedFeature.mediaLocation}`}
                title={formattedFeature.title}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </AspectRatio>
    );
}

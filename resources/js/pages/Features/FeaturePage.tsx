import FrontLayout from '@/layouts/FrontLayout';
import HtmlPage from '@/pages/Features/HtmlPage';
import ImagePage from '@/pages/Features/ImagePage';
import VideoPage from '@/pages/Features/VideoPage';
import { Feature } from '@/types/toadstones';
import { Head, usePage } from '@inertiajs/react';
import { Container } from '@mantine/core';
import { RelatedFeatures } from '@/components/RelatedFeatures/RelatedFeatures';

export interface PageProps {
    feature: Feature;
}

export interface FeaturePageProps {
    feature: Feature;
    features: Feature[];
}

export default function FeaturePage({ feature, features }: FeaturePageProps) {
    if (!feature) {
        return <Head title="Not Found" />;
    }

    const getFeature = () => {
        if (feature.medium === 'html') {
            return <HtmlPage feature={feature} />;
        }

        if (feature.medium === 'video') {
            return <VideoPage feature={feature} />;
        }

        return <ImagePage feature={feature} />;

    };

    return (
        <FrontLayout>
            <Head title={feature.title} />
            <Container size="md">
                {getFeature()}
                <RelatedFeatures features={features} section={feature.section_slug}/>
            </Container>
        </FrontLayout>
    );
}

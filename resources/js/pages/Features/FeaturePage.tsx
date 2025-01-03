import FrontLayout from '@/layouts/FrontLayout';
import HtmlPage from '@/pages/Features/HtmlPage';
import ImagePage from '@/pages/Features/ImagePage';
import VideoPage from '@/pages/Features/VideoPage';
import { Feature } from '@/types/toadstones';
import { Head } from '@inertiajs/react';
import { Container, Space } from '@mantine/core';
import { RelatedFeatures } from '@/components/RelatedFeatures/RelatedFeatures';
import { TextRule } from '@/components/TextRule/TextRule';

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
            <Head>
                <title>{feature.title}</title>
            </Head>
            {getFeature()}
            <Space h="lg" />
            <TextRule label="More Like This" />
            <Space h="md" />
            <RelatedFeatures features={features} mainFeature={feature} />
        </FrontLayout>
    );
}

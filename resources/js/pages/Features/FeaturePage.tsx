import FrontLayout from '@/Layouts/FrontLayout';
import HtmlPage from '@/pages/Features/HtmlPage';
import ImagePage from '@/pages/Features/ImagePage';
import VideoPage from '@/pages/Features/VideoPage';
import { RawFeature } from '@/types/toadstones';
import { Head, usePage } from '@inertiajs/react';
import { Container } from '@mantine/core';
import { config } from '@/config/config';

export interface PageProps {
    feature: RawFeature;
}

export default function FeaturePage({ feature }) {
    const { sections } = usePage().props;

    console.log('sections', sections);
    console.log('feature', feature);

    if (!feature) {
        return  <Head title="Not Found" />;
    }

    if (feature.section === 'the-ratings' || feature.medium === 'html') {
        return (
            <FrontLayout>
                <Head title={feature.title} />
                <Container size="md">
                    <HtmlPage feature={feature} />
                </Container>
            </FrontLayout>
        );
    }

    if (feature.section === 'bandwidth-theater' || feature.medium === 'video') {
        return (
            <FrontLayout>
                <Head title={feature.title} />

                <Container size="md">
                    <VideoPage feature={feature} />
                </Container>
            </FrontLayout>
        );
    }

    return (
        <FrontLayout>
            <Head title={feature.title} />
            <Container size="md">
                <ImagePage feature={feature} />
            </Container>
        </FrontLayout>
    );
}

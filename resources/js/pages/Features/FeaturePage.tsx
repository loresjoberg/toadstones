import FrontLayout from '@/layouts/FrontLayout';
import HtmlPage from '@/pages/Features/HtmlPage';
import ImagePage from '@/pages/Features/ImagePage';
import VideoPage from '@/pages/Features/VideoPage';
import { Feature } from '@/types/toadstones';
import { Head, usePage } from '@inertiajs/react';
import { Container } from '@mantine/core';

export interface PageProps {
    feature: Feature;
}

export default function FeaturePage({ feature }: PageProps) {
    const { sections } = usePage().props;

    console.log('sections', sections);
    console.log('feature', feature);

    if (!feature) {
        return  <Head title="Not Found" />;
    }

    if (feature.section_slug === 'the-ratings' || feature.medium === 'html') {
        return (
            <FrontLayout>
                <Head title={feature.title} />
                <Container size="md">
                    <HtmlPage feature={feature} />
                </Container>
            </FrontLayout>
        );
    }

    if (feature.section_slug === 'bandwidth-theater' || feature.medium === 'video') {
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

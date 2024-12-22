import { FeatureForm } from '@/components/Forms/FeatureForm/FeatureForm';
import { router } from '@inertiajs/react';
import { Box, Container, Title } from '@mantine/core';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function EditFeature({ feature }) {
    const initialValues = {
        title: feature.title,
        slug: feature.slug,
        section_id: feature.section_id,
        medium: feature.medium,
        html: feature.html,
        imageUrl: `/storage/${feature.mediaLocation}`,
        videoUrl: `/storage/${feature.mediaLocation}`,
        thumbnailUrl: `/storage/${feature.thumbLocation}`,
        status: feature.status,
        isPopular: !!feature.isPopular,
        launch: new Date(feature.launch)
    };
    const submitRoute = (values) => {
        console.log('EditFeature::submitRoute', values);
        values._method = 'put';
        router.post('/api/features', values);
    };

    return (<AuthenticatedLayout>
            <Container size="sm">
                <Title>Edit Feature</Title>
                <Box mt="3rem">
                    <FeatureForm
                        action="edit"
                        initialValues={initialValues}
                        submitRoute={submitRoute}
                    />
                </Box>
            </Container>
        </AuthenticatedLayout>
    );
}

import { FeatureForm } from '@/Components/Forms/FeatureForm/FeatureForm';
import { router } from '@inertiajs/react';
import { Box, Container, Title } from '@mantine/core';

export default function NewFeature() {
    const initialValues = {
        title: '',
        slug: '',
        section_id: 1,
        medium: 'image',
        html: '',
        imageUrl: '',
        videoUrl: '',
        thumbnailUrl: '',
        status: 'active',
        isPopular: false,
        launch: new Date(),
    };

    const submitRoute = (values) => {
        router.post('/api/features', values);
    };

    return (
        <Container size="sm">
            <Title>New Feature</Title>
            <Box mt="3rem">
                <FeatureForm
                    initialValues={initialValues}
                    submitRoute={submitRoute}
                    source="new"
                />
            </Box>
        </Container>
    );
}

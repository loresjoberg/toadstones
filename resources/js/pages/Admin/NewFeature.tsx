import { FeatureForm } from '@/components/Forms/FeatureForm/FeatureForm';
import { router } from '@inertiajs/react';
import { Box, Container, Title } from '@mantine/core';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { RequestPayload } from '@inertiajs/core';


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
        _method: 'POST',
    };

    const submitRoute = (values: RequestPayload) => {
        router.post('/api/features', values);
    };

    return (<AuthenticatedLayout>
            <Container size="sm">
                <Title>New Feature</Title>
                <Box mt="3rem">
                    <FeatureForm
                        action="new"
                        initialValues={initialValues}
                        submitRoute={submitRoute}
                    />
                </Box>
            </Container>
        </AuthenticatedLayout>

    );
}

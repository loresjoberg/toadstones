import { FeatureForm } from '@/components/Forms/FeatureForm/FeatureForm';
import { router, usePage } from '@inertiajs/react';
import { RequestPayload } from '@inertiajs/core';
import { Box, Container, Title } from '@mantine/core';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Feature, FeatureFormValues } from '@/types/toadstones';
import { NotificationData, notifications } from '@mantine/notifications';

interface EditFeatureProps {
    feature: Feature
}
export default function EditFeature({ feature }: EditFeatureProps) {
    const { flash } = usePage().props

    const initialValues = {
        title: feature.title,
        slug: feature.slug,
        section_id: feature.section_id,
        medium: feature.medium,
        html: feature.html,
        image: null,
        video: null,
        thumbnail: null,
        imageUrl: `/storage/${feature.mediaLocation}`,
        videoUrl: `/storage/${feature.mediaLocation}`,
        thumbnailUrl: `/storage/${feature.thumbLocation}`,
        status: feature.status,
        isPopular: !!feature.isPopular,
        launch: new Date(feature.launch),
        _method: 'PUT'
    };
    const submitRoute = (values: FeatureFormValues) => {
        console.log('submitRoute.values', values)
        router.post('/api/features/' + values.slug, values as RequestPayload);
    };

    if (flash.message) {
        notifications.show({
            color: 'green',
            title: flash.message as string,
        } as NotificationData)
    }


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

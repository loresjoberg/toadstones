import { router } from '@inertiajs/react';
import { RequestPayload } from '@inertiajs/core';
import {
    Box,
    Button,
    Container,
    Group,
    Stack,
    Title
} from '@mantine/core';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { useForm } from '@mantine/form';
import { Feature } from '@/types/toadstones';

interface ConfirmDeleteFeatureProps  {
    feature: Feature
}

interface DeleteValues  {
    slug: string,
    _method: string,
}
export default function ConfirmDeleteFeature({ feature }:ConfirmDeleteFeatureProps) {
    const submitRoute = (values: RequestPayload) => {
        console.log('ConfirmDeleteFeature::submitRoute',values)
        router.post('/api/features/'+ feature.slug, values);
    };

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            slug: feature.slug,
            _method: 'DELETE'
        },
        validate: {
            slug: (value) => (value ? null : 'Slug Required')
        }
    });


    return (<AuthenticatedLayout>
            <Container size="sm">
                <Box mt="3rem">
                    <form onSubmit={form.onSubmit((values) => submitRoute<DeleteValues>(values))}>
                        <Stack>
                            <Title>Delete {feature.title}?</Title>
                            <Group justify="flex-start" mt="md">
                                <Button>Cancel</Button>
                                <Button type="submit">Confirm</Button>
                            </Group>
                        </Stack>
                    </form>
                </Box>
            </Container>
        </AuthenticatedLayout>
    );
}

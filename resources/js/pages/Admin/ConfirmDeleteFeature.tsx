import { router } from '@inertiajs/react';
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

export default function ConfirmDeleteFeature({ feature }) {
    const submitRoute = (values) => {
        console.log('ConfirmDeleteFeature::submitRoute', values);
        values._method = 'delete';
        router.post('/api/features', values);
    };

    const form = useForm({
        mode: 'uncontrolled',
        initialValues:  {
           slug: feature.slug
        },
        validate: {
            slug: (value) => (value ? null : 'Slug Required'),
        },
    });


    return (<AuthenticatedLayout>
            <Container size="sm">
                <Box mt="3rem">
                    <form onSubmit={form.onSubmit((values) => submitRoute(values))}>
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

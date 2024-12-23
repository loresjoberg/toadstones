import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Anchor, Stack, Title } from '@mantine/core';
import { config } from '@/config/config';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title={`${config.siteName} Dashboard`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Title order={1}>{config.siteName} Admin</Title>
                            <Stack mt="2rem">
                                <Anchor component={Link} href="/admin/list-features">
                                    List Features
                                </Anchor>
                                <Anchor component={Link} href="/admin/new-feature">
                                    Add New Feature
                                </Anchor>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

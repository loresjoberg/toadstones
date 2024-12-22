import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Feature } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Box, Container, Group, Title } from '@mantine/core';
import '@mantine/core/styles.layer.css';
import { sortBy } from 'lodash';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import 'mantine-datatable/styles.layer.css';
import { useEffect, useState } from 'react';

interface FeatureListProps {
    features: Feature[];
}

export default function ListFeatures({ features }: FeatureListProps) {
    const [sortStatus, setSortStatus] = useState<
        DataTableSortStatus<Feature[]>
    >({
        columnAccessor: 'title',
        direction: 'asc'
    });
    const [records, setRecords] = useState(sortBy(features, 'title'));

    useEffect(() => {
        const data = sortBy(features, sortStatus.columnAccessor) as Feature[];
        setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [sortStatus]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Container size="sm" pb="5rem">
                <Title>Features</Title>
                <DataTable
                    mt="2rem"
                    withTableBorder
                    borderRadius="sm"
                    withColumnBorders
                    striped
                    highlightOnHover
                    records={records}
                    columns={[
                        {
                            accessor: 'edit',
                            title: '#',
                            textAlign: 'right',
                            width: 120,
                            render: (feature: Feature) => {
                                return (
                                    <Group>
                                        <Link
                                            href={`/admin/edit-feature/${feature.slug}`}
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={`/admin/delete-feature/${feature.slug}`}
                                        >
                                            Delete
                                        </Link>
                                    </Group>
                                );
                            }
                        },
                        { accessor: 'title', sortable: true },
                        { accessor: 'launch', sortable: true }
                    ]}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                ></DataTable>
                <Box mt="2rem">
                    <Link href={'/admin/new-feature'}>Add New Feature</Link>
                </Box>
            </Container>
        </AuthenticatedLayout>
    );
}

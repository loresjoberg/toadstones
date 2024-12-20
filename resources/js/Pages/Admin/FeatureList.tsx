import {
    Box,
    Container,
    Title
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import { Link } from "@inertiajs/react";
import { Feature } from "@/types/toadstones";
import { sortBy } from "lodash";


interface FeatureListProps {
    features: Feature[]
}

export default function FeatureList({ features }: FeatureListProps) {
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Feature[]>>({
        columnAccessor: 'title',
        direction: 'asc',
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
                            width: 40,
                            render: (feature) => { return <Link href={`/admin/edit-feature/${feature.slug}`}>Edit</Link> }
                        },
                        { accessor: "title", sortable: true },
                        { accessor: "launch", sortable: true }
                    ]}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}>
                </DataTable>
                <Box mt="2rem">
                    <Link href={"/admin/new-feature"}>Add New Feature</Link>
                </Box>
            </Container>
        </AuthenticatedLayout>
    );
}

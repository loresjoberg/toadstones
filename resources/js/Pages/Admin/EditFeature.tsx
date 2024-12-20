import {
    Box,
    Container,
    Title
} from "@mantine/core";
import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from "@inertiajs/react";
import { FeatureForm } from "@/Components/Forms/FeatureForm/FeatureForm";


export default function EditFeature({feature}) {

    const initialValues = {
        title: feature.title,
        slug: feature.slug,
        section_id: feature.section_id,
        medium: feature.medium,
        html: feature.html,
        image: feature.mediaLocation,
        video: feature.mediaLocation,
        status: feature.status,
        isPopular: feature.isPopular,
        thumbnail: feature.thumbLocation,
        launch: new Date(feature.launch)
    }
    const send =  (values) => {
        router.put('/api/features', values)
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
        <Container size="sm">
            <Title>Edit Feature</Title>
            <Box mt="3rem">
                <FeatureForm send={send}  initialValues={initialValues}/>
            </Box>
        </Container>
        </AuthenticatedLayout>
    );
}

import { Box, Container, Title } from "@mantine/core";
import React from "react";
import { FeatureForm } from "@/Components/Forms/FeatureForm/FeatureForm";
import { router } from "@inertiajs/react";


export default function NewFeature() {

    const initialValues = {
        title: "",
        slug: "",
        section_id: 1,
        medium: "image",
        html: "",
        image: null,
        video: null,
        status: "active",
        isPopular: false,
        thumbnail: null,
        launch: new Date()
    };

    const submitRoute = (values) => {
        router.post("/api/features", values);
    };


    return (
        <Container size="sm">
            <Title>New Feature</Title>
            <Box mt="3rem">
                <FeatureForm initialValues={initialValues} submitRoute={submitRoute}/>
            </Box>
        </Container>
    )
        ;
}

import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import FrontLayout from '@/layouts/FrontLayout';
import { Container, Flex, Title, Text } from '@mantine/core';
import { Head } from '@inertiajs/react';

export default function SearchPage({ query, features }) {
    return (
        <FrontLayout>
            <Head title="Search Results"/>
            <Container>
                <Title order={2} mb="lg">
                    Search results for{' '}
                    <Text c="secondary.3">{query}</Text>
                </Title>
                <Flex direction="row" gap="2rem">
                    {features.length ? (
                        features.map((feature) => {
                            return (
                                <ThumbStack
                                    position={3}
                                    feature={feature}
                                    key={feature.slug}
                                />
                            );
                        })
                    ) : (
                        <div>None found</div>
                    )}
                </Flex>
            </Container>
        </FrontLayout>
    );
}

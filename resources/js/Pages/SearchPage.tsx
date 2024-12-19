import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import { dsColors } from '@/config/dsColors';
import { Container, Flex, Title } from '@mantine/core';
import FrontLayout from "@/Layouts/FrontLayout";

export default function SearchPage({ query, features }) {
    return (
        <FrontLayout>
            <Container>
                <Title order={2} mb="lg">
                    Search results for{' '}
                    <span style={{ color: dsColors.lightPurple }}>{query}</span>
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

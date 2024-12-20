import { ArchiveStack } from '@/components/ArchiveStack/ArchiveStack';
import { config } from '@/config/config';
import { dsColors } from '@/config/dsColors';
import FrontLayout from '@/Layouts/FrontLayout';
import { PagePropsInterface } from '@/pages/HomePage';
import { formatFeatures } from '@/util/data-access';
import { Head, usePage } from '@inertiajs/react';
import { Center, Container, Flex, Loader, Title } from '@mantine/core';
import _ from 'lodash';

export default function ArchivePage({ section, features }) {
    const { sections } = usePage<PagePropsInterface>().props;

    const formattedFeatures = formatFeatures(features, sections);

    const archiveTitle = section ? `${section.title} Archive` : 'Archive';
    return _.isEmpty(formattedFeatures) ? (
        <Center mt="5rem">
            <Loader />
        </Center>
    ) : (
        <FrontLayout>
            <Head title={archiveTitle} />
            <Container size="md" mt="2rem" mb="2rem">
                <Title c="primary.6">{archiveTitle}</Title>
                <Flex
                    direction="row"
                    justify="space-between"
                    wrap="wrap"
                    gap="lg"
                    mt="2rem"
                >
                    {formattedFeatures.map((feature) => (
                        <ArchiveStack
                            key={feature.slug}
                            launch={feature.launch}
                            thumb={`${config.mediaBase}/${feature.thumbLocation}`}
                            title={feature.title}
                            destination={`/p/${feature.slug}`}
                        />
                    ))}
                </Flex>
            </Container>
        </FrontLayout>
    );
}

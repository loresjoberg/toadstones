import { ArchiveStack } from '@/components/ArchiveStack/ArchiveStack';
import { config } from '@/config/config';
import FrontLayout from '@/layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import { Box, Center, Container, Flex, Loader, Title } from '@mantine/core';
import _ from 'lodash';
import { Feature, Section } from '@/types/toadstones';
import classes from './ArchivePage.module.css';



type ArchivePageTypes = {
    section: Section,
    features: Feature[]
}

export default function ArchivePage({ section, features }: ArchivePageTypes) {
    const formattedFeatures = _.orderBy(features, ['launch'], ['desc']);
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
                    className={classes.archiveListing}
                    direction="row"
                    justify="space-between"
                    wrap="wrap"
                    gap="0"
                    mt="2rem"
                >
                    {formattedFeatures.map((feature) => (
                            <ArchiveStack
                                section={feature.section_title}
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

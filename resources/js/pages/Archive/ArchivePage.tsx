import { ArchiveStack } from '@/components/ArchiveStack/ArchiveStack';
import { config } from '@/config/config';
import FrontLayout from '@/layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {  Center, Container, Flex, Loader, Title } from '@mantine/core';
import _ from 'lodash';
import { Feature, Section } from '@/types/toadstones';
import classes from './ArchivePage.module.css';
import React from 'react';



type ArchivePageTypes = {
    section: Section,
    features: Feature[]
}

export default function ArchivePage({ section, features }: ArchivePageTypes) {
    const ordered = _.orderBy(features, ['launch'], ['desc']);
    const archiveTitle = section ? `${section.title} Archive` : 'Archive';

    const thumbPadding = () => {
        const toAdd = (ordered.length - 1)%3;
        const elements: React.JSX.Element[] = [];
        for (let i = 0; i < toAdd; i++) {
            elements.push(<div key={`padding-${i}`}>&nbsp;</div>)
        }
        return elements;
    }

    return _.isEmpty(ordered) ? (
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
                    {ordered.map((feature, idx) => (
                            <ArchiveStack
                                position={idx}
                                key={feature.slug}
                                section={feature.section_title}
                                launch={feature.launch}
                                thumb={`${config.mediaBase}/${feature.thumbLocation}`}
                                title={feature.title}
                                destination={`/p/${feature.slug}`}
                            />
                    ))}
                    {thumbPadding()}
                </Flex>
            </Container>
        </FrontLayout>
    );
}

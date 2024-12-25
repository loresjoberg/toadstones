import { Link } from '@inertiajs/react';
import { Anchor, Image, Stack, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';

interface ArchiveStackProps {
    thumb?: string;
    altText?: string;
    title?: string;
    section?: string;
    launch: string;
    destination: string;
}

export function ArchiveStack({
                                 thumb,
                                 title,
                                 section,
                                 launch,
                                 destination
                             }: ArchiveStackProps) {


    const formatDate = (launch: string) => {
        return dayjs(launch).format('D MMMM YYYY')
    };

    return (
        <Stack gap="0">
            <Anchor component={Link} href={destination}>
                <Image

                    fit="contain"
                    src={thumb}
                    alt={title}
                    style={{ borderRadius: '0 3rem 0 3rem' }}
                />
            </Anchor>
            <Text
                size="sm"
                fw={700}
                ff="PT Sans Narrow"
                c="primary.3"
                mt="0.25rem"
            >
                {section}
            </Text>
            <Anchor component={Link} href={destination} c="secondary.6">
                <Title order={3}
                       fz="1.5rem"
                       ff="PT Sans Narrow"
                       fw="bold"
                >
                    {title}
                </Title>
            </Anchor>
            <Text
                size="sm"
                fw={700}
                ff="PT Sans Narrow"
                c="primary.3"
                mt="0"
            >
                {formatDate(launch)}
            </Text>
        </Stack>
    );
}

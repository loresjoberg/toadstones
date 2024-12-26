import { Link } from '@inertiajs/react';
import { Anchor, Group, Image, Stack, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import classes from '@/pages/Home.module.css';

interface ArchiveStackProps {
    thumb?: string;
    altText?: string;
    title?: string;
    section?: string;
    launch: string;
    destination: string;
    position: number;
}

export function ArchiveStack({
                                 thumb,
                                 title,
                                 section,
                                 launch,
                                 destination,
                                 position
                             }: ArchiveStackProps) {


    const formatDate = (launch: string) => {
        return dayjs(launch).format('D MMMM, YYYY');
    };

    return (
        <Stack gap="0" mb="0.75rem">
            <Anchor component={Link} href={destination}>
                <Image
                    fit="contain"
                    src={thumb}
                    alt={title}
                    style={{ borderRadius: '0 3rem 0 3rem' }}
                    className={`${classes[`featureImage_${position + 1}`]}`}

                />
            </Anchor>
            <Group mt="0.25rem" justify="space-between">
                <Text
                    size="sm"
                    fw={700}
                    ff="PT Sans Narrow"
                    c="primary.3"
                    mt="0"
                >
                    {section}
                </Text>
                <Text
                    size="sm"
                    fw={700}
                    ff="PT Sans Narrow"
                    c="primary.3"
                    mt="0"
                >
                    {formatDate(launch)}
                </Text>
            </Group>
            <Anchor component={Link} href={destination} c="secondary.6">
                <Title order={3}
                       fz="1.5rem"
                       ff="PT Sans Narrow"
                       lh={1.2}
                       fw="bold"
                >
                    {title}
                </Title>
            </Anchor>

        </Stack>
    );
}

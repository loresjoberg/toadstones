import { Link } from '@inertiajs/react';
import { Anchor, Group, Stack, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import classes from '@/pages/Home.module.css';
import { ThumbImage } from '@/components/ThumbImage/ThumbImage';

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

    const positionSuffix = position%6

    return (
        <Stack gap="0" mb="0.75rem">
            <Anchor component={Link} href={destination}>
                <ThumbImage src={thumb}
                            title={title}
                            classes={`${classes[`featureImage_${positionSuffix + 1}`]}`} />
            </Anchor>
            <Group gap="0" mt="0.25rem" justify="space-between">
                <Text
                    className={classes.sectionTitle}
                    fw={700}
                    ff="PT Sans Narrow"
                    c="primary.3"
                    mt="0"
                >
                    {section}
                </Text>
                <Text
                    className={classes.sectionTitle}
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
                       className={classes.featureTitle}
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

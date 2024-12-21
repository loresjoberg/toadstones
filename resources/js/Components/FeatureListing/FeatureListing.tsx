import { Group, Image, Text } from '@mantine/core';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './layout.css';

export function FeatureListing({ feature }) {
    const formatDate = (launch: string) => {
        return launch;
        // return launch.toLocaleDateString("en-us", { month: "short", year: "numeric", day: "numeric" });
    };

    return (
        <Group gap="sm" mt="1rem">
            <Text>{feature.title}</Text>
            <Image
                style={{ maxWidth: '100px' }}
                src={`/storage/${feature.thumbLocation}`}
                alt={feature.title}
            />
            <Text
                size="sm"
                fw={700}
                ff="PT Sans Narrow"
                c="primary.3"
                mt="0.25rem"
            >
                {formatDate(feature.launch)}
            </Text>
        </Group>
    );
}

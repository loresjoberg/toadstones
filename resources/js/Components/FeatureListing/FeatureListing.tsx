import { Group, Image, Stack, Text, Title } from "@mantine/core";
import { dsColors } from "@/config/dsColors";
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './layout.css';

interface ArchiveStackProps {
    thumb?: string,
    altText?: string,
    title?: string,
    launch: Date
    destination: string
}

export function FeatureListing({ feature }) {

    const formatDate = (launch: string) => {
        return launch;
        // return launch.toLocaleDateString("en-us", { month: "short", year: "numeric", day: "numeric" });

    };

    return <Group gap="sm" mt="1rem">
        <Text>{feature.title}</Text>
        <Image style={{maxWidth: "100px"}} src={`/storage/${feature.thumbLocation}`} alt={feature.title} />
        <Text size="sm" fw={700} ff="PT Sans Narrow" c={dsColors.lightBlue}
              mt="0.25rem">{formatDate(feature.launch)}</Text>
    </Group>;
}

import { Image, Stack, Text, Title } from "@mantine/core";
import { dsColors } from "@/config/dsColors";
import { Feature } from "@/types/toadstones";
import { config } from "@/config/config";
import { Link } from "@inertiajs/react";

interface FeaturedStackProps {
    feature: Feature,
}

export function FeaturedStack({ feature }: FeaturedStackProps) {
    return <Stack gap={0}>
        <Link href={feature.url}>
            <Image style={{ border: "1px solid black" }} src={`${config.mediaBase}/${feature.thumbLocation}`}
                   alt={feature.title} />
        </Link>
        <Text size="md" ff="PT Sans Narrow" fw={700} c={dsColors.lightBlue} mt="0.25rem">{feature.sectionTitle}</Text>
        <Link href={feature.url}>
            <Title order={2} c={dsColors.darkPurple} size="2rem" ff="PT Sans Narrow">{feature.title}</Title>
        </Link>
    </Stack>;
}

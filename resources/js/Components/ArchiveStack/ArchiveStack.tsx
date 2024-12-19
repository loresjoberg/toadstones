import { Image, Stack, Text, Title } from "@mantine/core";
import { dsColors } from "@/config/dsColors";
import { Link } from "@inertiajs/react";

interface ArchiveStackProps {
    thumb?: string,
    altText?: string,
    title?: string,
    launch: Date
    destination: string
}

export function ArchiveStack({ thumb, title, launch, destination }: ArchiveStackProps) {

    const formatDate = (launch: Date) => {
        return launch.toLocaleDateString("en-us", { month: "short", year: "numeric", day: "numeric" });

    };

    return <Stack w="200px" gap="0">
        <Link href={destination}>
            <Image src={thumb} alt={title} style={{ borderRadius: "0 3rem 0 3rem" }} />
        </Link>
        <Text size="sm" fw={700} ff="PT Sans Narrow" c={dsColors.lightBlue} mt="0.25rem">{formatDate(launch)}</Text>
        <Link href={destination}>
            <Title  c={dsColors.darkPurple} order={3} fz="1.5rem" ff="PT Sans Narrow" fw="bold">{title}</Title>
        </Link>
    </Stack>;
}

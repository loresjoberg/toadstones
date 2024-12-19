import React from "react";
import { Link } from "@inertiajs/react";
import { SiteLinkProps } from "@/types/toadstones";
import { MantineColor, StyleProp, Text } from "@mantine/core";


export function SocialLink({ text, href, color }: SiteLinkProps) {
    return <Link href={href}>
        <Text ff="Amatic SC" fw="bold" fz="1.75rem" href={href} c={color as StyleProp<MantineColor>}>
            {text}
        </Text>
    </Link>;
}

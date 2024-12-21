import { SiteLinkProps } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, MantineColor, StyleProp, Text } from '@mantine/core';

export function SocialLink({ text, href, color }: SiteLinkProps) {
    return (
        <Anchor component={Link}  href={href}>
            <Text
                ff="Amatic SC"
                fw="bold"
                fz="1.75rem"
                href={href}
                c={color as StyleProp<MantineColor>}
            >
                {text}
            </Text>
        </Anchor>
    );
}

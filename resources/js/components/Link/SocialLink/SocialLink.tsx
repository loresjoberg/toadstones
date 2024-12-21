import { SiteLinkProps } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, MantineColor, StyleProp, Text } from '@mantine/core';

export function SocialLink({ text, href }: SiteLinkProps) {
    return (
        <Anchor component={Link}  href={href} color="secondary.3">
            <Text
                ff="Amatic SC"
                fw="bold"
                fz="1.75rem"
                href={href}
            >
                {text}
            </Text>
        </Anchor>
    );
}
